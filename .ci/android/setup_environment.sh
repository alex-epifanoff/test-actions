#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Install Node.js and npm
echo "Installing Node.js and npm..."
# The CI environment should have Node.js pre-installed.
# If not, you would add the installation commands here.
# For example, using nvm:
# nvm install 18
# nvm use 18

# Install Rust
echo "Installing Rust..."
# The CI environment should have Rust pre-installed.
# If not, you would add the installation commands here.
# For example:
# curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

# Install Android development dependencies
echo "Installing Android development dependencies..."
# The CI environment should have the Android SDK and NDK pre-installed.
# If not, you would add the installation commands here.

# Install project dependencies
echo "Installing project dependencies..."
cd src/react-stub
npm install