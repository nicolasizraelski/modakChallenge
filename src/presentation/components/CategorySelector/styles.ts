import { StyleSheet } from 'react-native';
import { customColors } from '../../../shared/styles/customColors';

export const makeStyles = () =>
  StyleSheet.create({
    button: {
      backgroundColor: customColors.primary,
      padding: 12,
      borderRadius: 8,
      marginVertical: 8,
      maxWidth: 120,
    },
    buttonText: {
      color: customColors.productCardBackground,
      fontSize: 12,
      fontWeight: '600',
    },
    actionSheetContainer: {
      padding: 16,
      height: '50%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    actionSheetButton: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      margin: 4,
      borderWidth: 1,
      borderColor: customColors.productCardBorder,
    },
    selectedActionSheetButton: {
      backgroundColor: customColors.primary,
      borderColor: customColors.primary,
    },
    selectedActionSheetButtonText: {
      color: customColors.productCardBackground,
      // fontWeight: '600',
    },
    actionSheetButtonText: {
      fontSize: 12,
    },
    actionSheetTitle: {
      fontSize: 20,
      fontWeight: '600',
      margin: 16,
    },
  });
