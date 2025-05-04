import { useEffect, useState } from 'react';
import { fetchCategoriesUseCase } from '../../domain/usecases/fetchCategories';
import { ICategory } from '../../domain/entities/ICategory';
import { useToast } from './useToast';
import { categoryRepository } from '../../data/repositories/categoryRepository';

export const useCategories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(false);
  const { showErrorToast } = useToast();

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const cats = await fetchCategoriesUseCase(categoryRepository).catch(() => {
        showErrorToast('❌ Error loading categories', 'Please try again later');
        return [];
      });
      setCategories(cats);
      setLoading(false);
    };
    load();
  }, [showErrorToast]);

  return { categories, loading };
};
