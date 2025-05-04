import { IProductRepository } from '../repositories/IProductRepository';
import { IProduct } from '../entities/IProduct';
import { IQueryParams } from '../entities/IQueryParams';

export const fetchProductsByCategoryUseCase = async (
  productRepository: IProductRepository,
  category: string,
  params: IQueryParams
): Promise<IProduct[]> => {
  try {
    const products = await productRepository.getProductsByCategory(category, params);
    return Promise.resolve(products);
  } catch (error) {
    return Promise.reject([]);
  }
};
