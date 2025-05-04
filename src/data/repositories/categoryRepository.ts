import { ICategoryRepository } from '../../domain/repositories/ICategoryRepository';
import { productApi } from '../datasources/productApi';

export const categoryRepository: ICategoryRepository = {
  getCategories: productApi.getCategories,
};
