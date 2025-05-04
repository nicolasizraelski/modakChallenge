/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

import { initializeApp } from '@react-native-firebase/app';
import { firebaseConfig } from './src/shared/config/firebaseConfig';

initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);
