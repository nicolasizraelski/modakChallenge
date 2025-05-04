import { IProduct } from '../entities/IProduct';

export interface IProductRepository {
  getProducts: (params: Record<string, any>) => Promise<IProduct[]>;
  getProductsByCategory: (category: string, params: Record<string, any>) => Promise<IProduct[]>;
}
