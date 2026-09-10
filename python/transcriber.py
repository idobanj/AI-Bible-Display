"""Real-time transcription service using faster-whisper.

Captures microphone audio via sounddevice, runs speech-to-text with
faster-whisper (Silero VAD filtering), and emits structured JSON events
to stdout for the Electron host process.

Protocol (JSON-per-line to stdout):
  { "type": "status",     "state": "<loading|ready|listening|stopped>", "message": "..." }
  { "type": "transcript", "text": "...", "start": 0.0, "end": 1.5, "isFinal": true }
  { "type": "audio",      "level": 0.42 }
  { "type": "error",      "message": "..." }
  { "type": "warning",    "message": "..." }
"""

import argparse
import io
import json
import os
import signal
import sys
import threading
import time
import queue
import urllib.request
import urllib.error
import uuid
import wave

import numpy as np

try:
    import sounddevice as sd
    from faster_whisper import WhisperModel
    HAS_DEPS = True
except ImportError:
    HAS_DEPS = False


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def emit(obj):
    """Write a JSON object as a single line to stdout."""
    print(json.dumps(obj), flush=True)


def rms_level(audio_array):
    """Return RMS level of a float32 audio array, normalised to 0-1 range."""
    if len(audio_array) == 0:
        return 0.0
    rms = float(np.sqrt(np.mean(audio_array ** 2)))
    # Clamp to 0-1 (typical mic input is well below 1.0)
    return min(rms * 5.0, 1.0)


def resample_audio(audio_chunk, orig_sr, target_sr=16000):
    """Resamples a 1D float32 audio array from orig_sr to target_sr using linear interpolation."""
    if orig_sr == target_sr or len(audio_chunk) == 0:
        return audio_chunk
    target_len = int(round(len(audio_chunk) * (target_sr / orig_sr)))
    orig_times = np.linspace(0, 1.0, len(audio_chunk), endpoint=False)
    target_times = np.linspace(0, 1.0, target_len, endpoint=False)
    return np.interp(target_times, orig_times, audio_chunk).astype(np.float32)


def float32_to_wav_bytes(audio_array, sample_rate=16000):
    """Converts a float32 numpy array into standard 16-bit PCM WAV bytes."""
    int16_data = np.clip(audio_array * 32767.0, -32768, 32767).astype(np.int16)
    buf = io.BytesIO()
    with wave.open(buf, "wb") as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)  # 16-bit
        wf.setframerate(sample_rate)
        wf.writeframes(int16_data.tobytes())
    return buf.getvalue()


