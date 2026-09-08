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
import json
import signal
import sys
import threading
import time
import queue

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
    model_size   = config.get("model", "base.en")
    device       = config.get("device", "cpu")
    compute_type = config.get("compute_type", "int8")
    audio_device = config.get("audio_device", None)

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

    # ---- Load model ---------------------------------------------------------
    emit({"type": "status", "state": "loading",
          "message": f"Loading model '{model_size}' (device={device}, compute={compute_type})…"})
    try:
        model = WhisperModel(model_size, device=device, compute_type=compute_type)
    except Exception as exc:
        emit({"type": "error",
              "message": f"Failed to load model '{model_size}': {exc}"})
        sys.exit(1)

    emit({"type": "status", "state": "ready", "message": "Model loaded."})

    # ---- Audio capture settings ---------------------------------------------
    SAMPLE_RATE       = 16_000          # 16 kHz mono – what Whisper expects
    CHANNELS          = 1
    BLOCK_DURATION_S  = 0.5             # callback fires every 500 ms
    BLOCK_SIZE        = int(SAMPLE_RATE * BLOCK_DURATION_S)

    # Transcription window parameters
    TRANSCRIBE_INTERVAL_S = 3.0         # minimum gap between transcription runs
    MIN_AUDIO_S           = 1.0         # need at least this much audio to bother
    MAX_BUFFER_S          = 30.0        # force-flush if buffer exceeds this
    LEVEL_REPORT_INTERVAL = 0.25        # how often to send audio level (seconds)

    audio_q = queue.Queue()

    def _audio_callback(indata, _frames, _time_info, status):
        if status:
            emit({"type": "warning", "message": f"Audio callback: {status}"})
        audio_q.put(indata[:, 0].copy())   # shape (BLOCK_SIZE,) float32

    # ---- Open audio stream --------------------------------------------------
    device_arg = int(audio_device) if audio_device is not None else None
    try:
        stream = sd.InputStream(
            samplerate=SAMPLE_RATE,
            channels=CHANNELS,
            dtype="float32",
            blocksize=BLOCK_SIZE,
            device=device_arg,
            callback=_audio_callback,
        )
        stream.start()
    except Exception as exc:
        emit({"type": "error",
              "message": f"Failed to open audio device: {exc}"})
        sys.exit(1)

    emit({"type": "status", "state": "listening",
          "message": "Audio capture started. Listening…"})

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
                try:
                    segments, _info = model.transcribe(
                        audio_buf,
                        beam_size=5,
                        language="en",
                        vad_filter=True,
                        vad_parameters=dict(
                            min_silence_duration_ms=600,
                            speech_pad_ms=250,
                        ),
                    )
                    for seg in segments:
                        text = seg.text.strip()
                        if text:
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
