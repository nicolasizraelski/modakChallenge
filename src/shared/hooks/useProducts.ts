import { useCallback, useEffect, useState } from 'react';
import { IProduct } from '../../domain/entities/IProduct';
import { fetchProductsUseCase } from '../../domain/usecases/fetchProducts';
import { fetchProductsByCategoryUseCase } from '../../domain/usecases/fetchProductsByCategory';
import { ICategory } from '../../domain/entities/ICategory';
import { productRepository } from '../../data/repositories/productRepository';
import { Order, SortBy } from '../../domain/entities/IQueryParams';
import { useToast } from './useToast';

const PRODUCTS_PER_PAGE = 10;

export const useProducts = (sortBy: SortBy, order: Order, category?: ICategory) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [endReached, setEndReached] = useState(false);
  const { showErrorToast } = useToast();

  const loadProducts = useCallback(async () => {
    if (!loading && !endReached) {
      setLoading(true);
      const query = {
        sortBy,
        order,
        skip: page * PRODUCTS_PER_PAGE,
        limit: PRODUCTS_PER_PAGE,
      };

      const newProducts = category
        ? await fetchProductsByCategoryUseCase(productRepository, category.id, query).catch(() => {
            showErrorToast('❌ Error loading products', 'Please try again later');
            return [];
          })
        : await fetchProductsUseCase(productRepository, query).catch(() => {
            showErrorToast('❌ Error loading products', 'Please try again later');
            return [];
          });

      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setEndReached(newProducts.length < PRODUCTS_PER_PAGE);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
    }
  }, [category, sortBy, order, page, loading, endReached, showErrorToast]);

  const resetSearch = useCallback(() => {
    setProducts([]);
    setPage(0);
    setEndReached(false);
  }, []);

  useEffect(() => {
    resetSearch();
  }, [category, sortBy, order, resetSearch]);

  return {
    products,
    loadProducts,
    loading,
  };
};
