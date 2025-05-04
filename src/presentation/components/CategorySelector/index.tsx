import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import { ICategory } from '../../../domain/entities/ICategory';
import { makeStyles } from './styles';

interface CategorySelectorProps {
  selectedCategory?: ICategory;
  onSelectCategory: (category?: ICategory) => void;
  categories: ICategory[];
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  selectedCategory,
  onSelectCategory,
  categories,
}) => {
  const styles = makeStyles();
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const handleCategoryPress = (category: ICategory) => {
    onSelectCategory(category);
    actionSheetRef.current?.hide();
  };

  const handleClearCategory = () => {
    onSelectCategory(undefined);
    actionSheetRef.current?.hide();
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => actionSheetRef.current?.show()}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.buttonText}>
          {selectedCategory?.name || 'All Categories'}
        </Text>
      </TouchableOpacity>

      <ActionSheet ref={actionSheetRef}>
        <Text style={styles.actionSheetTitle}>Select Category</Text>
        <View style={styles.actionSheetContainer}>
          <TouchableOpacity
            style={[styles.actionSheetButton, !selectedCategory && styles.selectedActionSheetButton]}
            onPress={handleClearCategory}
          >
            <Text style={[styles.actionSheetButtonText, !selectedCategory && styles.selectedActionSheetButtonText]}>
              All Categories
            </Text>
          </TouchableOpacity>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.actionSheetButton,
                selectedCategory?.id === category.id && styles.selectedActionSheetButton,
              ]}
              onPress={() => handleCategoryPress(category)}
            >
              <Text
                style={[
                  styles.actionSheetButtonText,
                  selectedCategory?.id === category.id && styles.selectedActionSheetButtonText,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ActionSheet>
    </>
  );
};
