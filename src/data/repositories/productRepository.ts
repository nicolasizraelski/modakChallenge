import { IProductRepository } from '../../domain/repositories/IProductRepository';
import { productApi } from '../datasources/productApi';

export const productRepository: IProductRepository = {
  getProducts: productApi.getProducts,
  getProductsByCategory: productApi.getProductsByCategory,
};
