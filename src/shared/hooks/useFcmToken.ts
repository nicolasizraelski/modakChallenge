import { useEffect, useState } from 'react';

export const useFCMToken = () => {
  const [fcmToken, setFcmToken] = useState<string | null>('abc123');

  useEffect(() => {
    const getToken = async () => {
      // TODO: Implement FCM token retrieval for Firebase Cloud Messaging
      // const app = getApp();
      // const messagingInstance = getMessaging(app);
      // const authStatus = await messagingInstance.requestPermission();
      // const enabled = authStatus === AuthorizationStatus.AUTHORIZED || authStatus === AuthorizationStatus.PROVISIONAL;
      // if (enabled) {
      //   const token = await messagingInstance.getToken();
      //   setFcmToken(token);
      // } else {
      //   console.error('Notification permission denied');
      // }
    };

    getToken();
  }, []);

  return fcmToken;
};
