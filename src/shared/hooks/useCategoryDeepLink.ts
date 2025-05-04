import { useEffect } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { ICategory } from '../../domain/entities/ICategory';
import { RootStackParamList } from '../../presentation/navigation/AppNavigator';

export const useHandleCategoryDeepLink = (categories: ICategory[], setCategory: (cat: ICategory) => void) => {
  const route = useRoute<RouteProp<RootStackParamList, 'ProductList'>>();

  useEffect(() => {
    if (route.params?.categoryId && categories.length > 0) {
      const deepLinkCategory = categories.find((cat) => cat.id === route.params?.categoryId);
      if (deepLinkCategory) {
        setCategory(deepLinkCategory);
      }
    }
  }, [route.params?.categoryId, categories, setCategory]);
};
