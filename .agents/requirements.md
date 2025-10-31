# Project Requirements

This document outlines the functional and non-functional requirements for the mobile app build pipeline and CI/CD process.

## 1. Core Objective

The primary goal is to set up a CI/CD pipeline for a React application packaged for mobile platforms (iOS and Android) using two different frameworks: Tauri and RhoMobile.

## 2. Application Requirements

*   **Stub Application:** A simple "Hello World" style React application will be used as a placeholder. This application will be replaced with the actual one later.
*   **Mobile Frameworks:** The React application must be packaged using:
    *   Tauri
    *   RhoMobile

## 3. CI/CD Pipeline Requirements

*   **Platform:** The primary CI/CD platform is GitHub Actions.
*   **Platform Agnostic Scripts:** To ensure portability, the core build logic will be encapsulated in shell scripts located in the `.ci/` directory. The GitHub Actions workflow will primarily be a caller for these scripts.
*   **Directory Structure:** The CI scripts must follow a specific naming convention and directory structure:
    *   `.ci/<platform>/<step_name>.sh`
    *   Example for iOS: `.ci/ios/setup_environment.sh`, `.ci/ios/build_app.sh`
    *   Example for Android: `.ci/android/setup_environment.sh`, `.ci/android/build_app.sh`
*   **Automation:** The pipeline should automate the build process for both Tauri and RhoMobile wrappers for both iOS and Android platforms.

## 4. Developer Environment Requirements

*   **Local Builds:** The build process must be executable on a developer's local machine.
*   **Cross-Platform Support:** The scripts should be written to be as OS-agnostic as possible (supporting Linux, macOS, and Windows).
*   **Platform Limitations:** It is understood that building the iOS application requires a macOS environment. The scripts should account for this.