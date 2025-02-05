import { products } from '@/data/mockData';
import { Product, StrapiResponse } from '@/types';

export const getAllProducts = async () => {
  const response: StrapiResponse<Product[]> = {
    data: products,
    meta: {
      page: 1,
      pageCount: 1,
      pageSize: products.length,
      total: products.length
    }
  };
  return response;
};
