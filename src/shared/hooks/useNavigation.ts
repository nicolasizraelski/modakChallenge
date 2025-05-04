import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../presentation/navigation/AppNavigator';

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<RootStackParamList>>();
};
