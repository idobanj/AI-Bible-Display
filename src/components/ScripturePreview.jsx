// src/components/ScripturePreview.jsx
import React from 'react';

export default function ScripturePreview({
  result,
  onDisplay,
  onIgnore,
  onClearDisplay,
  autoDisplay = false,
  onToggleAutoDisplay
}) {
  const renderHeaderBar = () => (
    <div className="preview-header-bar">
      <p className="eyebrow" style={{ margin: 0 }}>SCRIPTURE PREVIEW & OBS</p>
      <label
        className={`auto-switch ${autoDisplay ? 'active' : ''}`}
        title="Automatically push detected scriptures directly to OBS without pressing Display"
      >
        <input
          type="checkbox"
          checked={!!autoDisplay}
          onChange={(e) => onToggleAutoDisplay?.(e.target.checked)}
        />
        <span className="switch-slider" />
        <span className={`switch-text ${autoDisplay ? 'active' : ''}`}>
          {autoDisplay ? '⚡ Auto-Display ON' : 'Manual'}
        </span>
      </label>
    </div>
  );

  // State 1: No detection result at all
  if (!result || (!result.detected && !result.verse)) {
    return (
      <section className="panel-card scripture-panel" aria-label="Scripture Preview">
        {renderHeaderBar()}

        <div className="empty-state">
          <div className="empty-icon-circle">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              <path d="M12 6v6" />
              <path d="M9 9h6" />
            </svg>
          </div>
          <h3 className="empty-heading">Waiting for scripture reference</h3>
          <p className="empty-desc">
            {autoDisplay
              ? 'Hands-free mode active. As soon as a Bible verse is spoken, it will display automatically on OBS!'
              : 'Detected scriptures will appear here for your review before sending them to the live display.'}
          </p>

          <div className={`mode-indicator-pill ${autoDisplay ? 'auto' : 'manual'}`}>
            <span className={`status-dot ${autoDisplay ? 'green' : 'gray'}`} />
            <span>
              {autoDisplay
                ? '⚡ Auto-Display Active: Verses push to OBS automatically'
                : 'Manual Mode: Click "Display in OBS" to push verses'}
            </span>
          </div>

          {onClearDisplay && (
            <div style={{ marginTop: '20px' }}>
              <button
                type="button"
                className="btn-ghost"
                onClick={onClearDisplay}
                title="Clear current text from the OBS scripture source"
                style={{ fontSize: '0.76rem', color: 'var(--text-muted)', border: '1px solid var(--border-subtle)' }}
              >
                Clear Live OBS Screen
              </button>
            </div>
          )}
        </div>
      </section>
    );
  }

  // State 2: Reference detected, but not found in the local SQLite Bible database
  if (result.detected && !result.verse) {
    const refLabel = result.detected.label || `${result.detected.book} ${result.detected.chapter}:${result.detected.startVerse}`;
    return (
      <section className="panel-card scripture-panel" aria-label="Scripture Preview">
        {renderHeaderBar()}

        <div className="scripture-card-body">
          <div className="scripture-content-wrapper">
            <div className="not-found-card">
              <h3 className="not-found-heading">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                Verse not available locally
              </h3>
              <p className="not-found-body">
                <strong>{refLabel}</strong> was recognized from the spoken text, but it is not included in the current local Bible database.
              </p>
              <p className="not-found-body" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Please verify that the chapter and verse numbers exist in the book.
              </p>
            </div>

            {result.transcript && (
              <div className="detection-attribution">
                Detected from: <span className="detection-quote">“{result.transcript}”</span>
              </div>
            )}
          </div>

          <div className="scripture-actions-group">
            <button type="button" className="btn-secondary" onClick={onIgnore} style={{ width: '100%' }}>
              Dismiss Notice
            </button>
          </div>
        </div>
      </section>
    );
  }

  // State 3: Reference detected and verses loaded from database
  const { verse } = result;

  return (
    <section className="panel-card scripture-panel" aria-label="Scripture Preview">
      {renderHeaderBar()}

      <div className="scripture-card-body">
        <div className="scripture-content-wrapper">
          <div className="reference-header-row">
            <div className="reference-title-group">
              <h2 className="reference-heading">{verse.reference}</h2>
              <span className="translation-badge" title="King James Version">KJV</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {autoDisplay && (
                <span className="badge badge-live" style={{ fontSize: '0.68rem', padding: '3px 8px' }}>
                  ⚡ Auto-Pushed
                </span>
              )}
              <span className="confidence-tag" title="Matched canonical reference">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                High confidence
              </span>
            </div>
          </div>

          {/* Verses Box */}
          <div className="scripture-verses-box" tabIndex="0" aria-label="Verse text">
            {verse.verses && verse.verses.map((item) => (
              <p className="verse-paragraph" key={item.verse}>
                <sup className="verse-num">{item.verse}</sup>
                {item.text}
              </p>
            ))}
          </div>

          {/* Transcript Attribution */}
          {result.transcript && (
            <div className="detection-attribution">
              Detected from: <span className="detection-quote">“{result.transcript}”</span>
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="scripture-actions-group">
          <div className="action-buttons-row">
            <button
              type="button"
              className="btn-primary"
              onClick={onDisplay}
              title={autoDisplay ? "Already sent to OBS automatically. Click to re-display." : "Push this scripture to OBS text source"}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
                <polygon points="10 8 16 10 10 12 10 8" fill="currentColor" stroke="none" />
              </svg>
              {autoDisplay ? 'Re-Display in OBS' : 'Display in OBS'}
            </button>

            {onClearDisplay && (
              <button
                type="button"
                className="btn-secondary"
                onClick={onClearDisplay}
                title="Clear current text from OBS screen"
              >
                Clear Screen
              </button>
            )}

            <button
              type="button"
              className="btn-secondary"
              onClick={onIgnore}
              title="Dismiss this preview without modifying OBS"
            >
              Dismiss
            </button>
          </div>

          <div className="obs-target-indicator">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span>
              Target: <span className="obs-target-name">OBS Text Layer</span>
              {autoDisplay ? ' (⚡ Auto-Sync Active)' : ' (Manual Mode)'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
