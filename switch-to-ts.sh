#!/bin/bash
# Script to switch to TypeScript version

# Check if already in TypeScript mode
if [ -d "src" ] && [ -d "src-ts" ]; then
  # Compare if they have the same content structure
  if diff -q src/app/layout.tsx src-ts/app/layout.tsx >/dev/null 2>&1; then
    echo "Already in TypeScript mode"
    exit 0
  fi
fi

# Copy TypeScript source to src
rm -rf src
cp -r src-ts src
echo "Switched to TypeScript version"
echo "Run 'npm run dev' to start the TypeScript dev server"