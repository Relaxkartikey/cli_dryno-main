import { Container, Grid, MediaQuery, rem } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import { getAllProducts } from '@/api/products/getAllProducts';
import CategoryHeader from '@/components/CategoryHeader';
import FilterAccordion from '@/components/FilterAccordion';
import ProductsFilter from '@/components/ProductsFilter';
import ProductsGrid from '@/components/ProductsGrid';
import { useFilter } from '@/hooks/useFilter';
import { Product } from '@/types';
import { filterProducts } from '@/utils/filterProducts';
import { sortProducts } from '@/utils/sortProducts';

type Props = {
  products: Product[];
  recommendedProducts: Product[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const response = await getAllProducts();
  return {
    props: {
      products: response.data,
      recommendedProducts: response.data.slice(0, 4),
    },
  };
};

const Shop = ({
  products,
  recommendedProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [sortBy, setSortBy] = useState<string | null>('default');
  const [debouncedSortBy] = useDebouncedValue(sortBy, 300);
  const { filter, debouncedFilter, setFilter, resetFilter } = useFilter();

  const filteredProducts = filterProducts(products, debouncedFilter);
  const sortedProducts = sortProducts(filteredProducts, debouncedSortBy);

  return (
    <>
      <Head>
        <title>Shop | Dryno</title>
      </Head>
      <MediaQuery
        largerThan={768}
        styles={{ paddingLeft: rem(32), paddingRight: rem(32) }}
      >
        <Container size={1400} px={16} pb={30}>
          <CategoryHeader
            category="Shop"
            sortedProducts={sortedProducts}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <Grid m={0} gutterXs={32} columns={24} align="flex-start">
            <Grid.Col
              px={0}
              pt={10}
              mb={12}
              bg="white"
              span={24}
              xs={12}
              sm={9}
              md={8}
              lg={7}
              sx={{
                position: 'sticky',
                top: '180px',
                zIndex: 12,
                '@media (max-width: 575px)': {
                  top: '70px',
                },
              }}
            >
              <FilterAccordion
                sortedProducts={sortedProducts}
                resetFilter={resetFilter}
              >
                <ProductsFilter
                  filter={filter}
                  setFilter={setFilter}
                  resetFilter={resetFilter}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  height={228}
                  category="shop"
                  id={1}
                />
              </FilterAccordion>
              <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
                <div>
                  <ProductsFilter
                    filter={filter}
                    setFilter={setFilter}
                    resetFilter={resetFilter}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    height="100%"
                    category="shop"
                    id={2}
                  />
                </div>
              </MediaQuery>
            </Grid.Col>
            <Grid.Col p={0} span={24} xs={12} sm={15} md={16} lg={17}>
              <ProductsGrid
                products={sortedProducts}
                recommendedProducts={recommendedProducts}
              />
            </Grid.Col>
          </Grid>
        </Container>
      </MediaQuery>
    </>
  );
};

export default Shop;