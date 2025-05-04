# Modak Challenge - React Native App

This is a React Native application built with TypeScript, featuring Firebase integration and deep linking capabilities.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (>=18)
- npm or yarn
- Xcode (for iOS development)
- Android Studio (for Android development)
- CocoaPods (for iOS dependencies)
- Ruby (for CocoaPods)
- Watchman (recommended for better performance)

## Environment Setup

1. Clone the repository:

```sh
git clone [repository-url]
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

## Available Scripts

- `npm start` or `yarn start` - Starts the Metro bundler
- `npm run ios` or `yarn ios` - Runs the app on iOS simulator
- `npm run android` or `yarn android` - Runs the app on Android emulator
- `npm test` or `yarn test` - Runs the test suite
- `npm run lint` or `yarn lint` - Runs ESLint

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

## Project Structure

- `src/` - Main source code directory
- `ios/` - iOS native code
- `android/` - Android native code
- `__tests__/` - Test files
- `.env` - Environment variables (not included in repo)

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

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

[Add your license information here]
