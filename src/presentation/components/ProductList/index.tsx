import { ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native';
import { ProductCard } from '../ProductCard';
import { makeStyles } from './styles';
import { IProduct } from '../../../domain/entities/IProduct';

interface ProductListProps {
  products: IProduct[];
  loadProducts: () => void;
  loading: boolean;
  onProductClick: (product: IProduct) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ products, loadProducts, loading, onProductClick }) => {
  const styles = makeStyles();
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatList}
      columnWrapperStyle={styles.columnWrapper}
      data={products}
      numColumns={2}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={({ item }) => <ProductCard product={item} onPress={() => onProductClick(item)} />}
      onEndReached={loadProducts}
      onEndReachedThreshold={0.3}
      ListFooterComponent={loading ? <ActivityIndicator size="small" /> : null}
    />
  );
};