def transcribe_with_groq(wav_bytes, api_key, model="whisper-large-v3", prompt=None):
    """Sends in-memory WAV audio bytes to Groq Cloud Whisper API."""
    boundary = uuid.uuid4().hex
    body = bytearray()

    def add_field(name, val):
        body.extend(f"--{boundary}\r\nContent-Disposition: form-data; name=\"{name}\"\r\n\r\n{val}\r\n".encode("utf-8"))

    def add_file(name, filename, file_data, content_type="audio/wav"):
        body.extend(f"--{boundary}\r\nContent-Disposition: form-data; name=\"{name}\"; filename=\"{filename}\"\r\nContent-Type: {content_type}\r\n\r\n".encode("utf-8"))
        body.extend(file_data)
        body.extend(b"\r\n")

    add_file("file", "speech.wav", wav_bytes)
    add_field("model", model)
    add_field("language", "en")
    add_field("temperature", "0.0")
    if prompt:
        add_field("prompt", prompt)
    body.extend(f"--{boundary}--\r\n".encode("utf-8"))

    req = urllib.request.Request(
        "https://api.groq.com/openai/v1/audio/transcriptions",
        data=bytes(body),
        headers={
            "Authorization": f"Bearer {api_key.strip()}",
            "User-Agent": "ChurchScreen-AI/1.0",
            "Content-Type": f"multipart/form-data; boundary={boundary}"
        },
        method="POST"
    )

    with urllib.request.urlopen(req, timeout=12) as resp:
        res_json = json.loads(resp.read().decode("utf-8"))
        return res_json.get("text", "").strip()


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    if not HAS_DEPS:
        emit({
            "status": "not-configured",
            "message": "Python dependencies not installed. "
                       "Run: pip install -r python/requirements.txt"
        })
        sys.exit(1)

    # ---- Parse config -------------------------------------------------------
    parser = argparse.ArgumentParser(description="Faster-whisper live transcriber")
    parser.add_argument("--config", type=str, default="{}")
    parser.add_argument("--list-devices", action="store_true", help="List audio input devices as JSON")
    args = parser.parse_args()

    if args.list_devices:
        try:
            devices = sd.query_devices()
            input_devices = []
            for idx, d in enumerate(devices):
                if d.get('max_input_channels', 0) > 0:
                    hostapi_name = ""
                    try:
                        hostapi_name = sd.query_hostapis(d['hostapi'])['name']
                    except Exception:
                        pass
                    # Skip Windows WDM-KS and incompatible kernel streaming devices
                    if "wdm-ks" in hostapi_name.lower():
                        continue
                    label = d['name']
                    if hostapi_name:
                        label = f"{d['name']} ({hostapi_name})"
                    input_devices.append({
                        "index": idx,
                        "name": d['name'],
                        "label": label,
                        "channels": d['max_input_channels'],
                        "hostapi": hostapi_name
                    })
            print(json.dumps(input_devices), flush=True)
        except Exception:
            print("[]", flush=True)
        sys.exit(0)

    config = json.loads(args.config)
    engine       = config.get("engine", "local")  # "groq" or "local"
    groq_api_key = config.get("groq_api_key", "").strip() or os.environ.get("GROQ_API_KEY", "").strip()
    groq_model   = config.get("groq_model", "whisper-large-v3").strip() or "whisper-large-v3"
    model_size   = config.get("model", "small")
    device       = config.get("device", "cpu")
    compute_type = config.get("compute_type", "int8")
    audio_device = config.get("audio_device", None)
    beam_size    = int(config.get("beam_size", 5))
    vad_filter   = bool(config.get("vad_filter", False))

    initial_prompt = config.get("initial_prompt", "")

    # ---- Graceful shutdown --------------------------------------------------
    shutdown = threading.Event()

    def _on_signal(signum, frame):
        shutdown.set()

    signal.signal(signal.SIGTERM, _on_signal)
    signal.signal(signal.SIGINT,  _on_signal)
    # Windows uses SIGBREAK for Ctrl+Break and some process managers
    if hasattr(signal, "SIGBREAK"):
        signal.signal(signal.SIGBREAK, _on_signal)

    # Fallback: if parent Electron process dies, stdin will close.
    # Watch for that so we don't orphan the process.
    def _watch_stdin():
        try:
            for _ in sys.stdin:
                pass
        except Exception:
            pass
        shutdown.set()

    stdin_watcher = threading.Thread(target=_watch_stdin, daemon=True)
    stdin_watcher.start()

    # ---- Initialize Engine --------------------------------------------------
    model = None
    if engine == "groq":
        if not groq_api_key:
            emit({"type": "error", "message": "Groq API key is missing. Please enter your API key in Settings."})
            sys.exit(1)
        emit({"type": "status", "state": "ready",
              "message": f"Groq Cloud Whisper ready (model={groq_model}, ultra-fast LPU mode)."})
    else:
        # Local faster-whisper model
        emit({"type": "status", "state": "loading",
              "message": f"Loading local model '{model_size}' (device={device}, compute={compute_type})…"})
        try:
            model = WhisperModel(model_size, device=device, compute_type=compute_type)
        except Exception as exc:
            emit({"type": "error",
                  "message": f"Failed to load model '{model_size}': {exc}"})
            sys.exit(1)
        emit({"type": "status", "state": "ready", "message": "Local model loaded."})

    # ---- Audio capture settings ---------------------------------------------
    SAMPLE_RATE       = 16_000          # 16 kHz mono – what Whisper expects
    BLOCK_DURATION_S  = 0.5             # callback fires every 500 ms
    BLOCK_SIZE        = int(SAMPLE_RATE * BLOCK_DURATION_S)

    # Transcription window parameters
    TRANSCRIBE_INTERVAL_S = 2.5         # gap between transcription runs
    MIN_AUDIO_S           = 1.0         # need at least this much audio
    MAX_BUFFER_S          = 30.0        # force-flush if buffer exceeds this
    LEVEL_REPORT_INTERVAL = 0.25        # how often to send audio level (seconds)

    audio_q = queue.Queue()

    def _audio_callback(indata, _frames, _time_info, status, capture_sr=SAMPLE_RATE):
        if status:
            emit({"type": "warning", "message": f"Audio callback: {status}"})
        # If input has multiple channels (e.g. quad-array Realtek mic), average across channels to produce mono
        if indata.ndim > 1 and indata.shape[1] > 1:
            mono = np.mean(indata, axis=1)
        else:
            mono = indata[:, 0] if indata.ndim > 1 else indata.flatten()
        if capture_sr != SAMPLE_RATE:
            mono = resample_audio(mono, capture_sr, SAMPLE_RATE)
        audio_q.put(mono.astype(np.float32).copy())

    # ---- Open audio stream --------------------------------------------------
    device_arg = int(audio_device) if audio_device is not None else None

    def _try_open_stream(dev_idx):
        """Attempts to open an InputStream for dev_idx, testing native sample rates."""
        native_sr = None
        dev_channels = 1
        try:
            if dev_idx is not None:
                info = sd.query_devices(dev_idx, "input")
            else:
                info = sd.query_devices(kind="input")
            dev_channels = max(1, int(info.get("max_input_channels", 1)))
            native_sr = int(info.get("default_samplerate", 0))
        except Exception:
            pass

        # Rates to attempt: 16000 (direct), native device rate (WASAPI 48k/44.1k), then standard rates
        candidate_rates = [SAMPLE_RATE]
        if native_sr and native_sr not in candidate_rates:
            candidate_rates.append(native_sr)
        for r in (48000, 44100):
            if r not in candidate_rates:
                candidate_rates.append(r)

        last_err = None
        for test_sr in candidate_rates:
            block_sz = int(test_sr * BLOCK_DURATION_S)
            try:
                test_stream = sd.InputStream(
                    samplerate=test_sr,
                    channels=dev_channels,
                    dtype="float32",
                    blocksize=block_sz,
                    device=dev_idx,
                    callback=lambda indata, frames, time_info, status, s=test_sr: _audio_callback(indata, frames, time_info, status, s),
                )
                test_stream.start()
                return test_stream, dev_idx, test_sr, dev_channels
            except Exception as e:
                last_err = e
                continue
        raise last_err or RuntimeError("No compatible sample rate found")

    stream = None
    stream_sr = SAMPLE_RATE
    stream_channels = 1
    actual_device = device_arg

    # Step 1: Try requested device if specified
    if device_arg is not None:
        try:
            stream, actual_device, stream_sr, stream_channels = _try_open_stream(device_arg)
        except Exception as exc:
            emit({"type": "warning",
                  "message": f"Requested audio device #{device_arg} failed ({exc}). Falling back to default microphone."})
            stream = None

    # Step 2: Fallback to system default or first functional microphone
    if stream is None:
        try:
            stream, actual_device, stream_sr, stream_channels = _try_open_stream(None)
        except Exception:
            # Try searching available input devices (excluding WDM-KS)
            try:
                devs = sd.query_devices()
                for idx, d in enumerate(devs):
                    if d.get("max_input_channels", 0) > 0:
                        hostapi_name = ""
                        try:
                            hostapi_name = sd.query_hostapis(d['hostapi'])['name']
                        except Exception:
                            pass
                        if "wdm-ks" in hostapi_name.lower():
                            continue
                        try:
                            stream, actual_device, stream_sr, stream_channels = _try_open_stream(idx)
                            break
                        except Exception:
                            continue
            except Exception:
                pass

    if stream is None:
        emit({"type": "error",
              "message": "Failed to open audio device: No functional audio input device found."})
        sys.exit(1)

    emit({"type": "status", "state": "listening",
          "message": f"Audio capture started (device={actual_device}, rate={stream_sr}Hz, channels={stream_channels}). Listening…"})

    # ---- Transcription loop -------------------------------------------------
    audio_buf          = np.empty((0,), dtype=np.float32)
    last_transcribe_t  = time.monotonic()
    last_level_t       = 0.0

    try:
        while not shutdown.is_set():
            # Drain queued audio blocks
            got_data = False
            try:
                while True:
                    chunk = audio_q.get_nowait()
                    audio_buf = np.concatenate((audio_buf, chunk))
                    got_data = True
            except queue.Empty:
                pass

            now = time.monotonic()

            # Send periodic audio level for the UI meter
            if got_data and (now - last_level_t) >= LEVEL_REPORT_INTERVAL:
                # Compute level from the most recent ~0.25 s of audio
                tail = audio_buf[-(SAMPLE_RATE // 4):]
                emit({"type": "audio", "level": round(rms_level(tail), 3)})
                last_level_t = now

            buf_secs   = len(audio_buf) / SAMPLE_RATE
            elapsed    = now - last_transcribe_t
            should_run = (
                (elapsed >= TRANSCRIBE_INTERVAL_S and buf_secs >= MIN_AUDIO_S)
                or buf_secs >= MAX_BUFFER_S
            )

            if should_run and buf_secs > 0:
                buf_rms = rms_level(audio_buf)
                # Gate: if buffer is virtually silent / background noise floor (< 0.006), do not send to Whisper
                if buf_rms < 0.006:
                    audio_buf = np.empty((0,), dtype=np.float32)
                    last_transcribe_t = time.monotonic()
                    continue

                if engine == "groq":
                    try:
                        wav_bytes = float32_to_wav_bytes(audio_buf, SAMPLE_RATE)
                        text = transcribe_with_groq(
                            wav_bytes,
                            api_key=groq_api_key,
                            model=groq_model,
                            prompt=initial_prompt
                        )
                        lower_text = text.lower().rstrip(".").strip()
                        if (
                            text
                            and lower_text not in [
                                "chapter and verse",
                                "thank you",
                                "thank you for watching",
                                "let's move this wall",
                                "you",
                            ]
                        ):
                            emit({
                                "type":    "transcript",
                                "text":    text,
                                "start":   0.0,
                                "end":     round(buf_secs, 2),
                                "isFinal": True,
                            })
                    except urllib.error.HTTPError as http_err:
                        err_body = ""
                        try:
                            err_body = http_err.read().decode("utf-8")
                        except Exception:
                            pass
                        emit({"type": "error", "message": f"Groq API error ({http_err.code}): {err_body or http_err.reason}"})
                    except Exception as exc:
                        emit({"type": "error", "message": f"Groq connection error: {exc}"})
                else:
                    # Local faster-whisper engine
                    try:
                        segments, _info = model.transcribe(
                            audio_buf,
                            beam_size=beam_size,
                            language="en",
                            initial_prompt=initial_prompt if initial_prompt else None,
                            condition_on_previous_text=False,
                            no_speech_threshold=0.6,
                            vad_filter=vad_filter,
                            vad_parameters=dict(
                                min_silence_duration_ms=600,
                                speech_pad_ms=250,
                            ) if vad_filter else None,
                        )
                        for seg in segments:
                            text = seg.text.strip()
                            lower_text = text.lower().rstrip(".").strip()
                            # Reject known hallucination artifacts produced on quiet background
                            if text and lower_text not in [
                                "chapter and verse",
                                "thank you",
                                "thank you for watching",
                                "let's move this wall",
                                "you",
                            ]:
                                emit({
                                    "type":       "transcript",
                                    "text":       text,
                                    "start":      round(seg.start, 2),
                                    "end":        round(seg.end, 2),
                                    "isFinal":    True,
                                })
                    except Exception as exc:
                        emit({"type": "error",
                              "message": f"Transcription error: {exc}"})

                # Reset buffer after transcription
                audio_buf = np.empty((0,), dtype=np.float32)
                last_transcribe_t = time.monotonic()

            # Yield CPU – avoid busy-spin
            time.sleep(0.05)

    except KeyboardInterrupt:
        pass
    finally:
        stream.stop()
        stream.close()
        emit({"type": "status", "state": "stopped",
              "message": "Transcription stopped."})


if __name__ == "__main__":
    main()
