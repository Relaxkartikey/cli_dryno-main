import { products } from '@/data/mockData';
import { Product, StrapiResponse } from '@/types';

export const getProductsByCategory = async (category: string) => {
  const categoryProducts = products.filter(
    p => p.attributes.category.data.attributes.title === category
  );
  
  const response: StrapiResponse<Product[]> = {
    data: categoryProducts,
    meta: {
      page: 1,
      pageCount: 1,
      pageSize: categoryProducts.length,
      total: categoryProducts.length
    }
  };
  return response;
};
