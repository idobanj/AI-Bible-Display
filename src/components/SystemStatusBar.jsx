// src/components/SystemStatusBar.jsx
import React from 'react';

export default function SystemStatusBar({
  status,
  listening,
  audioDevice = 'Default Microphone',
  transcriptionEngine = 'local'
}) {
  // DB status
  const dbText = status.database || 'Database checking…';
  const isDbReady = dbText.toLowerCase().includes('ready');

  // Transcription status
  const engineLabel = transcriptionEngine === 'groq' ? 'Groq Cloud' : 'Local Whisper';
  let transcriptionText = `${engineLabel} ready`;
  let transcriptionDot = 'green';
  if (listening) {
    transcriptionText = `${engineLabel} listening`;
    transcriptionDot = 'green pulse';
  } else if (status.transcription) {
    if (status.transcription.toLowerCase().includes('not-configured') || status.transcription.toLowerCase().includes('stopped')) {
      transcriptionText = `${engineLabel} standby`;
      transcriptionDot = 'gray';
    } else if (status.transcription.toLowerCase().includes('running')) {
      transcriptionText = `${engineLabel} ready`;
      transcriptionDot = 'green';
    } else {
      transcriptionText = `${engineLabel} ${status.transcription}`;
      transcriptionDot = 'amber';
    }
  }

  // Audio status
  const audioText = listening ? `${audioDevice} · Active` : `${audioDevice} · Ready`;
  const audioDot = listening ? 'green' : 'gray';

  // OBS status
  const obsStatus = status.obs || 'Not connected';
  const isObsConnected = obsStatus.toLowerCase().includes('connected') && !obsStatus.toLowerCase().includes('not');
  const isObsError = obsStatus.toLowerCase().includes('error');
  const obsText = isObsConnected ? 'OBS Studio: Connected' : isObsError ? 'OBS Studio: Error' : 'OBS Studio: Disconnected';
  const obsDot = isObsConnected ? 'green' : isObsError ? 'red' : 'gray';

  return (
    <footer className="system-status-bar" role="status" aria-label="System status">
      <div className="status-bar-items">
        <div className="status-bar-item" title="Local SQLite Scripture Database">
          <span className={`status-dot ${isDbReady ? 'green' : 'amber'}`} />
          <span className="status-bar-label">Database:</span>
          <span className="status-bar-value">{dbText}</span>
        </div>

        <div className="status-bar-item" title="Local Whisper Speech Recognition">
          <span className={`status-dot ${transcriptionDot}`} />
          <span className="status-bar-label">Transcription:</span>
          <span className="status-bar-value">{transcriptionText}</span>
        </div>

        <div className="status-bar-item" title="Current Audio Input Device">
          <span className={`status-dot ${audioDot}`} />
          <span className="status-bar-label">Audio:</span>
          <span className="status-bar-value">{audioText}</span>
        </div>

        <div className="status-bar-item" title="OBS Studio WebSocket Connection">
          <span className={`status-dot ${obsDot}`} />
          <span className="status-bar-label">Broadcast:</span>
          <span className="status-bar-value">{obsText}</span>
        </div>
      </div>

      <div className="status-bar-meta" style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>
        Offline-First
      </div>
    </footer>
  );
}
