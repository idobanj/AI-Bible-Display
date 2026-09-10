@echo off
REM resample_audio.bat
REM Converts an input audio file to 16kHz mono 16-bit PCM WAV (ideal for Whisper)
REM Usage: resample_audio.bat input.wav output.wav

if "%~1"=="" (
    echo Usage: resample_audio.bat input_file [output_file]
    echo Example: resample_audio.bat my_recording.wav cleaned_16k.wav
    exit /b 1
)

set "INPUT=%~1"
set "OUTPUT=%~2"

if "%OUTPUT%"=="" (
    set "OUTPUT=%~dpn1_16k_mono.wav"
)

echo Resampling "%INPUT%" to 16kHz mono WAV: "%OUTPUT%" ...
where ffmpeg >nul 2>nul
if errorlevel 1 (
    echo [ERROR] ffmpeg was not found in PATH.
    echo Please install ffmpeg or place ffmpeg.exe in your PATH.
    exit /b 1
)

ffmpeg -y -i "%INPUT%" -vn -ac 1 -ar 16000 -c:a pcm_s16le "%OUTPUT%"
if errorlevel 1 (
    echo [ERROR] Resampling failed.
    exit /b 1
)

echo [SUCCESS] File successfully converted: "%OUTPUT%"
