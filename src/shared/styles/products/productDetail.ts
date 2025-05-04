import { StyleSheet } from 'react-native';
import { customColors } from '../customColors';

export const makeStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: customColors.productCardBackground,
    },
    image: {
      width: '100%',
      height: 300,
      marginBottom: 10,
    },
    imageContainer: {
      backgroundColor: customColors.productImageBackground,
      borderRadius: 4,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      height: 300,
      marginBottom: 10,
      marginTop: 20,
    },
    descriptionContainer: {
      margin: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: '500',
      marginHorizontal: 16,
      marginTop: 20,
      marginBottom: 4,
    },
    brand: {
      fontSize: 14,
      fontWeight: '500',
      opacity: 0.5,
    },
    description: {
      fontSize: 12,
      opacity: 0.7,
      marginBottom: 10,
    },
    priceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
    },
    stock: {
      fontSize: 12,
      opacity: 0.8,
    },
    brandContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
    },
  });
