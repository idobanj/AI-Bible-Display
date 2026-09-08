// electron/obs/obsClient.js
const obsLib = require('obs-websocket-js');
const OBSWebSocket = obsLib.default || obsLib.OBSWebSocket;
const fs = require('fs');
const path = require('path');

const DEFAULT_SETTINGS = {
  host: 'localhost',
  port: '4455',
  password: '',
  source: 'Scripture Text',
  autoFormat: true,
  includeReference: true,
  translationBadge: 'KJV',
  autoDisplay: false
};

function createObsClient(userDataPath) {
  const obs = new OBSWebSocket();
  let isConnected = false;
  let connectionInfo = { ...DEFAULT_SETTINGS };
  let settingsFilePath = null;

  if (userDataPath) {
    const dataDir = path.join(userDataPath, 'churchscreen-ai');
    fs.mkdirSync(dataDir, { recursive: true });
    settingsFilePath = path.join(dataDir, 'obs-settings.json');
    loadSettings();
    // Attempt automatic background connection 1s after startup
    setTimeout(() => {
      connect().catch(() => {});
    }, 1200);
  }

  function loadSettings() {
    if (!settingsFilePath) return;
    try {
      if (fs.existsSync(settingsFilePath)) {
        const raw = fs.readFileSync(settingsFilePath, 'utf8');
        const parsed = JSON.parse(raw);
        connectionInfo = { ...DEFAULT_SETTINGS, ...parsed };
      }
    } catch (e) {
      console.error('[OBS] Could not load saved OBS settings:', e.message);
    }
  }

  function saveSettings(newSettings) {
    connectionInfo = { ...connectionInfo, ...newSettings };
    if (!settingsFilePath) return connectionInfo;
    try {
      fs.writeFileSync(settingsFilePath, JSON.stringify(connectionInfo, null, 2), 'utf8');
      console.log('[OBS] Saved settings to disk');
    } catch (e) {
      console.error('[OBS] Could not save OBS settings:', e.message);
    }
    return connectionInfo;
  }

  // Setup connection state listeners
  obs.on('ConnectionClosed', () => {
    isConnected = false;
    console.log('[OBS] Connection closed');
  });

  obs.on('Identified', () => {
    isConnected = true;
    console.log('[OBS] Authenticated and identified');
  });

  async function connect(cfg = {}) {
    const host = cfg.host || connectionInfo.host || 'localhost';
    const port = cfg.port || connectionInfo.port || '4455';
    const password = cfg.password !== undefined ? cfg.password : connectionInfo.password;
    const url = `ws://${host}:${port}`;

    if (isConnected) {
      return { success: true, message: 'Already connected' };
    }

    try {
      console.log(`[OBS] Connecting to ${url}...`);
      await obs.connect(url, password || undefined, { rpcVersion: 1 });
      isConnected = true;
      return { success: true, message: `Connected to OBS at ${url}` };
    } catch (err) {
      isConnected = false;
      let msg = err.message || `Error code ${err.code}`;
      if (err.code === 1006 || (msg && msg.includes('ECONNREFUSED'))) {
        msg = `Could not reach OBS at ${url}. Please ensure OBS Studio is running and WebSocket Server is enabled in Tools → WebSocket Server Settings.`;
      } else if (err.code === 4009 || (msg && msg.includes('authentication'))) {
        msg = 'Authentication failed. Please check your OBS WebSocket password in Settings.';
      }
      return { success: false, message: msg };
    }
  }

  async function disconnect() {
    if (isConnected) {
      try {
        await obs.disconnect();
      } catch (e) {}
    }
    isConnected = false;
    return { disconnected: true };
  }

  async function testConnection(cfg = {}) {
    const host = cfg.host || connectionInfo.host || 'localhost';
    const port = cfg.port || connectionInfo.port || '4455';
    const password = cfg.password !== undefined ? cfg.password : connectionInfo.password;

    // Save configuration attempt
    saveSettings(cfg);

    // Disconnect existing if any
    if (isConnected) {
      try { await obs.disconnect(); } catch (e) {}
      isConnected = false;
    }

    const connRes = await connect({ host, port, password });
    if (!connRes.success) {
      return {
        success: false,
        message: connRes.message
      };
    }

    try {
      const version = await obs.call('GetVersion');
      const inputs = await obs.call('GetInputList');
      const textSources = (inputs.inputs || [])
        .filter(i => (i.inputKind || '').toLowerCase().includes('text'))
        .map(i => i.inputName);

      return {
        success: true,
        message: `Successfully connected to OBS Studio ${version.obsVersion} (WebSocket v${version.obsWebSocketVersion}).`,
        obsVersion: version.obsVersion,
        textSources
      };
    } catch (err) {
      return {
        success: true,
        message: `Connected to OBS Studio, but encountered error fetching version: ${err.message}`
      };
    }
  }

  function formatVerseText(verse) {
    if (!verse || !verse.verses) return '';
    const badge = connectionInfo.translationBadge || 'KJV';
    const isMultiVerse = verse.verses.length > 1;

    const body = verse.verses
      .map(v => (isMultiVerse ? `[${v.verse}] ${v.text}` : v.text))
      .join('\n');

    if (!connectionInfo.includeReference) {
      return body;
    }

    return `${body}\n\n— ${verse.reference} (${badge})`;
  }

  async function displayVerse(verse, overrideConfig = {}) {
    if (!verse || !verse.verses) {
      return { sent: false, message: 'No verse data to display.' };
    }

    const targetSource = overrideConfig.source || connectionInfo.source || 'Scripture Text';

    // Ensure connection
    if (!isConnected) {
      const conn = await connect();
      if (!conn.success) {
        return {
          sent: false,
          connected: false,
          message: `OBS not connected: ${conn.message}`
        };
      }
    }

    const formattedText = formatVerseText(verse);

    try {
      // Update text source settings in OBS (WebSocket v5)
      await obs.call('SetInputSettings', {
        inputName: targetSource,
        inputSettings: {
          text: formattedText
        }
      });

      console.log(`[OBS] Displayed "${verse.reference}" on source "${targetSource}".`);
      return {
        sent: true,
        connected: true,
        message: `Displayed ${verse.reference} in OBS ("${targetSource}")`
      };
    } catch (err) {
      console.error('[OBS] SetInputSettings error:', err);
      let errorMsg = err.message || err.comment || 'Unknown error';

      if (errorMsg.includes('not found') || err.code === 600) {
        try {
          const inputs = await obs.call('GetInputList');
          const textSources = (inputs.inputs || []).filter(i => (i.inputKind || '').toLowerCase().includes('text'));
          
          // Auto-fallback: If targetSource was not found, but other text sources exist (e.g. "Text (GDI+)"), use the first one!
          if (textSources.length > 0) {
            const fallbackSource = textSources[0].inputName;
            await obs.call('SetInputSettings', {
              inputName: fallbackSource,
              inputSettings: { text: formattedText }
            });
            saveSettings({ source: fallbackSource });
            console.log(`[OBS] Auto-targeted available text source "${fallbackSource}".`);
            return {
              sent: true,
              connected: true,
              message: `Displayed ${verse.reference} in OBS ("${fallbackSource}")`
            };
          }

          const available = (inputs.inputs || [])
            .map(i => `"${i.inputName}"`)
            .join(', ');
          errorMsg = `No text source found in OBS. Available sources: ${available || 'none'}. Please add a Text (GDI+) source in OBS.`;
        } catch {
          errorMsg = `Text source "${targetSource}" not found in OBS.`;
        }
      }

      return {
        sent: false,
        connected: true,
        message: `OBS error: ${errorMsg}`
      };
    }
  }

  async function clearDisplay(sourceName) {
    const target = sourceName || connectionInfo.source || 'Scripture Text';
    if (!isConnected) {
      const conn = await connect();
      if (!conn.success) return { cleared: false, message: conn.message };
    }
    try {
      await obs.call('SetInputSettings', {
        inputName: target,
        inputSettings: { text: '' }
      });
      return { cleared: true, message: `Cleared OBS source "${target}".` };
    } catch (err) {
      return { cleared: false, message: `Failed to clear source: ${err.message}` };
    }
  }

  function getStatus() {
    return {
      connected: isConnected,
      host: connectionInfo.host,
      port: connectionInfo.port,
      source: connectionInfo.source
    };
  }

  function getSettings() {
    return { ...connectionInfo };
  }

  return {
    connect,
    disconnect,
    testConnection,
    displayVerse,
    clearDisplay,
    getStatus,
    getSettings,
    saveSettings
  };
}

module.exports = { createObsClient };
