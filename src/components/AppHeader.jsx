// src/components/AppHeader.jsx
import React from 'react';

export default function AppHeader({ listening, obsStatus, onOpenSettings }) {
  // Determine OBS badge state
  const isObsConnected = obsStatus && (obsStatus.toLowerCase().includes('connected') && !obsStatus.toLowerCase().includes('not'));
  const isObsError = obsStatus && obsStatus.toLowerCase().includes('error');

  return (
    <header className="app-header">
      <div className="header-brand">
        <div className="brand-icon" title="ChurchScreen AI">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
            <circle cx="12" cy="10" r="2" />
          </svg>
        </div>
        <div className="brand-text">
          <div className="brand-title">
            <span>ChurchScreen AI</span>
            <span className="brand-mode">Service Mode</span>
          </div>
          <span className="brand-subtitle">Live Scripture Assistant</span>
        </div>
      </div>

      <div className="header-status">
        {listening ? (
          <span className="badge badge-live" title="Audio transcription active">
            <span className="status-dot green pulse" />
            Listening
          </span>
        ) : (
          <span className="badge badge-standby" title="Engine idle / Ready">
            <span className="status-dot gray" />
            Standby
          </span>
        )}

        <span
          className={`badge ${
            isObsConnected
              ? 'badge-live'
              : isObsError
              ? 'badge-danger'
              : 'badge-standby'
          }`}
          title={`OBS status: ${obsStatus || 'Offline'}`}
        >
          <span
            className={`status-dot ${
              isObsConnected ? 'green' : isObsError ? 'red' : 'gray'
            }`}
          />
          {isObsConnected ? 'OBS Connected' : isObsError ? 'OBS Error' : 'OBS Offline'}
        </span>

        <button
          type="button"
          className="btn-secondary btn-icon"
          onClick={onOpenSettings}
          title="Open Settings"
          aria-label="Settings"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
