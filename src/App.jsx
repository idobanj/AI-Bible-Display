// src/App.jsx
import React, { useEffect, useState, useCallback, useRef } from 'react';
import AppHeader from './components/AppHeader';
import LiveTranscriptPanel from './components/LiveTranscriptPanel';
import ScripturePreview from './components/ScripturePreview';
import SystemStatusBar from './components/SystemStatusBar';
import SettingsModal from './components/SettingsModal';
import ToastNotice from './components/ToastNotice';

export default function App() {
  const [status, setStatus] = useState({});
  const [transcript, setTranscript] = useState('');
  const [history, setHistory] = useState([]);
  const [result, setResult] = useState(null);
  const [notice, setNotice] = useState(null);
  const [listening, setListening] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [hasAudioError, setHasAudioError] = useState(false);
  const [autoDisplay, setAutoDisplay] = useState(() => {
    return localStorage.getItem('churchscreen_auto_display') === 'true';
  });

  const lastDisplayedVerseRef = useRef(null);

  // Sync saved OBS settings on mount
  useEffect(() => {
    if (window.churchscreen?.getObsSettings) {
      window.churchscreen.getObsSettings().then((saved) => {
        if (saved && typeof saved.autoDisplay === 'boolean') {
          setAutoDisplay(saved.autoDisplay);
          localStorage.setItem('churchscreen_auto_display', String(saved.autoDisplay));
        }
      }).catch(() => {});
    }
  }, []);

  // System status polling to keep OBS and transcription state synchronized
  useEffect(() => {
    if (!window.churchscreen?.getStatus) return;
    const fetchStatus = () => {
      window.churchscreen.getStatus().then(setStatus).catch(() => {});
    };
    fetchStatus();
    const interval = setInterval(fetchStatus, 3000);
    return () => clearInterval(interval);
  }, []);

  // Detect reference and lookup verse from local SQLite database
  const detect = useCallback(async (text) => {
    if (!text || !window.churchscreen?.processTranscript) return;
    try {
      const res = await window.churchscreen.processTranscript(text);
      setResult(res);

      // Add to transcript history
      const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setHistory((prev) => [
        {
          id: Date.now(),
          text,
          timestamp: timeStr,
          detected: res?.detected || null
        },
        ...prev.slice(0, 49) // Keep last 50 segments
      ]);

      // Automatically display in OBS if autoDisplay is enabled
      if (autoDisplay && res?.verse) {
        if (lastDisplayedVerseRef.current !== res.verse.reference) {
          lastDisplayedVerseRef.current = res.verse.reference;
          if (window.churchscreen?.displayVerse) {
            const response = await window.churchscreen.displayVerse(res.verse);
            if (response?.sent) {
              setNotice({
                type: 'success',
                message: `⚡ Auto-displayed ${res.verse.reference} in OBS`
              });
            } else if (response?.message) {
              setNotice({
                type: 'info',
                message: response.message
              });
            }
            if (window.churchscreen?.getStatus) {
              window.churchscreen.getStatus().then(setStatus).catch(() => {});
            }
          }
        }
      }
    } catch (err) {
      setNotice({ type: 'error', message: err.message || 'Reference detection failed' });
    }
  }, [autoDisplay]);

  // Handle IPC transcription events from Whisper service
  useEffect(() => {
    if (!window.churchscreen?.onTranscriptionEvent) return;

    const handler = (event) => {
      if (!event) return;
      switch (event.type) {
        case 'status':
          setStatus((prev) => ({ ...prev, transcription: event.state }));
          if (event.state === 'stopped' || event.state === 'not-configured') {
            setListening(false);
          }
          if (event.message) {
            setNotice({ type: 'info', message: event.message });
          }
          break;
        case 'transcript':
          setTranscript(event.text);
          if (event.isFinal) {
            detect(event.text);
          }
          break;
        case 'error':
          setNotice({ type: 'error', message: event.message });
          setListening(false);
          setHasAudioError(true);
          break;
        default:
          break;
      }
    };

    const unsubscribe = window.churchscreen.onTranscriptionEvent(handler);
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, [detect]);

  // Toggle Hands-Free Auto-Display mode
  const handleToggleAutoDisplay = (enabled) => {
    setAutoDisplay(enabled);
    localStorage.setItem('churchscreen_auto_display', String(enabled));
    if (window.churchscreen?.saveObsSettings) {
      window.churchscreen.saveObsSettings({ autoDisplay: enabled }).catch(() => {});
    }
    setNotice({
      type: enabled ? 'success' : 'info',
      message: enabled
        ? '⚡ Auto-Display enabled: Recognized scriptures will automatically push to OBS.'
        : '✋ Auto-Display disabled: Manual operator verification required.'
    });
  };

  // Display verse in OBS Studio
  const handleDisplayInObs = async () => {
    if (!result?.verse || !window.churchscreen?.displayVerse) return;
    try {
      lastDisplayedVerseRef.current = result.verse.reference;
      const response = await window.churchscreen.displayVerse(result.verse);
      if (response?.message) {
        setNotice({
          type: response.sent ? 'success' : 'info',
          message: response.message
        });
      }
      // Instantly refresh OBS status badge in header
      if (window.churchscreen.getStatus) {
        window.churchscreen.getStatus().then(setStatus).catch(() => {});
      }
    } catch (err) {
      setNotice({ type: 'error', message: err.message || 'Failed to display verse in OBS' });
    }
  };

  // Ignore / Dismiss current scripture preview
  const handleIgnore = () => {
    setResult(null);
  };

  // Audio device selection state (persisted in localStorage)
  const [selectedAudioDevice, setSelectedAudioDevice] = useState(() => {
    try {
      const saved = localStorage.getItem('churchscreen_audio_device');
      return saved ? JSON.parse(saved) : { id: 'default', index: 'default', label: 'Default System Microphone' };
    } catch {
      return { id: 'default', index: 'default', label: 'Default System Microphone' };
    }
  });

  // Start listening with chosen audio device
  const handleStartListening = async (deviceOverride = null) => {
    setNotice(null);
    setHasAudioError(false);
    try {
      const targetDev = deviceOverride || selectedAudioDevice;
      const deviceArg = (targetDev && targetDev.index !== 'default' && targetDev.index !== null && targetDev.index !== undefined)
        ? Number(targetDev.index)
        : null;

      const config = {
        audioDevice: deviceArg
      };
      const resp = await window.churchscreen?.startTranscription?.(config);
      if (resp && resp.error) {
        setListening(false);
        setHasAudioError(true);
        setNotice({ type: 'error', message: resp.error });
      } else {
        setListening(true);
      }
    } catch (err) {
      setListening(false);
      setHasAudioError(true);
      setNotice({ type: 'error', message: err.message || 'Failed to start transcription' });
    }
  };

  // Switch microphone and optionally restart transcription live
  const handleSelectAudioDevice = async (device) => {
    setSelectedAudioDevice(device);
    try {
      localStorage.setItem('churchscreen_audio_device', JSON.stringify(device));
    } catch {}

    // If currently listening, seamlessly restart transcription with new audio device
    if (listening) {
      if (window.churchscreen?.stopTranscription) {
        await window.churchscreen.stopTranscription();
      }
      setTimeout(() => {
        handleStartListening(device);
      }, 400);
    }
  };

  // Stop listening
  const handleStopListening = async () => {
    if (window.churchscreen?.stopTranscription) {
      await window.churchscreen.stopTranscription();
    }
    setListening(false);
  };

  // Clear history
  const handleClearHistory = () => {
    setHistory([]);
  };

  // Handle manual detection from test inputs
  const handleManualDetect = (text) => {
    setTranscript(text);
    detect(text);
  };

  // Clear scripture from OBS text source
  const handleClearObsDisplay = async () => {
    if (!window.churchscreen?.clearObsDisplay) return;
    try {
      lastDisplayedVerseRef.current = null;
      const response = await window.churchscreen.clearObsDisplay();
      setNotice({
        type: response.cleared ? 'info' : 'error',
        message: response.message
      });
    } catch (err) {
      setNotice({ type: 'error', message: err.message || 'Failed to clear OBS display' });
    }
  };

  // Test OBS connection from Settings modal
  const handleTestObsConnection = async (obsConfig) => {
    if (window.churchscreen?.testObsConnection) {
      try {
        const res = await window.churchscreen.testObsConnection(obsConfig);
        // Refresh system status bar
        if (window.churchscreen.getStatus) {
          window.churchscreen.getStatus().then(setStatus).catch(() => {});
        }
        return res;
      } catch (err) {
        return { success: false, message: err.message || 'Failed to connect to OBS' };
      }
    }
    return {
      success: false,
      message: 'OBS bridge not available'
    };
  };

  return (
    <div className="app-container">
      {/* Top Bar Navigation */}
      <AppHeader
        listening={listening}
        obsStatus={status.obs}
        onOpenSettings={() => setSettingsOpen(true)}
      />

      {/* Main Workspace (2-column desktop layout) */}
      <main className="workspace">
        {/* Left Column: Live Transcript Area (60-65% width) */}
        <LiveTranscriptPanel
          listening={listening}
          onStartListening={handleStartListening}
          onStopListening={handleStopListening}
          transcript={transcript}
          history={history}
          onClearHistory={handleClearHistory}
          onDetect={handleManualDetect}
          audioDevice={selectedAudioDevice?.label || 'Default System Microphone'}
          hasAudioError={hasAudioError}
          notice={notice}
        />

        {/* Right Column: Scripture Queue & Preview (35-40% width) */}
        <ScripturePreview
          result={result}
          onDisplay={handleDisplayInObs}
          onIgnore={handleIgnore}
          onClearDisplay={handleClearObsDisplay}
          autoDisplay={autoDisplay}
          onToggleAutoDisplay={handleToggleAutoDisplay}
        />
      </main>

      {/* Bottom Compact System Status Strip */}
      <SystemStatusBar
        status={status}
        listening={listening}
        audioDevice={selectedAudioDevice?.label || 'Default System Microphone'}
      />

      {/* Settings Modal Sheet */}
      <SettingsModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        status={status}
        onTestObsConnection={handleTestObsConnection}
        selectedAudioDevice={selectedAudioDevice}
        onSelectAudioDevice={handleSelectAudioDevice}
        autoDisplay={autoDisplay}
        onToggleAutoDisplay={handleToggleAutoDisplay}
      />

      {/* Non-blocking Toast Feedback */}
      <ToastNotice
        notice={notice}
        onClose={() => setNotice(null)}
      />
    </div>
  );
}
