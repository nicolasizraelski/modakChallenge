import { ICategory } from '../entities/ICategory';

export interface ICategoryRepository {
  getCategories: () => Promise<ICategory[]>;
}
