import { StyleSheet } from 'react-native';

export const makeStyles = (size: 'small' | 'large') =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ratingText: {
      marginRight: size === 'small' ? 2 : 4,
      opacity: 0.7,
      fontSize: size === 'small' ? 12 : 16,
    },
    starsContainer: {
      flexDirection: 'row',
      marginRight: size === 'small' ? 2 : 4,
      gap: size === 'small' ? 1 : 3,
    },
  });
