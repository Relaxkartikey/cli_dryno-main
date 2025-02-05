import { categories } from '@/data/mockData';
import { Category, StrapiResponse } from '@/types';

export const getCategories = async () => {
  const response: StrapiResponse<Category[]> = {
    data: categories,
    meta: {
      page: 1,
      pageCount: 1,
      pageSize: categories.length,
      total: categories.length
    }
  };
  return response;
};
