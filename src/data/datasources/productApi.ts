import axios from 'axios';
import { IProductApi } from '../../domain/datasources/IProductApi';
import { API_URL } from '../../shared/constants/api';
import { mapToProduct } from '../mappers/productMapper';
import { mapToCategory } from '../mappers/categoryMapper';

export const productApi: IProductApi = {
  getProducts: (params) =>
    axios.get(`${API_URL}/products`, { params }).then((res) => res.data.products.map(mapToProduct)),

  getProductsByCategory: (category, params) =>
    axios
      .get(`${API_URL}/products/category/${category}`, { params })
      .then((res) => res.data.products.map(mapToProduct)),

  getCategories: () => axios.get(`${API_URL}/products/categories`).then((res) => res.data.map(mapToCategory)),
};
