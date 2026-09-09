// electron/main.js
// Main process entry point. Sets up the BrowserWindow, registers IPC handlers, and integrates the whisper transcription service.

const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path');
const fs = require('fs');
const { registerHandlers } = require('./ipc/handlers');
const { setMainWindow } = require('./whisper/whisperService');

// Automatically load variables from .env if present
try {
  const envPath = path.join(__dirname, '..', '.env');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const idx = trimmed.indexOf('=');
      if (idx !== -1) {
        const k = trimmed.slice(0, idx).trim();
        const v = trimmed.slice(idx + 1).trim().replace(/^['"](.*)['"]$/, '$1');
        if (k && !process.env[k]) {
          process.env[k] = v;
        }
      }
    }
  }
} catch (e) { }

let mainWindow;

function createWindow ()
{
  mainWindow = new BrowserWindow({
    width: 1120,
    height: 760,
    minWidth: 900,
    minHeight: 620,
    backgroundColor: '#0B1220',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  // Enable native right-click context menu for inputs (Cut, Copy, Paste)
  mainWindow.webContents.on('context-menu', (_event, params) =>
  {
    if (params.isEditable) {
      const contextMenu = Menu.buildFromTemplate([
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { type: 'separator' },
        { role: 'selectAll' }
      ]);
      contextMenu.popup(mainWindow);
    }
  });

  // Allow microphone access for the renderer live mic visualizer
  mainWindow.webContents.session.setPermissionCheckHandler((_webContents, permission) =>
  {
    if (permission === 'media') return true;
    return false;
  });
  mainWindow.webContents.session.setPermissionRequestHandler((_webContents, permission, callback) =>
  {
    if (permission === 'media') return callback(true);
    return callback(false);
  });

  // Register the window so the whisper service can forward events to the renderer.
  setMainWindow(mainWindow);

  if (process.argv.includes('--dev')) {
    mainWindow.loadURL('http://localhost:5173');
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

app.whenReady().then(() =>
{
  registerHandlers(ipcMain, app);
  createWindow();
  app.on('activate', () =>
  {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () =>
{
  if (process.platform !== 'darwin') app.quit();
});
