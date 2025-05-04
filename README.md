# Modak Challenge – React Native Product Catalog App

> 🚫 This app does not use Expo. Built with React Native CLI.

## 🚀 Tech Stack

- React Native (CLI, not Expo)
- TypeScript
- React Navigation
- Axios
- Firebase (FCM)
- React Native Gesture Handler & Reanimated
- DummyJSON API

## ✅ Features

- Product listing with infinite scroll
- Filtering by category
- Sorting by price or rating
- Deep linking support (e.g., open to specific category)
- Firebase Cloud Messaging (Android only)
- Clean Architecture

## 🧠 Architecture

This app is structured using Clean Architecture principles:

- `domain`: Contains business entities and interfaces (e.g., `IProduct`, `IQueryParams`)
- `data`: Handles API logic and data transformation
- `presentation`: Screens, components, navigation, and UI logic
- `shared`: Reusable hooks, constants, styles, and utilities

## Bonus Features

- ✅ Deep linking with category pre-selection
- ✅ Firebase Push Notifications
- ❌ Native module for reminders (not implemented)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (>=18)
- npm or yarn
- Xcode (for iOS development)
- Android Studio (for Android development)
- CocoaPods (for iOS dependencies)
- Ruby (for CocoaPods)
- Watchman

## Environment Setup

1. Clone the repository:

```sh
git clone https://github.com/nicolasizraelski/modakChallenge.git
cd ModakChallenge
```

2. Install dependencies:

```sh
# Using npm
npm install

# OR using Yarn
yarn install
```

3. Install iOS dependencies:

```sh
cd ios
bundle install
bundle exec pod install
cd ..
```

## Configuration Files

The following files are required but not included in the repository (they are in .gitignore). You will receive these files via email:

- `ios/GoogleService-Info.plist` - Firebase configuration for iOS
- `android/app/google-services.json` - Firebase configuration for Android
- `.env` - Environment variables

Place these files in their respective locations before running the app.

## Running the App

### Start Metro Bundler

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

### Run on iOS

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

### Run on Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

## Deep Linking Testing

The app supports deep linking with the following URL scheme: `modakchallenge://`

### Testing Deep Links on iOS

```sh
xcrun simctl openurl booted "modakchallenge://productList/fragrances"
```

### Testing Deep Links on Android

```sh
adb shell am start -W -a android.intent.action.VIEW -d "modakchallenge://productList/fragrances" com.modakchallenge
```

## Push Notifications

The app supports push notifications through Firebase Cloud Messaging (FCM). Please note:

- Push notifications are currently only working on Android
- iOS push notifications require an Apple Developer account and additional configuration

### Testing Push Notifications

When a product is purchased, the app will capture the notification from the backend and display a toast message. To test push notifications from outside the app, you can use the following curl command:

```sh
curl --location {PURCHASE_BACKEND_URL} \
--header 'Content-Type: application/json' \
--data '{
    "productTitle": "Lemon",
    "fcmToken": {yourFCMToken}
}'
```

To get your FCM token:

1. Run the app
2. Open the developer menu (shake device or press Cmd/Ctrl + M)
3. Look for the FCM token in the logs

## Troubleshooting

### iOS Issues

- If you encounter CocoaPods issues, try:
  ```sh
  cd ios
  pod deintegrate
  pod install
  cd ..
  ```

### Android Issues

- Ensure you have the correct Android SDK installed
- Make sure your emulator is running before starting the app
- If you encounter build issues, try cleaning the project:
  ```sh
  cd android
  ./gradlew clean
  cd ..
  ```

## Dependencies

Key dependencies used in this project:

- React Native
- TypeScript
- Firebase
- React Navigation
- React Native Vector Icons
- Axios
- React Native Reanimated
- React Native Gesture Handler
