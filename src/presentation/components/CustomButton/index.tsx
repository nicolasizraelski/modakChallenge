import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { makeStyles } from './styles';

interface CustomButtonProps {
  text: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

export const CustomButton: React.FC<CustomButtonProps> = ({ text, onPress, variant = 'primary' }) => {
  const styles = makeStyles();
  return (
    <TouchableOpacity style={[styles.button, variant === 'secondary' && styles.secondaryButton]} onPress={onPress}>
      <Text style={[styles.buttonText, variant === 'secondary' && styles.secondaryButtonText]}>{text}</Text>
    </TouchableOpacity>
  );
};
