import { ICategory } from '../entities/ICategory';
import { IProduct } from '../entities/IProduct';
import { IQueryParams } from '../entities/IQueryParams';

export interface IProductApi {
  getProducts: (params: IQueryParams) => Promise<IProduct[]>;
  getProductsByCategory: (category: string, params: IQueryParams) => Promise<IProduct[]>;
  getCategories: () => Promise<ICategory[]>;
}
