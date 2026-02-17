@echo off
echo ==========================================
echo   AMIE LIFE - Website Installation
echo ==========================================
echo.

echo Step 1: Cleaning npm cache...
call npm cache clean --force

echo.
echo Step 2: Installing dependencies...
call npm install

if %errorlevel% equ 0 (
    echo.
    echo ==========================================
    echo   Installation Successful!
    echo ==========================================
    echo.
    echo Starting development server...
    echo The website will open at: http://localhost:3000
    echo.
    call npm run dev
) else (
    echo.
    echo Installation failed. Trying alternative method...
    call npm install --legacy-peer-deps
    
    if %errorlevel% equ 0 (
        echo.
        echo Installation successful with legacy mode!
        echo Starting development server...
        call npm run dev
    ) else (
        echo.
        echo Installation failed. Please try:
        echo    yarn install
        echo    or contact support
        pause
    )
)
