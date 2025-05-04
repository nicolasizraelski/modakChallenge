import { getApp } from '@react-native-firebase/app';
import { AuthorizationStatus, getMessaging } from '@react-native-firebase/messaging';
import { useEffect, useState } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';

export const useFCMToken = () => {
  const [fcmToken, setFcmToken] = useState<string | null>(null);

  useEffect(() => {
    const getToken = async () => {
      const app = getApp();
      const messagingInstance = getMessaging(app);

      let enabled;

      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
        enabled = granted === PermissionsAndroid.RESULTS.GRANTED;
      } else {
        const authStatus = await messagingInstance.requestPermission();
        enabled = authStatus === AuthorizationStatus.AUTHORIZED || authStatus === AuthorizationStatus.PROVISIONAL;
      }

      if (enabled) {
        const token = await messagingInstance.getToken();
        setFcmToken(token);
      } else {
        console.error('Notification permission denied');
      }
    };

    getToken();
  }, []);

  console.log('fcmToken', fcmToken);
  return fcmToken;
};
