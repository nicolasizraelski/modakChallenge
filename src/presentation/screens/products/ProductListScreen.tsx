import React, { useState } from 'react';
import { View } from 'react-native';
import { IProduct } from '../../../domain/entities/IProduct';
import { makeStyles } from '../../../shared/styles/products/productList';
import { Order, SortBy } from '../../../domain/entities/IQueryParams';
import { CategorySelector } from '../../components/CategorySelector';
import { ICategory } from '../../../domain/entities/ICategory';
import { ProductList } from '../../components/ProductList';
import { SortingOptions } from '../../components/SortingOptions';
import { PRODUCT_DETAIL } from '../../../shared/constants/routeNames';
import { useAppNavigation } from '../../../shared/hooks/useNavigation';
import { useCategories } from '../../../shared/hooks/useCategories';
import { useProducts } from '../../../shared/hooks/useProducts';
import { useHandleCategoryDeepLink } from '../../../shared/hooks/useCategoryDeepLink';

export const ProductListScreen = () => {
  const styles = makeStyles();
  const navigation = useAppNavigation();

  const [category, setCategory] = useState<ICategory>();
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.PRICE);
  const [order, setOrder] = useState<Order>(Order.ASC);

  const { categories, loading: categoriesLoading } = useCategories();

  useHandleCategoryDeepLink(categories, setCategory);

  const { products, loadProducts, loading } = useProducts(sortBy, order, category);

  const handleProductClick = (product: IProduct) => {
    navigation.navigate(PRODUCT_DETAIL, { product });
  };

  return (
    <View style={styles.container}>
      <View style={styles.filtersWrapper}>
        <CategorySelector selectedCategory={category} onSelectCategory={setCategory} categories={categories} />
        <SortingOptions
          selectedSortBy={sortBy}
          selectedOrder={order}
          setSelectedSortBy={setSortBy}
          setSelectedOrder={setOrder}
        />
      </View>

      <ProductList
        products={products}
        loadProducts={loadProducts}
        loading={loading || categoriesLoading}
        onProductClick={handleProductClick}
      />
    </View>
  );
};
