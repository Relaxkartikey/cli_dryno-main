import { AspectRatio, Box, Group, Stack, UnstyledButton } from '@mantine/core';
import Image from 'next/image';
import { useState } from 'react';
import type { Product } from '@/types';
import styles from './ProductGallery.module.css';

type ProductGalleryProps = {
  product: Product;
};

const ProductGallery = ({ product }: ProductGalleryProps) => {
  const [activeImage, setActiveImage] = useState<'image1' | 'image2'>('image1');
  const images = [
    { key: 'image1', image: product.attributes.image1 },
    { key: 'image2', image: product.attributes.image2 },
  ];

  return (
    <Stack spacing="xs">
      {/* Main Image */}
      <AspectRatio ratio={1} sx={{ position: 'relative' }}>
        <Image
          src={product.attributes[activeImage].data.attributes.url}
          alt={product.attributes.title}
          fill
          priority
          sizes="(min-width: 1200px) 700px, (min-width: 768px) 50vw, 100vw"
          className={styles.mainImage}
        />
      </AspectRatio>

      {/* Thumbnail Gallery */}
      <Group spacing="xs" position="center">
        {images.map(({ key, image }) => (
          <UnstyledButton
            key={key}
            onClick={() => setActiveImage(key as 'image1' | 'image2')}
            className={styles.thumbnailButton}
            aria-label={`View ${key}`}
          >
            <Box
              sx={{
                position: 'relative',
                width: 80,
                height: 80,
                opacity: activeImage === key ? 1 : 0.5,
                transition: 'opacity 200ms ease',
              }}
            >
              <Image
                src={image.data.attributes.url}
                alt={product.attributes.title}
                fill
                sizes="80px"
                className={styles.thumbnail}
              />
            </Box>
          </UnstyledButton>
        ))}
      </Group>
    </Stack>
  );
};

export default ProductGallery; 