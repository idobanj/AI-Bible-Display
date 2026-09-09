// electron/preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('churchscreen', {
  // App & System Status
  getStatus: () => ipcRenderer.invoke('app:get-status'),
  getEnvKey: () => ipcRenderer.invoke('app:get-env-key'),

  // Scripture & Transcription processing
  processTranscript: (text) => ipcRenderer.invoke('transcript:process', text),
  onTranscriptionEvent: (callback) => {
    const handler = (_event, data) => callback(data);
    ipcRenderer.on('transcription-event', handler);
    return () => ipcRenderer.removeListener('transcription-event', handler);
  },
  startTranscription: (config) => ipcRenderer.invoke('transcription:start', config),
  stopTranscription: () => ipcRenderer.invoke('transcription:stop'),
  getTranscriptionStatus: () => ipcRenderer.invoke('transcription:status'),
  getAudioDevices: () => ipcRenderer.invoke('transcription:get-audio-devices'),
  validateGroqKey: (apiKey) => ipcRenderer.invoke('transcription:validate-groq-key', apiKey),

  // OBS Studio controls & settings
  displayVerse: (verse, config) => ipcRenderer.invoke('obs:display-verse', verse, config),
  clearObsDisplay: (sourceName) => ipcRenderer.invoke('obs:clear-display', sourceName),
  testObsConnection: (config) => ipcRenderer.invoke('obs:test-connection', config),
  getObsSettings: () => ipcRenderer.invoke('obs:get-settings'),
  saveObsSettings: (config) => ipcRenderer.invoke('obs:save-settings', config),
  getObsStatus: () => ipcRenderer.invoke('obs:get-status')
});
