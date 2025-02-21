import api from '../http';
import { ProductType } from '../../types/products';
import { API_ROUTES } from '../../config/api';

export const ProductService = {
  getPosts: async (): Promise<ProductType[]> => {
    const response = await api.get(API_ROUTES.PRODUCTS.LASTPRODUCTS);
    return response.data;
  },
}
