#!/bin/bash
set -e

echo "Building..."
npm run build

echo "Starting preview server..."
npm run preview
