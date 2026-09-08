// src/components/MicLevel.jsx
import { useEffect, useState, useRef } from 'react';
import './MicLevel.css';

const BAR_COUNT = 24;

export default function MicLevel({ listening }) {
  const [level, setLevel] = useState(0);
  const [bars, setBars] = useState(() => new Array(BAR_COUNT).fill(10));
  const [testActive, setTestActive] = useState(false);
  const [engineState, setEngineState] = useState('stopped');
  const [statusMessage, setStatusMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const animFrameRef = useRef(null);
  const audioContextRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const levelRef = useRef(0);

  const isLive = listening || testActive;
  const isLoading = listening && (engineState === 'starting' || engineState === 'loading');

  // Handle IPC transcription events from Electron/Python
  useEffect(() => {
    if (!window.churchscreen?.onTranscriptionEvent) return;

    const unsubscribe = window.churchscreen.onTranscriptionEvent((event) => {
      if (!event) return;

      if (event.type === 'status') {
        setEngineState(event.state || 'stopped');
        if (event.message) setStatusMessage(event.message);
        if (event.state === 'stopped') {
          setLevel(0);
          levelRef.current = 0;
        }
      } else if (event.type === 'audio' && typeof event.level === 'number') {
        // Boost level if Web Audio API isn't capturing or Python reports audio
        const pyLevel = Math.min(1, Math.max(0, event.level));
        if (pyLevel > levelRef.current) {
          levelRef.current = pyLevel;
          setLevel(pyLevel);
        }
      } else if (event.type === 'error') {
        if (event.message) setErrorMessage(event.message);
      }
    });

    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  // Web Audio API live microphone capture
  useEffect(() => {
    if (!isLive) {
      // Cleanup Web Audio resources
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
        mediaStreamRef.current = null;
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
        audioContextRef.current = null;
      }
      levelRef.current = 0;
      setLevel(0);
      setBars(new Array(BAR_COUNT).fill(10));
      return;
    }

    let isMounted = true;

    async function startAudioCapture() {
      try {
        if (!navigator.mediaDevices?.getUserMedia) {
          return;
        }

        const stream = await navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false }
        });

        if (!isMounted) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }

        mediaStreamRef.current = stream;
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioCtx();
        audioContextRef.current = audioCtx;

        if (audioCtx.state === 'suspended') {
          await audioCtx.resume();
        }

        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 64; // 32 frequency bins
        analyser.smoothingTimeConstant = 0.6;

        const source = audioCtx.createMediaStreamSource(stream);
        source.connect(analyser);

        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        const updateMeter = () => {
          if (!isMounted) return;

          analyser.getByteFrequencyData(dataArray);

          // Calculate average RMS / volume
          let sum = 0;
          for (let i = 0; i < dataArray.length; i++) {
            sum += dataArray[i];
          }
          const rawAvg = sum / dataArray.length;
          const normalized = Math.min(1, Math.max(0, (rawAvg / 128) * 1.5));

          // Smooth level
          levelRef.current = 0.35 * normalized + 0.65 * levelRef.current;
          setLevel(levelRef.current);

          // Compute 24 visualizer bar heights
          const newBars = [];
          for (let i = 0; i < BAR_COUNT; i++) {
            // Map 24 bars across the frequency data with equalizer curve
            const binIdx = Math.min(
              dataArray.length - 1,
              Math.floor((i / BAR_COUNT) * (dataArray.length * 0.75))
            );
            const binVal = dataArray[binIdx] / 255;
            // Center emphasis and wave response
            const multiplier = 1 - Math.abs(i - BAR_COUNT / 2) / (BAR_COUNT / 1.6);
            const barHeight = Math.max(
              10,
              Math.min(100, (binVal * 0.8 + levelRef.current * 0.7) * multiplier * 120)
            );
            newBars.push(barHeight);
          }
          setBars(newBars);

          animFrameRef.current = requestAnimationFrame(updateMeter);
        };

        animFrameRef.current = requestAnimationFrame(updateMeter);
      } catch (err) {
        // Fall back to software-simulated VU animation driven by Whisper IPC level
        const fallbackInterval = setInterval(() => {
          if (!isMounted) return;
          const currentLvl = levelRef.current;
          const newBars = [];
          for (let i = 0; i < BAR_COUNT; i++) {
            const wave = Math.sin(Date.now() * 0.01 + i * 0.4) * 0.2;
            const h = Math.max(
              10,
              Math.min(100, (currentLvl + wave * currentLvl) * 100)
            );
            newBars.push(h);
          }
          setBars(newBars);
        }, 60);

        return () => clearInterval(fallbackInterval);
      }
    }

    startAudioCapture();

    return () => {
      isMounted = false;
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((t) => t.stop());
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, [isLive]);

  // Status text determination
  let statusText = 'Microphone: Standby';
  if (isLoading) {
    statusText = statusMessage || 'Starting speech recognition engine…';
  } else if (listening) {
    statusText = 'Microphone: Live (Listening for scripture)';
  } else if (testActive) {
    statusText = 'Microphone: Live audio test active';
  }

  const toggleTestMic = () => {
    setTestActive((prev) => !prev);
    setErrorMessage('');
  };

  return (
    <div className="mic-indicator-wrapper">
      <div className="mic-header">
        <div className="mic-status-label">
          <span
            className={`mic-dot ${
              isLive ? 'live' : isLoading ? 'loading' : ''
            }`}
          />
          <span>{statusText}</span>
        </div>

        <div className="mic-controls-right">
          {isLoading ? (
            <span className="mic-badge loading">Loading</span>
          ) : isLive ? (
            <span className="mic-badge live">
              LIVE {Math.round(level * 100)}%
            </span>
          ) : (
            <span className="mic-badge idle">Standby</span>
          )}

          {!listening && (
            <button
              type="button"
              className={`mic-test-btn ${testActive ? 'active' : ''}`}
              onClick={toggleTestMic}
            >
              {testActive ? 'Stop Test' : 'Test Mic'}
            </button>
          )}
        </div>
      </div>

      <div className="mic-level">
        {bars.map((height, i) => {
          let barClass = 'mic-bar idle';
          if (isLive && height > 14) {
            barClass = height > 75 ? 'mic-bar peak' : 'mic-bar active';
          }
          return (
            <div
              key={i}
              className={barClass}
              style={{ height: `${height}%` }}
            />
          );
        })}
      </div>

      {errorMessage && <div className="mic-error">{errorMessage}</div>}
    </div>
  );
}
