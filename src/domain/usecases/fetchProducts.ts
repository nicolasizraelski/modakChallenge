import { IProductRepository } from '../repositories/IProductRepository';
import { IProduct } from '../entities/IProduct';
import { IQueryParams } from '../entities/IQueryParams';

export const fetchProductsUseCase = async (
  productRepository: IProductRepository,
  params: IQueryParams
): Promise<IProduct[]> => {
  try {
    const products = await productRepository.getProducts(params);
    return Promise.resolve(products);
  } catch (error) {
    return Promise.reject([]);
  }
};
