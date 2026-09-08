// src/components/SettingsModal.jsx
import React, { useState, useEffect } from 'react';

export default function SettingsModal({
  isOpen,
  onClose,
  status,
  onTestObsConnection,
  selectedAudioDevice,
  onSelectAudioDevice,
  autoDisplay = false,
  onToggleAutoDisplay
}) {
  const [obsHost, setObsHost] = useState('localhost');
  const [obsPort, setObsPort] = useState('4455');
  const [obsPassword, setObsPassword] = useState('');
  const [obsSource, setObsSource] = useState('Scripture Text');
  const [obsTestMessage, setObsTestMessage] = useState('');
  const [testingObs, setTestingObs] = useState(false);
  const [availableTextSources, setAvailableTextSources] = useState([]);

  // Audio devices list
  const [devices, setDevices] = useState([
    { id: 'default', label: 'Default System Microphone (Auto)' }
  ]);
  const [selectedDevice, setSelectedDevice] = useState('default');

  // Load saved settings & audio devices when modal opens
  useEffect(() => {
    if (!isOpen) return;

    // Synchronize selected audio device
    if (selectedAudioDevice) {
      const devId = selectedAudioDevice.id || (selectedAudioDevice.index !== undefined ? String(selectedAudioDevice.index) : 'default');
      setSelectedDevice(devId);
    }

    if (window.churchscreen?.getObsSettings) {
      window.churchscreen.getObsSettings().then((saved) => {
        if (saved) {
          if (saved.host) setObsHost(saved.host);
          if (saved.port) setObsPort(String(saved.port));
          if (saved.password !== undefined) setObsPassword(saved.password);
          if (saved.source) setObsSource(saved.source);
        }
      }).catch(() => {});
    }

    // Load actual hardware input devices via Python sounddevice
    if (window.churchscreen?.getAudioDevices) {
      window.churchscreen.getAudioDevices().then((soundDevices) => {
        if (Array.isArray(soundDevices) && soundDevices.length > 0) {
          const list = [
            { id: 'default', index: 'default', label: 'Default System Microphone (Auto)' },
            ...soundDevices.map((d) => ({
              id: String(d.index),
              index: d.index,
              label: d.label || d.name,
              name: d.name,
              channels: d.channels,
              hostapi: d.hostapi
            }))
          ];
          setDevices(list);
        }
      }).catch(() => {});
    }
  }, [isOpen, selectedAudioDevice]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleSaveAndClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, obsHost, obsPort, obsPassword, obsSource]);

  if (!isOpen) return null;

  const handleSaveAndClose = () => {
    if (window.churchscreen?.saveObsSettings) {
      window.churchscreen.saveObsSettings({
        host: obsHost.trim() || 'localhost',
        port: obsPort.trim() || '4455',
        password: obsPassword,
        source: obsSource.trim() || 'Scripture Text'
      }).catch(() => {});
    }
    onClose();
  };

  const handleTestObs = async () => {
    setTestingObs(true);
    setObsTestMessage('');
    try {
      const config = {
        host: obsHost.trim() || 'localhost',
        port: obsPort.trim() || '4455',
        password: obsPassword,
        source: obsSource.trim() || 'Scripture Text'
      };

      if (onTestObsConnection) {
        const res = await onTestObsConnection(config);
        setObsTestMessage(res.message || (res.success ? 'Connected successfully!' : 'Failed to connect.'));
        if (res.textSources && res.textSources.length > 0) {
          setAvailableTextSources(res.textSources);
        }
      }
    } catch (err) {
      setObsTestMessage(err.message || 'Failed to connect to OBS.');
    } finally {
      setTestingObs(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={handleSaveAndClose} role="dialog" aria-modal="true" aria-labelledby="settings-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <h3 id="settings-title">Hardware & Service Settings</h3>
            <p>Configure local audio devices, speech recognition engine, and OBS broadcast output.</p>
          </div>
          <button
            type="button"
            className="btn-ghost btn-icon"
            onClick={handleSaveAndClose}
            aria-label="Close settings"
            style={{ width: '32px', height: '32px' }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {/* Audio Input Section */}
          <section className="settings-section">
            <div className="settings-section-title">
              <span>1. Audio Input</span>
              <span className="badge badge-info">Active</span>
            </div>

            <div className="form-group">
              <label htmlFor="audio-device-select">Microphone / Sound Card Input</label>
              <select
                id="audio-device-select"
                className="form-control"
                value={selectedDevice}
                onChange={(e) => {
                  const val = e.target.value;
                  setSelectedDevice(val);
                  const found = devices.find((d) => String(d.id || d.index) === String(val));
                  if (onSelectAudioDevice) {
                    if (val === 'default') {
                      onSelectAudioDevice({ id: 'default', index: 'default', label: 'Default System Microphone' });
                    } else if (found) {
                      onSelectAudioDevice({ id: val, index: found.index, label: found.label, name: found.name });
                    }
                  }
                }}
              >
                {devices.map((d) => (
                  <option key={d.id || d.index} value={d.id || d.index}>
                    {d.label}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Select an external mixer, USB sound card, or audio interface for church service feeds.
            </div>
          </section>

          {/* Transcription Engine Section */}
          <section className="settings-section">
            <div className="settings-section-title">
              <span>2. Local Transcription (Whisper)</span>
              <span className="badge badge-live">Offline-Ready</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div className="form-group">
                <label>Model</label>
                <select className="form-control" defaultValue="base.en">
                  <option value="tiny.en">tiny.en (Fastest, low memory)</option>
                  <option value="base.en">base.en (Recommended, balanced)</option>
                  <option value="small.en">small.en (Higher accuracy)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Language</label>
                <select className="form-control" defaultValue="en" disabled>
                  <option value="en">English (default)</option>
                </select>
              </div>
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Speech recognition runs 100% locally via faster-whisper without sending audio to the cloud.
            </div>
          </section>

          {/* Bible Database Section */}
          <section className="settings-section">
            <div className="settings-section-title">
              <span>3. Scripture Database</span>
              <span className="badge badge-info">SQLite Local</span>
            </div>

            <div className="form-group">
              <label>Active Translation</label>
              <select className="form-control" defaultValue="kjv">
                <option value="kjv">King James Version (KJV) — Public Domain (31,100 verses)</option>
                <option value="web" disabled>World English Bible (WEB) — (Coming next)</option>
                <option value="esv" disabled>ESV — (Coming next)</option>
                <option value="niv" disabled>NIV — (Coming next)</option>
              </select>
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Database status: {status.database || 'Ready (KJV - 31,100 verses)'}.
            </div>
          </section>

          {/* OBS Studio Integration Section */}
          <section className="settings-section">
            <div className="settings-section-title">
              <span>4. OBS Studio Broadcast Output</span>
              <span className="badge badge-standby">WebSocket v5</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px' }}>
              <div className="form-group">
                <label>Host Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={obsHost}
                  onChange={(e) => setObsHost(e.target.value)}
                  placeholder="localhost"
                />
              </div>

              <div className="form-group">
                <label>Port</label>
                <input
                  type="text"
                  className="form-control"
                  value={obsPort}
                  onChange={(e) => setObsPort(e.target.value)}
                  placeholder="4455"
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <label style={{ margin: 0 }}>WebSocket Password</label>
                  <button
                    type="button"
                    onClick={async () => {
                      try {
                        const text = await navigator.clipboard.readText();
                        if (text) setObsPassword(text.trim());
                      } catch {}
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--accent)',
                      cursor: 'pointer',
                      fontSize: '0.74rem',
                      padding: '0 2px',
                      textDecoration: 'underline'
                    }}
                    title="Paste password from clipboard"
                  >
                    Paste
                  </button>
                </div>
                <input
                  type="password"
                  className="form-control"
                  value={obsPassword}
                  onChange={(e) => setObsPassword(e.target.value)}
                  placeholder="(Leave blank if no auth)"
                />
              </div>

              <div className="form-group">
                <label>Target Text Source Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={obsSource}
                  onChange={(e) => setObsSource(e.target.value)}
                  placeholder="Scripture Text"
                />
              </div>
            </div>

            {availableTextSources.length > 0 && (
              <div style={{ fontSize: '0.75rem', marginBottom: '8px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Detected text sources in OBS: </span>
                {availableTextSources.map((name) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setObsSource(name)}
                    style={{
                      marginRight: '6px',
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: '4px',
                      color: 'var(--accent)',
                      padding: '2px 6px',
                      cursor: 'pointer',
                      fontSize: '0.75rem'
                    }}
                  >
                    {name}
                  </button>
                ))}
              </div>
            )}

            <div
              style={{
                margin: '12px 0 14px',
                padding: '10px 14px',
                background: autoDisplay ? 'rgba(40, 199, 111, 0.1)' : 'rgba(255, 255, 255, 0.04)',
                border: `1px solid ${autoDisplay ? 'rgba(40, 199, 111, 0.35)' : 'var(--border-subtle)'}`,
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onClick={() => onToggleAutoDisplay?.(!autoDisplay)}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.85rem', color: autoDisplay ? '#4ade80' : 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>⚡ Auto-Display to OBS (Hands-Free Mode)</span>
                  {autoDisplay && (
                    <span className="badge badge-live" style={{ fontSize: '0.65rem', padding: '1px 6px' }}>Active</span>
                  )}
                </div>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '3px' }}>
                  Automatically broadcast detected verses to OBS without requiring operator confirmation.
                </div>
              </div>
              <input
                type="checkbox"
                checked={!!autoDisplay}
                onChange={(e) => onToggleAutoDisplay?.(e.target.checked)}
                onClick={(e) => e.stopPropagation()}
                style={{ width: '18px', height: '18px', accentColor: 'var(--success)', cursor: 'pointer' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '4px' }}>
              <button
                type="button"
                className="btn-secondary"
                onClick={handleTestObs}
                disabled={testingObs}
                style={{ height: '34px', fontSize: '0.78rem' }}
              >
                {testingObs ? 'Testing…' : 'Test OBS Connection'}
              </button>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                Target: OBS Studio (Port {obsPort})
              </span>
            </div>

            {obsTestMessage && (
              <div style={{
                marginTop: '10px',
                fontSize: '0.8rem',
                padding: '8px 12px',
                borderRadius: '6px',
                background: obsTestMessage.includes('Successfully') ? 'rgba(40, 199, 111, 0.15)' : 'rgba(79, 140, 255, 0.15)',
                color: obsTestMessage.includes('Successfully') ? '#28c76f' : 'var(--accent)',
                border: `1px solid ${obsTestMessage.includes('Successfully') ? 'rgba(40, 199, 111, 0.4)' : 'rgba(79, 140, 255, 0.3)'}`
              }}>
                {obsTestMessage}
              </div>
            )}
          </section>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button type="button" className="btn-primary" onClick={handleSaveAndClose} style={{ height: '38px', padding: '0 20px' }}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
