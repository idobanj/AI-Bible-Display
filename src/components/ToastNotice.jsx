// src/components/ToastNotice.jsx
import React, { useEffect } from 'react';

export default function ToastNotice({ notice, onClose, duration = 5000 }) {
  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [notice, onClose, duration]);

  if (!notice) return null;

  const isError = notice.type === 'error' || (typeof notice === 'string' && (notice.toLowerCase().includes('error') || notice.toLowerCase().includes('failed')));

  const text = typeof notice === 'string' ? notice : notice.text || notice.message;

  return (
    <aside className="toast-container" aria-live="polite">
      <div className="toast">
        <div style={{ marginTop: '2px' }}>
          {isError ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          )}
        </div>
        <div className="toast-message">{text}</div>
        <button
          type="button"
          className="toast-close"
          onClick={onClose}
          aria-label="Close notification"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
