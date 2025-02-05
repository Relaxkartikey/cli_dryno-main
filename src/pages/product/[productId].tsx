import type { Product } from '@/types/product';
import { Container, MediaQuery, rem, SimpleGrid, Title, Grid, Stack } from '@mantine/core';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { getAllProducts } from '@/api/products/getAllProducts';
import { getProductById } from '@/api/products/getProductById';
import ProductGallery from '@/components/ProductGallery';
import ProductDetails from '@/components/ProductDetails';
import ProductRecommendations from '@/components/ProductRecommendations';

interface Params extends ParsedUrlQuery {
  productId: string;
}

type ProductPageProps = {
  product: Product | null;
  recommendedProducts: Product[] | null;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const response = await getAllProducts();

  return {
    paths: response.data.map((product) => {
      return {
        params: {
          productId: product.id.toString(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProductPageProps, Params> = async ({
  params,
}) => {
  if (params?.productId) {
    const response = await getProductById(params.productId);

    const recommendedProducts = await Promise.all(
      response.data.attributes.recommended.map(async (id) => {
        const resp = await getProductById(id);
        return resp.data;
      })
    );

    return {
      props: {
        product: response.data,
        recommendedProducts,
        key: response.data.id,
      },
    };
  }

  return {
    props: {
      product: null,
      recommendedProducts: null,
    },
  };
};

const Product = ({
  product,
  recommendedProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      {product && (
        <Head>
          <title>{`${product.attributes.title} | Dryno`}</title>
          <meta 
            name="description" 
            content={`Shop ${product.attributes.title} at Dryno. Premium quality clothing and accessories.`} 
          />
        </Head>
      )}
      <MediaQuery
        largerThan={768}
        styles={{ paddingLeft: rem(32), paddingRight: rem(32) }}
      >
        <Container size={1400} px={16} py={50}>
          {product && (
            <Grid gutter={50}>
              {/* Product Gallery */}
              <Grid.Col span={12} md={7}>
                <ProductGallery product={product} />
              </Grid.Col>

              {/* Product Details */}
              <Grid.Col span={12} md={5}>
                <Stack spacing="xl">
                  <ProductDetails product={product} />
                </Stack>
              </Grid.Col>
            </Grid>
          )}

          {/* Recommended Products */}
          {recommendedProducts && recommendedProducts.length > 0 && (
            <ProductRecommendations products={recommendedProducts} />
          )}
        </Container>
      </MediaQuery>
    </>
  );
};

export default Product;
