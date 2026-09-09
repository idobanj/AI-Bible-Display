// electron/whisper/whisperService.js
// Manages the Python faster-whisper transcription child process.
// Exposes start, stop, and status handling. Sends events to the renderer via
// the main BrowserWindow instance.

const { spawn, exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const readline = require('readline');
const https = require('https');

let child = null;
let isRunning = false;
let pendingStart = false;
let mainWindow = null;

function setMainWindow(win) {
  mainWindow = win;
}

function _sendEvent(event) {
  if (mainWindow && mainWindow.webContents && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send('transcription-event', event);
  }
}

function _handleStdoutLine(line) {
  line = line.trim();
  if (!line) return;
  try {
    const obj = JSON.parse(line);
    _sendEvent(obj);
  } catch (e) {
    // Non-JSON line from python script or dependencies
    console.log('[Python stdout]', line);
  }
}

/**
 * Finds a valid Python 3 installation that has faster-whisper available.
 */
function findWorkingPython(customPath) {
  return new Promise((resolve) => {
    const localAppData = process.env.LOCALAPPDATA || '';
    const python311StandardPath = path.join(
      localAppData,
      'Programs',
      'Python',
      'Python311',
      'python.exe'
    );

    const candidates = [];
    if (customPath) candidates.push({ exe: customPath, extraArgs: [] });
    if (fs.existsSync(python311StandardPath)) {
      candidates.push({ exe: python311StandardPath, extraArgs: [] });
    }
    candidates.push(
      { exe: 'py', extraArgs: ['-3.11'] },
      { exe: 'py', extraArgs: [] },
      { exe: 'python', extraArgs: [] },
      { exe: 'python3', extraArgs: [] }
    );

    let index = 0;

    function testNext() {
      if (index >= candidates.length) {
        return resolve({
          available: false,
          error:
            'Could not find a working Python installation with faster-whisper. Run: pip install -r python/requirements.txt'
        });
      }

      const candidate = candidates[index++];
      const fullCmd = [
        `"${candidate.exe}"`,
        ...candidate.extraArgs,
        '-c "import faster_whisper; print(\'OK\')"'
      ].join(' ');

      exec(fullCmd, { timeout: 6000 }, (err, stdout, stderr) => {
        const outText = (stdout || '') + (stderr || '');

        // Ignore WindowsApps alias placeholder
        if (
          outText.includes('App execution aliases') ||
          outText.includes('Python was not found')
        ) {
          return testNext();
        }

        if (!err && stdout.includes('OK')) {
          return resolve({
            available: true,
            exe: candidate.exe,
            extraArgs: candidate.extraArgs
          });
        }

        testNext();
      });
    }

    testNext();
  });
}

async function start(config = {}) {
  if (isRunning) {
    return { alreadyRunning: true };
  }
  if (pendingStart) {
    return { pending: true };
  }
  pendingStart = true;

  try {
    const pyCheck = await findWorkingPython(config.pythonPath);

    if (!pyCheck.available) {
      pendingStart = false;
      const errorMsg =
        pyCheck.error ||
        'Python dependencies missing. Please run: pip install -r python/requirements.txt';
      _sendEvent({ type: 'error', message: errorMsg });
      _sendEvent({ type: 'status', state: 'not-configured', message: errorMsg });
      return { started: false, error: errorMsg };
    }

    const scriptPath = path.join(__dirname, '..', '..', 'python', 'transcriber.py');

    const cfg = {
      engine: config.engine || (process.env.GROQ_API_KEY ? 'groq' : 'local'),
      groq_api_key: config.groqApiKey || process.env.GROQ_API_KEY || '',
      groq_model: config.groqModel || 'whisper-large-v3',
      model: config.model || 'small',
      device: config.device || 'cpu',
      compute_type: config.compute_type || 'int8',
      audio_device: config.audioDevice !== undefined ? config.audioDevice : null,
      initial_prompt: config.initialPrompt || undefined
    };

    const spawnArgs = [
      ...pyCheck.extraArgs,
      scriptPath,
      '--config',
      JSON.stringify(cfg)
    ];

    child = spawn(pyCheck.exe, spawnArgs, {
      stdio: ['pipe', 'pipe', 'pipe'],
      windowsHide: true
    });

    const rl = readline.createInterface({ input: child.stdout });
    rl.on('line', _handleStdoutLine);

    child.stderr.on('data', (data) => {
      const msg = data.toString().trim();
      if (msg) {
        console.error('[Python stderr]', msg);
        if (
          msg.includes('Error') ||
          msg.includes('ModuleNotFoundError') ||
          msg.includes('Exception')
        ) {
          _sendEvent({ type: 'error', message: msg });
        }
      }
    });

    child.on('error', (err) => {
      isRunning = false;
      pendingStart = false;
      child = null;
      _sendEvent({
        type: 'error',
        message: `Failed to launch transcription process: ${err.message}`
      });
      _sendEvent({ type: 'status', state: 'stopped' });
    });

    child.on('exit', (code, signal) => {
      isRunning = false;
      pendingStart = false;
      child = null;
      _sendEvent({
        type: 'status',
        state: 'stopped',
        message: `Process stopped (exit code ${code})`
      });
    });

    isRunning = true;
    pendingStart = false;
    _sendEvent({
      type: 'status',
      state: 'starting',
      message: 'Starting local speech recognition engine…'
    });
    return { started: true };
  } catch (err) {
    isRunning = false;
    pendingStart = false;
    child = null;
    _sendEvent({ type: 'error', message: err.message });
    _sendEvent({ type: 'status', state: 'stopped' });
    return { started: false, error: err.message };
  }
}

function stop() {
  if (child && isRunning) {
    try {
      child.kill('SIGTERM');
    } catch (e) {
      // ignore
    }
    isRunning = false;
    child = null;
    _sendEvent({
      type: 'status',
      state: 'stopped',
      message: 'Transcription stopped.'
    });
    return { stopped: true };
  }
  return { stopped: false, reason: 'not running' };
}

function getStatus() {
  return { running: isRunning };
}

async function getAudioDevices() {
  const pyCheck = await findWorkingPython();
  if (!pyCheck.available) return [];

  const scriptPath = path.join(__dirname, '..', '..', 'python', 'transcriber.py');
  const fullCmd = [
    `"${pyCheck.exe}"`,
    ...pyCheck.extraArgs,
    `"${scriptPath}"`,
    '--list-devices'
  ].join(' ');

  return new Promise((resolve) => {
    exec(fullCmd, { timeout: 8000 }, (err, stdout) => {
      if (err || !stdout) return resolve([]);
      try {
        const parsed = JSON.parse(stdout.trim());
        resolve(parsed);
      } catch {
        resolve([]);
      }
    });
  });
}

function validateGroqKey(apiKey) {
  return new Promise((resolve) => {
    if (!apiKey || typeof apiKey !== 'string' || !apiKey.trim()) {
      return resolve({ valid: false, message: 'Please enter a Groq API key.' });
    }

    const key = apiKey.trim();
    const options = {
      hostname: 'api.groq.com',
      port: 443,
      path: '/openai/v1/models',
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${key}`,
        'User-Agent': 'ChurchScreen-AI'
      },
      timeout: 8000
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve({ valid: true, message: 'Groq API Key is valid and connected!' });
        } else if (res.statusCode === 401) {
          resolve({ valid: false, message: 'Invalid Groq API Key. Please check the key and try again.' });
        } else {
          resolve({ valid: false, message: `Groq response code ${res.statusCode}: ${res.statusMessage}` });
        }
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({ valid: false, message: 'Connection timed out while verifying Groq API Key.' });
    });

    req.on('error', (err) => {
      resolve({ valid: false, message: `Network error: ${err.message}` });
    });

    req.end();
  });
}

module.exports = {
  setMainWindow,
  start,
  stop,
  getStatus,
  findWorkingPython,
  getAudioDevices,
  validateGroqKey
};
