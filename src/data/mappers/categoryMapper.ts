import { ICategory } from '../../domain/entities/ICategory';

export const mapToCategory = (apiCategory: any): ICategory => ({
  id: apiCategory.slug,
  name: apiCategory.name,
});
