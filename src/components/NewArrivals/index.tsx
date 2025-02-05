import React from 'react';
import newArrivals from '../../../public/images/new-arrivals.jpg';
import Image from 'next/image';
import { Button, Group, Text, Container, SimpleGrid, Title } from '@mantine/core';
import Link from 'next/link';
import styles from './NewArrivals.module.css';
import type { Product } from '@/types';
import ProductCard from '@/components/ProductsGrid/ProductCard';

type NewArrivalsProps = {
  products: Product[];
};

const NewArrivals = ({ products }: NewArrivalsProps) => {
  return (
    <Container size={1400} py={50} px={{ base: 16, md: 32 }}>
      <Title order={2} size={24} weight={600} mb={30} align="center">
        New Arrivals
      </Title>

      <SimpleGrid
        cols={2}
        spacing={20}
        breakpoints={[
          { minWidth: 768, cols: 3, spacing: 30 },
          { minWidth: 992, cols: 4, spacing: 40 },
        ]}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            withHeart
            sizes="(min-width: 992px) 25vw, (min-width: 768px) 33vw, 50vw"
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default NewArrivals;
