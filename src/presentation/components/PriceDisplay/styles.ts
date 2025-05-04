import { StyleSheet } from 'react-native';
import { customColors } from '../../../shared/styles/customColors';

export const makeStyles = (size: 'small' | 'large') =>
  StyleSheet.create({
    oldPrice: {
      fontSize: size === 'small' ? 10 : 14,
      fontWeight: '400',
      textDecorationLine: 'line-through',
      color: customColors.oldPrice,
    },
    price: {
      fontSize: size === 'small' ? 18 : 26,
      fontWeight: '600',
    },
    discount: {
      fontSize: size === 'small' ? 12 : 16,
      color: customColors.discount,
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: size === 'small' ? 4 : 8,
    },
  });
