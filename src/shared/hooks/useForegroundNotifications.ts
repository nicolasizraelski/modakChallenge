import { useEffect } from 'react';
import { useToast } from './useToast';
import { getApp } from '@react-native-firebase/app';
import { getMessaging } from '@react-native-firebase/messaging';

export const useForegroundNotifications = () => {
  const { showSuccessToast } = useToast();
  useEffect(() => {
    const app = getApp();
    const messagingInstance = getMessaging(app);

    const unsubscribe = messagingInstance.onMessage(async (remoteMessage) => {
      showSuccessToast(
        remoteMessage.notification?.title ?? 'Nueva notificación',
        remoteMessage.notification?.body ?? ''
      );
    });

    return unsubscribe;
  }, [showSuccessToast]);
};
