import React from 'react';
import Toast from 'react-native-toast-message';
import { AppNavigator } from './presentation/navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <AppNavigator />
      <Toast />
    </SafeAreaProvider>
  );
}

export default App;
