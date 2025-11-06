#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Build the React application
#echo "Building the React application..."
#npm run build

# Build the Tauri Android application
echo "Building the Tauri Android application..."
# The --verbose flag is added for better logging in the CI environment.
npx tauri android build --verbose --target aarch64