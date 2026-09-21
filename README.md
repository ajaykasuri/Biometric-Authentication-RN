# Biometric Authentication App 🔐

A secure mobile application built with **React Native** and **Expo** that implements native biometric authentication (Face ID and Fingerprint scanning).

---

## 🚀 Features

- **Cross-Platform Biometrics:** Supports Face ID / Touch ID on iOS and Fingerprint / Face Unlock on Android devices.
- **Hardware Fallback:** Automatically switches to the device PIN, passcode, or pattern if biometric scans fail or are unavailable.
- **Privacy Framework:** Pre-configured with iOS permission alerts (`NSFaceIDUsageDescription`) required for production deployment.

---

## 🛠️ Prerequisites

Before running this project, ensure you have the following installed:
- [Node.js (LTS version)](https://nodejs.org)
- Expo Go app on your physical device (for basic UI testing) OR Android Studio / Xcode (for native biometric testing)

---

## 💻 Getting Started

### 1. Clone & Install Dependencies
Navigate into your project folder and install the required modules:

```bash
npm install
# then install the verified biometric library:
npx expo install expo-local-authentication
```

### 2. Configure Native Details
Ensure your `app.json` contains your matching `bundleIdentifier` and the required iOS privacy string:
```json
"ios": {
  "bundleIdentifier": "com.domain.auth",
  "infoPlist": {
    "NSFaceIDUsageDescription": "This app uses Face ID to securely log you into your account."
  }
}
```

### 3. Start the Local Server
Run the Metro Bundler command:
```bash
npx expo start
```

> ⚠️ **Important Testing Note:** Biometric hardware modules (`expo-local-authentication`) will not work properly within the standard Expo Go sandbox app wrapper. You must run a **Local Development Build** to test the Face ID prompt:
> - For iOS Simulator/Device: `npx expo run:ios`
> - For Android Emulator/Device: `npx expo run:android`

---

## 📂 Project Structure

- `app.json` - Configuration and privacy string mapping.
- `onAuthenticate.ts` - Helper utility managing the device hardware checking logic and native token triggers.
