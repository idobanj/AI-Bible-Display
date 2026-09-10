// src/components/SettingsModal.jsx
import React, { useState, useEffect } from 'react';

export default function SettingsModal({
  isOpen,
  onClose,
  status,
  onTestObsConnection,
  selectedAudioDevice,
  onSelectAudioDevice,
  transcriptionEngine = 'local',
  onSelectTranscriptionEngine,
  groqModel = 'whisper-large-v3',
  onSelectGroqModel,
  whisperModel = 'small',
  onSelectWhisperModel
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
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
              <span>2. Speech Recognition Engine</span>
              {transcriptionEngine === 'groq' ? (
                <span className="badge badge-live">Groq Cloud LPU</span>
              ) : (
                <span className="badge badge-standby">Local Offline</span>
              )}
            </div>

            {/* Engine Selector Segmented Control */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
              <button
                type="button"
                className={`btn ${transcriptionEngine === 'groq' ? 'btn-primary' : 'btn-secondary'}`}
                style={{
                  padding: '10px 12px',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  borderColor: transcriptionEngine === 'groq' ? 'var(--border-strong)' : 'var(--border)'
                }}
                onClick={() => onSelectTranscriptionEngine && onSelectTranscriptionEngine('groq')}
              >
                Groq Cloud Whisper
              </button>

              <button
                type="button"
                className={`btn ${transcriptionEngine === 'local' ? 'btn-primary' : 'btn-secondary'}`}
                style={{
                  padding: '10px 12px',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  borderColor: transcriptionEngine === 'local' ? 'var(--border-strong)' : 'var(--border)'
                }}
                onClick={() => onSelectTranscriptionEngine && onSelectTranscriptionEngine('local')}
              >
                Local Offline
              </button>
            </div>

            {/* Groq Cloud Configuration */}
            {transcriptionEngine === 'groq' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label>Cloud Speech Model</label>
                    <select
                      className="form-control"
                      value={groqModel || 'whisper-large-v3'}
                      onChange={(e) => {
                        if (onSelectGroqModel) onSelectGroqModel(e.target.value);
                      }}
                    >
                      <option value="whisper-large-v3">whisper-large-v3 (Maximum Accuracy · Recommended)</option>
                      <option value="whisper-large-v3-turbo">whisper-large-v3-turbo (Turbo / Fastest)</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label>Language</label>
                    <select className="form-control" defaultValue="en" disabled>
                      <option value="en">English (default)</option>
                    </select>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 14px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    borderRadius: '6px',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <span><strong>Groq Cloud Engine Active:</strong> Configured via environment. Real-time ~200ms speech recognition with 0% CPU strain on your PC.</span>
                </div>

                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Audio is processed over secure TLS via Groq LPUs in the cloud. Superior recognition for diverse church sermon accents.
                </div>
              </div>
            ) : (
              /* Local Offline Configuration */
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label>Local Whisper Model</label>
                    <select
                      className="form-control"
                      value={whisperModel || 'small'}
                      onChange={(e) => {
                        if (onSelectWhisperModel) {
                          onSelectWhisperModel(e.target.value);
                        }
                      }}
                    >
                      <option value="medium">medium (High Accuracy · 16GB RAM recommended)</option>
                      <option value="small">small (Standard — Balanced)</option>
                      <option value="base">base (Multilingual / Fast)</option>
                      <option value="small.en">small.en (Standard English)</option>
                      <option value="base.en">base.en (Standard English — Faster)</option>
                      <option value="tiny.en">tiny.en (Fastest, low accuracy)</option>
                      <option value="large-v3">large-v3 (Maximum Accuracy · Heavy on CPU)</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label>Language</label>
                    <select className="form-control" defaultValue="en" disabled>
                      <option value="en">English (default)</option>
                    </select>
                  </div>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Speech recognition runs 100% locally via faster-whisper on your PC CPU without requiring an internet connection.
                </div>
              </div>
            )}
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
                <label>WebSocket Password</label>
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
                      color: 'var(--text-primary)',
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
                background: obsTestMessage.includes('Successfully') ? 'rgba(40, 199, 111, 0.15)' : 'rgba(255, 255, 255, 0.08)',
                color: obsTestMessage.includes('Successfully') ? '#28c76f' : 'var(--text-secondary)',
                border: `1px solid ${obsTestMessage.includes('Successfully') ? 'rgba(40, 199, 111, 0.4)' : 'var(--border-subtle)'}`
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
