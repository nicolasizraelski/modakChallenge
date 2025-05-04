import { StyleSheet } from 'react-native';
import { customColors } from '../../../shared/styles/customColors';

export const makeStyles = () =>
  StyleSheet.create({
    container: {
      padding: 16,
      flex: 1,
      backgroundColor: customColors.productCardBackground,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: customColors.productCardBorder,
      gap: 5,
      maxWidth: '48%',
      justifyContent: 'space-between',
    },
    imageContainer: {
      alignSelf: 'center',
      backgroundColor: customColors.productImageBackground,
      borderRadius: 4,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      height: 90,
      marginBottom: 8,
    },
    image: {
      height: 80,
      width: 80,
    },
    price: {
      marginTop: 4,
      fontSize: 16,
      fontWeight: '600',
    },
    title: {
      fontSize: 14,
    },
    priceContainer: {
      gap: 6,
    },
  });
