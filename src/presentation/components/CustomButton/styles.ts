import { StyleSheet } from 'react-native';
import { customColors } from '../../../shared/styles/customColors';

export const makeStyles = () =>
  StyleSheet.create({
    button: {
      backgroundColor: customColors.primary,
      padding: 12,
      borderRadius: 8,
      marginVertical: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: customColors.productCardBackground,
      fontSize: 14,
      fontWeight: '700',
    },
    secondaryButton: {
      backgroundColor: customColors.secondaryButtonBackground,
      borderWidth: 0,
    },
    secondaryButtonText: {
      color: customColors.primary,
      fontWeight: '600',
    },
  });
