// electron/ipc/handlers.js
// Registers IPC handlers for the renderer process, including database, OBS, and transcription control.

const { openBibleDatabase } = require('../database/database');
const { findVerse } = require('../database/bibleQueries');
const { parseBibleReference, resetActiveContext } = require('../services/referenceParser');
const { createObsClient } = require('../obs/obsClient');
const { start, stop, getStatus, getAudioDevices, validateGroqKey } = require('../whisper/whisperService');

let recentTranscriptBuffer = '';
let bufferClearTimer = null;

function registerHandlers(ipcMain, electronApp) {
  const userDataPath = electronApp.getPath('userData');
  const db = openBibleDatabase(userDataPath);
  const obs = createObsClient(userDataPath);

  // Status handler – reflects live database verse count, whisper service state, and OBS connection
  ipcMain.handle('app:get-status', () => {
    let dbStatus = 'Ready';
    try {
      const count = db.prepare('SELECT COUNT(*) AS count FROM verses').get()?.count || 0;
      dbStatus = `Ready (KJV - ${count.toLocaleString()} verses)`;
    } catch {
      dbStatus = 'Ready (KJV)';
    }

    const obsStatus = obs.getStatus();
    return {
      database: dbStatus,
      transcription: getStatus().running ? 'Running' : 'Stopped',
      obs: obsStatus.connected ? 'Connected' : 'Not connected'
    };
  });

  // Expose environment GROQ_API_KEY if configured
  ipcMain.handle('app:get-env-key', () => process.env.GROQ_API_KEY || '');

  // Transcript processing (finds reference and looks up scripture)
  // Evaluates both the current segment and recent rolling buffer to stitch split phrases
  ipcMain.handle('transcript:process', (_event, text) => {
    if (!text || typeof text !== 'string') {
      return { transcript: '', detected: null, verse: null };
    }

    const trimmed = text.trim();
    // 1. Try matching the current segment alone
    let reference = parseBibleReference(trimmed);

    // 2. If no match and we have a recent preceding segment, try the combined rolling window
    if (!reference && recentTranscriptBuffer) {
      const combined = `${recentTranscriptBuffer} ${trimmed}`.trim();
      reference = parseBibleReference(combined);
    }

    // Update rolling buffer (keep last ~30 words, clear after 12 seconds of silence)
    recentTranscriptBuffer = trimmed.split(/\s+/).slice(-25).join(' ');
    if (bufferClearTimer) clearTimeout(bufferClearTimer);
    bufferClearTimer = setTimeout(() => {
      recentTranscriptBuffer = '';
    }, 12000);

    return {
      transcript: text,
      detected: reference,
      verse: reference ? findVerse(db, reference) : null
    };
  });

  // Reset context manually or when new service session starts
  ipcMain.handle('reference:reset-context', () => {
    resetActiveContext();
    recentTranscriptBuffer = '';
    return { reset: true };
  });

  // OBS actions and configuration
  ipcMain.handle('obs:display-verse', (_event, verse, config) => obs.displayVerse(verse, config));
  ipcMain.handle('obs:clear-display', (_event, sourceName) => obs.clearDisplay(sourceName));
  ipcMain.handle('obs:test-connection', (_event, config) => obs.testConnection(config));
  ipcMain.handle('obs:get-settings', () => obs.getSettings());
  ipcMain.handle('obs:save-settings', (_event, config) => obs.saveSettings(config));
  ipcMain.handle('obs:get-status', () => obs.getStatus());

  // Transcription service controls
  ipcMain.handle('transcription:start', (_event, config) => start(config));
  ipcMain.handle('transcription:stop', () => stop());
  ipcMain.handle('transcription:status', () => getStatus());
  ipcMain.handle('transcription:get-audio-devices', () => getAudioDevices());
  ipcMain.handle('transcription:validate-groq-key', (_event, apiKey) => validateGroqKey(apiKey));
}

module.exports = { registerHandlers };
