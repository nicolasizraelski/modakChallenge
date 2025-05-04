import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { customColors } from '../../../shared/styles/customColors';
import { makeStyles } from './styles';

type RatingStarsProps = {
  rating: number;
  amount?: number;
  size: 'small' | 'large';
};

export const RatingStars: React.FC<RatingStarsProps> = ({ rating, amount, size = 'small' }) => {
  const roundedStars = Math.round(rating);
  const styles = makeStyles(size);

  return (
    <View style={styles.container}>
      <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
      <View style={styles.starsContainer}>
        {[...Array(5)].map((_, index) => (
          <Icon
            key={index}
            name={index < roundedStars ? 'star' : 'star-outline'}
            size={size === 'small' ? 12 : 20}
            color={customColors.primary}
          />
        ))}
      </View>
      {amount && <Text style={styles.ratingText}>({amount})</Text>}
    </View>
  );
};
