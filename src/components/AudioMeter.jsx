// src/components/AudioMeter.jsx
import React, { useEffect, useState, useRef } from 'react';

const BAR_COUNT = 28;

export default function AudioMeter({ listening, onAudioLevelChange }) {
  const [level, setLevel] = useState(0);
  const [bars, setBars] = useState(() => new Array(BAR_COUNT).fill(6));
  const [testActive, setTestActive] = useState(false);
  const [engineState, setEngineState] = useState('stopped');
  const [errorMessage, setErrorMessage] = useState('');

  const animFrameRef = useRef(null);
  const audioContextRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const levelRef = useRef(0);

  const isLive = listening || testActive;

  // Listen to IPC transcription events from Electron
  useEffect(() => {
    if (!window.churchscreen?.onTranscriptionEvent) return;

    const unsubscribe = window.churchscreen.onTranscriptionEvent((event) => {
      if (!event) return;

      if (event.type === 'status') {
        setEngineState(event.state || 'stopped');
        if (event.state === 'stopped') {
          setLevel(0);
          levelRef.current = 0;
        }
      } else if (event.type === 'audio' && typeof event.level === 'number') {
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
      setBars(new Array(BAR_COUNT).fill(6));
      return;
    }

    let isMounted = true;

    async function startAudioCapture() {
      try {
        if (!navigator.mediaDevices?.getUserMedia) return;

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
        analyser.fftSize = 64;
        analyser.smoothingTimeConstant = 0.55;

        const source = audioCtx.createMediaStreamSource(stream);
        source.connect(analyser);

        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        const updateMeter = () => {
          if (!isMounted) return;

          analyser.getByteFrequencyData(dataArray);

          let sum = 0;
          for (let i = 0; i < dataArray.length; i++) {
            sum += dataArray[i];
          }
          const rawAvg = sum / dataArray.length;
          const normalized = Math.min(1, Math.max(0, (rawAvg / 128) * 1.6));

          levelRef.current = 0.35 * normalized + 0.65 * levelRef.current;
          setLevel(levelRef.current);
          if (onAudioLevelChange) onAudioLevelChange(levelRef.current);

          const newBars = [];
          for (let i = 0; i < BAR_COUNT; i++) {
            const binIdx = Math.min(
              dataArray.length - 1,
              Math.floor((i / BAR_COUNT) * (dataArray.length * 0.8))
            );
            const binVal = dataArray[binIdx] / 255;
            const multiplier = 1 - Math.abs(i - BAR_COUNT / 2) / (BAR_COUNT / 1.7);
            const barHeight = Math.max(
              6,
              Math.min(100, (binVal * 0.85 + levelRef.current * 0.75) * multiplier * 125)
            );
            newBars.push(barHeight);
          }
          setBars(newBars);

          animFrameRef.current = requestAnimationFrame(updateMeter);
        };

        animFrameRef.current = requestAnimationFrame(updateMeter);
      } catch (err) {
        // Fallback simulated equalizer wave when mic stream is not permitted or simulated
        const fallbackInterval = setInterval(() => {
          if (!isMounted) return;
          const currentLvl = levelRef.current || (listening ? 0.35 : 0);
          const newBars = [];
          for (let i = 0; i < BAR_COUNT; i++) {
            const wave = Math.sin(Date.now() * 0.008 + i * 0.35) * 0.3;
            const h = Math.max(6, Math.min(100, (currentLvl + wave * currentLvl) * 100));
            newBars.push(h);
          }
          setBars(newBars);
        }, 50);

        return () => clearInterval(fallbackInterval);
      }
    }

    startAudioCapture();

    return () => {
      isMounted = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((t) => t.stop());
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, [isLive, listening]);

  return (
    <div className="audio-meter-container" style={{
      background: 'var(--bg-input)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 14px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '8px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem' }}>
          <span className={`status-dot ${isLive ? 'green pulse' : 'gray'}`} />
          <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
            {isLive ? 'Audio Activity' : 'Audio Input Standby'}
          </span>
          {isLive && (
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: level > 0.7 ? 'var(--warning)' : 'var(--success)',
              background: 'rgba(255,255,255,0.05)',
              padding: '1px 6px',
              borderRadius: '4px'
            }}>
              {Math.round(level * 100)}%
            </span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {!listening && (
            <button
              type="button"
              onClick={() => setTestActive((prev) => !prev)}
              style={{
                height: '26px',
                padding: '0 8px',
                fontSize: '0.72rem',
                borderRadius: '4px',
                background: testActive ? 'rgba(255, 255, 255, 0.12)' : 'var(--bg-elevated)',
                borderColor: testActive ? 'var(--border-strong)' : 'var(--border-subtle)',
                color: testActive ? 'var(--text-primary)' : 'var(--text-secondary)'
              }}
            >
              {testActive ? 'Stop Mic Test' : 'Test Mic Level'}
            </button>
          )}
        </div>
      </div>

      {/* Visualizer Bar Stream */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '3px',
          height: '28px',
          background: 'rgba(0, 0, 0, 0.35)',
          borderRadius: '4px',
          padding: '3px 6px',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}
        aria-label="Audio Visualizer"
      >
        {bars.map((height, i) => {
          let bg = 'rgba(255, 255, 255, 0.1)';
          let shadow = 'none';

          if (isLive && height > 10) {
            if (height > 80) {
              bg = '#F05D5E';
            } else if (height > 55) {
              bg = '#F5B942';
            } else {
              bg = '#28C76F';
            }
          }

          return (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${height}%`,
                background: bg,
                boxShadow: shadow,
                borderRadius: '1px',
                minHeight: '4px',
                transition: 'height 0.05s ease-out'
              }}
            />
          );
        })}
      </div>

      {errorMessage && (
        <div style={{
          marginTop: '6px',
          fontSize: '0.76rem',
          color: 'var(--danger)',
          background: 'var(--danger-bg)',
          padding: '4px 8px',
          borderRadius: '4px'
        }}>
          {errorMessage}
        </div>
      )}
    </div>
  );
}
