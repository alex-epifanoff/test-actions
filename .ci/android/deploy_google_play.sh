#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Install fastlane
echo "Installing fastlane..."
# The CI environment should have fastlane pre-installed.
# If not, you would add the installation commands here.
# For example, using Ruby's gem:
# gem install fastlane

# Deploy to Google Play
echo "Deploying to Google Play..."
cd src-tauri/gen/android
fastlane supply --aab app/build/outputs/bundle/release/app-release.aab --track internal --json_key $GOOGLE_PLAY_JSON_KEY