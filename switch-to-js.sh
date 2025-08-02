#!/bin/bash
# Script to switch to JavaScript version

# Check if already in JavaScript mode
if [ -d "src" ] && [ -d "src-js" ]; then
  # Compare if they have the same content structure
  if diff -q src/app/layout.js src-js/app/layout.js >/dev/null 2>&1; then
    echo "Already in JavaScript mode"
    exit 0
  fi
fi

# Copy JavaScript source to src
rm -rf src
cp -r src-js src
echo "Switched to JavaScript version"
echo "Run 'npm run dev:js' to start the JavaScript dev server"