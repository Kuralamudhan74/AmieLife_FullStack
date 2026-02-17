#!/bin/bash

echo "=========================================="
echo "  AMIE LIFE - Website Installation"
echo "=========================================="
echo ""

echo "Step 1: Cleaning npm cache..."
npm cache clean --force

echo ""
echo "Step 2: Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "=========================================="
    echo "  ✅ Installation Successful!"
    echo "=========================================="
    echo ""
    echo "Starting development server..."
    echo "The website will open at: http://localhost:3000"
    echo ""
    npm run dev
else
    echo ""
    echo "❌ Installation failed. Trying alternative method..."
    npm install --legacy-peer-deps
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Installation successful with legacy mode!"
        echo "Starting development server..."
        npm run dev
    else
        echo ""
        echo "❌ Installation failed. Please try:"
        echo "   yarn install"
        echo "   or contact support"
    fi
fi
