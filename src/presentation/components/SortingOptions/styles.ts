import { StyleSheet } from 'react-native';
import { customColors } from '../../../shared/styles/customColors';

export const makeStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    sortButton: {
      backgroundColor: 'white',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: customColors.productCardBorder,
    },
    selectedSortButton: {
      backgroundColor: customColors.primary,
      borderColor: customColors.primary,
      color: customColors.productCardBackground,
    },
    sortButtonText: {
      fontSize: 12,
    },
    selectedSortButtonText: {
      color: customColors.productCardBackground,
    },
    orderButton: {
      padding: 5,
    },
    orderByText: {
      fontSize: 12,
    },
  });
