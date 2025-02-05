import { products } from '@/data/mockData';
import { Product, StrapiResponse } from '@/types';

export const getFeaturedProducts = async () => {
  const featuredProducts = products.filter(p => p.attributes.feature === 'featured');
  
  const response: StrapiResponse<Product[]> = {
    data: featuredProducts,
    meta: {
      page: 1,
      pageCount: 1,
      pageSize: featuredProducts.length,
      total: featuredProducts.length
    }
  };
  return response;
};
