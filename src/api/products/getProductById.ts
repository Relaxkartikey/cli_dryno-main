import { products } from '@/data/mockData';
import { Product, StrapiResponse } from '@/types';

export const getProductById = async (id: string) => {
  const product = products.find(p => p.id === parseInt(id));
  if (!product) {
    throw new Error('Product not found');
  }
  
  const response: StrapiResponse<Product> = {
    data: product,
    meta: {
      page: 1,
      pageCount: 1,
      pageSize: 1,
      total: 1
    }
  };
  return response;
};
