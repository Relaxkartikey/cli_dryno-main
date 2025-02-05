import type { Brand, Category, Image, Type } from './index';

export type Product = {
  id: number;
  attributes: {
    title: string;
    brand: {
      data: Brand;
    };
    price: number;
    isNew: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    feature: 'featured' | 'trending' | 'normal';
    image1: Image;
    image2: Image;
    category: {
      data: Category;
    };
    type: {
      data: Type;
    };
    sizes: string[];
    recommended: string[];
  };
}; 