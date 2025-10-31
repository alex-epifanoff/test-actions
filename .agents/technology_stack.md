# Technology Stack

This document outlines the selected technology stack for the project.

## 1. Application Framework

*   **Framework:** **React**
*   **Reasoning:** A simple React application will be used as a stub to test the CI/CD pipeline.

## 2. Mobile App Frameworks

*   **Frameworks:**
    *   **Tauri:** A framework for building tiny, blazingly fast binaries for all major desktop platforms. We will be using its mobile support.
    *   **RhoMobile:** An open-source framework for creating cross-platform, native mobile applications.
*   **Reasoning:** The project requires the use of both Tauri and RhoMobile to package the React application for mobile platforms.

## 3. CI/CD Pipeline

*   **Platform:** **GitHub Actions**
*   **Reasoning:** GitHub Actions is a powerful and flexible CI/CD platform that is tightly integrated with GitHub.
*   **Scripting:** **Shell Scripts**
*   **Reasoning:** To ensure platform agnosticism, the core build logic will be written in shell scripts.