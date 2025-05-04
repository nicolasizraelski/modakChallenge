import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductListScreen } from '../screens/products/ProductListScreen';
import ProductDetailScreen from '../screens/products/ProductDetailScreen';
import { IProduct } from '../../domain/entities/IProduct';
import { PRODUCT_DETAIL, PRODUCT_LIST } from '../../shared/constants/routeNames';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';

export type RootStackParamList = {
  ProductList: { categoryId?: string };
  ProductDetail: { product: IProduct };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['modakchallenge://'],
  config: {
    screens: {
      ProductList: {
        path: 'productList/:categoryId',
      },
    },
  },
};

export const AppNavigator = () => (
  <NavigationContainer linking={linking}>
    <Stack.Navigator initialRouteName={PRODUCT_LIST}>
      <Stack.Screen name={PRODUCT_LIST} component={ProductListScreen} options={{ title: 'Products' }} />
      <Stack.Screen name={PRODUCT_DETAIL} component={ProductDetailScreen} options={{ title: 'Product Detail' }} />
    </Stack.Navigator>
  </NavigationContainer>
);
