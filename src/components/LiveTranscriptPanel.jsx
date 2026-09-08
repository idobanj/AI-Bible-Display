// src/components/LiveTranscriptPanel.jsx
import React, { useState, useEffect } from 'react';
import AudioMeter from './AudioMeter';

const SAMPLE_PHRASES = [
  'Please turn with me to John 3:16.',
  'Our reading is Psalm 23:1-2.',
  'Remember Romans 8:28 today.',
  'I can do all things through Christ, Philippians 4:13.'
];

export default function LiveTranscriptPanel({
  listening,
  onStartListening,
  onStopListening,
  transcript,
  history = [],
  onClearHistory,
  onDetect,
  audioDevice = 'Default Microphone',
  hasAudioError = false,
  notice = ''
}) {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [testSectionOpen, setTestSectionOpen] = useState(false);
  const [manualInput, setManualInput] = useState('');

  // Elapsed timer when listening
  useEffect(() => {
    let timer = null;
    if (listening) {
      timer = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      setElapsedSeconds(0);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [listening]);

  const formatTimer = (totalSecs) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (!manualInput.trim()) return;
    onDetect(manualInput.trim());
    setManualInput('');
  };

  const handleSampleClick = (phrase) => {
    onDetect(phrase);
  };

  // Determine state heading
  let stateHeading = 'Ready to listen';
  if (hasAudioError) {
    stateHeading = 'Microphone unavailable';
  } else if (listening) {
    stateHeading = 'Listening';
  }

  return (
    <section className="panel-card transcript-panel" aria-label="Live Transcript Panel">
      {/* Top row: Heading + Single Primary Action */}
      <div className="panel-top-row">
        <div className="panel-state-heading">
          <p className="eyebrow">LIVE TRANSCRIPT</p>
          <h2>
            {listening && <span className="status-dot green pulse" style={{ width: '10px', height: '10px' }} />}
            {stateHeading}
          </h2>
          <div className="panel-state-meta">
            <span className="panel-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
                <line x1="8" y1="23" x2="16" y2="23" />
              </svg>
              <span>{audioDevice} · {listening ? 'Input active' : 'Standby'}</span>
            </span>

            {listening && (
              <span className="timer-tag" title="Listening duration">
                ⏱ {formatTimer(elapsedSeconds)}
              </span>
            )}
          </div>
        </div>

        {/* Clear Primary Action Button */}
        <div>
          {listening ? (
            <button
              type="button"
              className="btn-danger-outline"
              onClick={onStopListening}
              title="Stop listening and pause live speech transcription"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <rect x="5" y="5" width="14" height="14" rx="2" />
              </svg>
              Stop Listening
            </button>
          ) : (
            <button
              type="button"
              className="btn-success"
              onClick={onStartListening}
              title="Start listening through microphone with local Whisper"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              </svg>
              Start Listening
            </button>
          )}
        </div>
      </div>

      {/* Modern Audio Activity Visualizer */}
      <AudioMeter listening={listening} />

      {/* Prominent Active Live Transcript Feed */}
      <div className="active-transcript-card">
        <div className="transcript-header-row">
          <span style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Current Spoken Transcript
          </span>
          {transcript && (
            <span style={{ fontSize: '0.7rem', color: 'var(--accent)', fontWeight: 600 }}>
              Live
            </span>
          )}
        </div>

        <div className="active-transcript-text">
          {transcript ? (
            <span>
              {transcript}
              {listening && (
                <span
                  style={{
                    display: 'inline-block',
                    width: '6px',
                    height: '14px',
                    background: 'var(--accent)',
                    marginLeft: '4px',
                    verticalAlign: 'middle',
                    animation: 'dotPulse 0.9s infinite'
                  }}
                />
              )}
            </span>
          ) : (
            <span className="active-transcript-placeholder">
              {listening
                ? 'Listening to spoken words… Speak scripture references like “John 3:16” or “Psalm 23:1”.'
                : 'Speech transcription is idle. Click “Start Listening” or use test phrases below.'}
            </span>
          )}
        </div>
      </div>

      {/* Scrollable Transcript History */}
      <div className="transcript-history-section">
        <div className="history-header">
          <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-secondary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Recent Transcript History ({history.length})
          </span>
          {history.length > 0 && (
            <button
              type="button"
              className="btn-ghost"
              onClick={onClearHistory}
              style={{ height: '22px', padding: '0 6px', fontSize: '0.7rem' }}
              title="Clear transcript history"
            >
              Clear
            </button>
          )}
        </div>

        <div className="history-list">
          {history.length > 0 ? (
            history.map((item, index) => (
              <div
                key={item.id || index}
                className="history-item"
                onClick={() => onDetect(item.text)}
                style={{ cursor: 'pointer' }}
                title="Click to re-run detection on this phrase"
              >
                <div className="history-meta">
                  <span style={{ fontWeight: 600, color: item.detected ? 'var(--accent)' : 'var(--text-muted)' }}>
                    {item.detected ? `✓ ${item.detected.label || item.detected.book}` : 'Transcription'}
                  </span>
                  <span>{item.timestamp || 'Just now'}</span>
                </div>
                <p className="history-text">“{item.text}”</p>
              </div>
            ))
          ) : (
            <div className="history-empty">
              <span>No prior speech segments recorded yet during this session.</span>
            </div>
          )}
        </div>
      </div>

      {/* Collapsible Test Detection & Sample Phrases */}
      <div className="test-section">
        <div
          className="test-section-header"
          onClick={() => setTestSectionOpen((prev) => !prev)}
          role="button"
          tabIndex="0"
          aria-expanded={testSectionOpen}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <span>Operator Testing & Demo Inputs</span>
          </div>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
            {testSectionOpen ? '▲ Hide' : '▼ Expand'}
          </span>
        </div>

        {testSectionOpen && (
          <div className="test-section-content">
            <form onSubmit={handleManualSubmit} className="test-input-row">
              <input
                type="text"
                className="test-input"
                placeholder="Type custom text (e.g. John 3:16 or Psalm 23:1-2)..."
                value={manualInput}
                onChange={(e) => setManualInput(e.target.value)}
              />
              <button type="submit" className="btn-secondary" style={{ height: '40px' }}>
                Detect
              </button>
            </form>

            <div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                Quick Test Phrases:
              </div>
              <div className="sample-chips">
                {SAMPLE_PHRASES.map((phrase) => (
                  <button
                    key={phrase}
                    type="button"
                    className="sample-chip"
                    onClick={() => handleSampleClick(phrase)}
                  >
                    {phrase}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
