import { useWishlist, useWishlistStore } from '@/stores/wishlist';
import { Product } from '@/types';
import { Anchor, Box, Text, UnstyledButton, useMantineTheme } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import styles from './ProductCard.module.css';

type ProductCardProps = {
  product: Product;
  withHeart?: boolean;
  sizes: string;
};

const ProductCard = ({
  product,
  withHeart = true,
  sizes,
}: ProductCardProps) => {
  const theme = useMantineTheme();
  const { wishlist } = useWishlist();
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const [clicked, setClicked] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<'image1' | 'image2'>('image1');

  useEffect(() => {
    const isAddedToWishlist = wishlist.some((item) => item.id === product.id);
    if (isAddedToWishlist) {
      setClicked(true);
    }
  }, [wishlist, product.id]);

  const handleClickWishlist = () => {
    toggleWishlist(product);
    setClicked((c) => !c);
  };

  return (
    <Box className={styles.container}>
      <figure className={styles.figure}>
        <Anchor
          component={Link}
          href={`/product/${product.id}`}
          className={styles.link}
          onMouseEnter={() => setHoveredImage('image2')}
          onMouseLeave={() => setHoveredImage('image1')}
        >
          <div className={styles.wrapper}>
            <Image
              src={product.attributes[hoveredImage].data.attributes.url}
              alt={product.attributes[hoveredImage].data.attributes.alternativeText || product.attributes.title}
              fill
              style={{ objectFit: 'cover' }}
              sizes={sizes}
              priority
              className={styles.primary}
            />
          </div>
        </Anchor>
        {withHeart && (
          <UnstyledButton
            className={styles['heart-button']}
            onClick={handleClickWishlist}
            aria-label="Add to wishlist"
          >
            <FiHeart
              color={theme.colors.cyan[7]}
              className={`${styles.heart} ${clicked ? styles.active : ''}`}
            />
          </UnstyledButton>
        )}
      </figure>
      <Box className={styles.details}>
        <Anchor
          component={Link}
          href={`/product/${product.id}`}
          color="dark"
          className={styles.link}
        >
          <Text size="sm" weight={500} lineClamp={1}>
            {product.attributes.title}
          </Text>
          <Text size="sm" color="dimmed" mb={4}>
            {product.attributes.brand.data.attributes.title}
          </Text>
          <Text size="sm" weight={600}>
            ${product.attributes.price.toFixed(2)}
          </Text>
          {product.attributes.isNew && (
            <Text size="xs" weight={600} color="cyan.9" mt={4}>
              NEW
            </Text>
          )}
        </Anchor>
      </Box>
    </Box>
  );
};

export default ProductCard;
