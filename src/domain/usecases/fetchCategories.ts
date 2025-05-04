import { ICategory } from '../entities/ICategory';
import { ICategoryRepository } from '../repositories/ICategoryRepository';

export const fetchCategoriesUseCase = async (categoryRepository: ICategoryRepository): Promise<ICategory[]> => {
  try {
    const categories = await categoryRepository.getCategories();
    return Promise.resolve(categories);
  } catch (error) {
    return Promise.reject([]);
  }
};
