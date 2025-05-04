import React from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import { IProduct } from '../../../domain/entities/IProduct';
import { makeStyles } from './styles';
import { RatingStars } from '../RatingStars';
import { PriceDisplay } from '../PriceDisplay';

interface ProductCardProps {
  product: IProduct;
  onPress: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  const styles = makeStyles();
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.thumbnail }} style={styles.image} />
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {product.title}
        </Text>
      </View>

      <View style={styles.priceContainer}>
        <RatingStars rating={product.rating} size="small" amount={product.reviewAmount} />
        <PriceDisplay price={product.price} discountPercentage={product.discountPercentage} size="small" />
      </View>
    </TouchableOpacity>
  );
};
