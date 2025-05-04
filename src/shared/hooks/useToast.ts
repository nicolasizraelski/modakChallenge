import { useCallback } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

const NOTCH_MARGIN = 6;

export const useToast = () => {
  const insets = useSafeAreaInsets();

  const showErrorToast = useCallback(
    (title: string, message?: string) => {
      Toast.show({
        type: 'error',
        text1: title,
        text2: message,
        topOffset: insets.top + NOTCH_MARGIN,
      });
    },
    [insets.top]
  );

  const showSuccessToast = useCallback(
    (title: string, message?: string) => {
      Toast.show({
        type: 'success',
        text1: title,
        text2: message,
        topOffset: insets.top + NOTCH_MARGIN,
      });
    },
    [insets.top]
  );

  return { showErrorToast, showSuccessToast };
};
