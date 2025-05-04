import React from 'react';
import { Text, View } from 'react-native';
import { makeStyles } from './styles';

interface PriceDisplayProps {
  price: number;
  discountPercentage: number;
  size: 'small' | 'large';
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({ price, discountPercentage, size }) => {
  const styles = makeStyles(size);
  const discountedPrice = Number((price * (1 - discountPercentage / 100)).toFixed(2));

  if (discountPercentage === 0) {
    return (
      <View>
        <Text style={styles.price}>$ {price}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.oldPrice}>$ {price}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>$ {discountedPrice}</Text>
        <Text style={styles.discount}>{Math.round(discountPercentage)}% OFF</Text>
      </View>
    </View>
  );
};
