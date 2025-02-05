import { Product, Category, Image, Brand, Type } from '@/types';

const mockImage: Image = {
  data: {
    id: 1,
    attributes: {
      name: "product-image",
      alternativeText: "Product Image",
      caption: null,
      placeholder: "blur",
      width: 800,
      height: 800,
      formats: {
        large: {
          ext: ".jpg",
          url: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
          hash: "sample_hash",
          mime: "image/jpeg",
          name: "large_image",
          path: null,
          size: 100,
          width: 800,
          height: 800,
          provider_metadata: {
            public_id: "sample",
            resource_type: "image"
          }
        },
        small: {
          ext: ".jpg",
          url: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
          hash: "sample_hash",
          mime: "image/jpeg",
          name: "small_image",
          path: null,
          size: 50,
          width: 400,
          height: 400,
          provider_metadata: {
            public_id: "sample",
            resource_type: "image"
          }
        },
        medium: {
          ext: ".jpg",
          url: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
          hash: "sample_hash",
          mime: "image/jpeg",
          name: "medium_image",
          path: null,
          size: 75,
          width: 600,
          height: 600,
          provider_metadata: {
            public_id: "sample",
            resource_type: "image"
          }
        },
        thumbnail: {
          ext: ".jpg",
          url: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
          hash: "sample_hash",
          mime: "image/jpeg",
          name: "thumbnail_image",
          path: null,
          size: 25,
          width: 200,
          height: 200,
          provider_metadata: {
            public_id: "sample",
            resource_type: "image"
          }
        }
      },
      hash: "sample_hash",
      ext: ".jpg",
      mime: "image/jpeg",
      size: 100,
      url: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
      previewUrl: null,
      provider: "cloudinary",
      provider_metadata: {
        public_id: "sample",
        resource_type: "image"
      },
      createdAt: "2024-02-05T00:00:00.000Z",
      updatedAt: "2024-02-05T00:00:00.000Z"
    }
  }
};

const mockBrand: Brand = {
  id: 1,
  attributes: {
    title: "Dryno Brand",
    createdAt: "2024-02-05T00:00:00.000Z",
    updatedAt: "2024-02-05T00:00:00.000Z",
    publishedAt: "2024-02-05T00:00:00.000Z"
  }
};

const mockType: Type = {
  id: 1,
  attributes: {
    title: "Casual",
    createdAt: "2024-02-05T00:00:00.000Z",
    updatedAt: "2024-02-05T00:00:00.000Z",
    publishedAt: "2024-02-05T00:00:00.000Z"
  }
};

export const categories: Category[] = [
  {
    id: 1,
    attributes: {
      title: "T-Shirts",
      createdAt: "2024-02-05T00:00:00.000Z",
      updatedAt: "2024-02-05T00:00:00.000Z",
      publishedAt: "2024-02-05T00:00:00.000Z"
    }
  },
  {
    id: 2,
    attributes: {
      title: "Jeans",
      createdAt: "2024-02-05T00:00:00.000Z",
      updatedAt: "2024-02-05T00:00:00.000Z",
      publishedAt: "2024-02-05T00:00:00.000Z"
    }
  }
];

export const products: Product[] = [
  {
    id: 1,
    attributes: {
      title: "Classic White T-Shirt",
      brand: {
        data: mockBrand
      },
      price: 29.99,
      isNew: true,
      createdAt: "2024-02-05T00:00:00.000Z",
      updatedAt: "2024-02-05T00:00:00.000Z",
      publishedAt: "2024-02-05T00:00:00.000Z",
      feature: "featured",
      image1: mockImage,
      image2: mockImage,
      category: {
        data: categories[0]
      },
      type: {
        data: mockType
      },
      sizes: ["S", "M", "L", "XL"],
      recommended: ["2"]
    }
  },
  {
    id: 2,
    attributes: {
      title: "Blue Denim Jeans",
      brand: {
        data: mockBrand
      },
      price: 79.99,
      isNew: false,
      createdAt: "2024-02-05T00:00:00.000Z",
      updatedAt: "2024-02-05T00:00:00.000Z",
      publishedAt: "2024-02-05T00:00:00.000Z",
      feature: "featured",
      image1: mockImage,
      image2: mockImage,
      category: {
        data: categories[1]
      },
      type: {
        data: mockType
      },
      sizes: ["28", "30", "32", "34"],
      recommended: ["1"]
    }
  }
]; 