import React from 'react';
import Toast from 'react-native-toast-message';
import { AppNavigator } from './presentation/navigation/AppNavigator';

function App() {
  return (
    <>
      <AppNavigator />
      <Toast />
    </>
  );
}

export default App;
