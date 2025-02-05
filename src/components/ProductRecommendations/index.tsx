import { Carousel } from '@mantine/carousel';
import { MediaQuery, SimpleGrid, Title } from '@mantine/core';
import type { Product } from '@/types';
import ProductCard from '@/components/ProductsGrid/ProductCard';

type ProductRecommendationsProps = {
  products: Product[];
};

const ProductRecommendations = ({ products }: ProductRecommendationsProps) => {
  return (
    <>
      <Title order={3} size={18} weight={600} mt={50} mb={20}>
        You May Also Like
      </Title>

      {/* Desktop View */}
      <MediaQuery smallerThan={768} styles={{ display: 'none' }}>
        <SimpleGrid
          cols={3}
          spacing={30}
          breakpoints={[
            { minWidth: 900, cols: 3, spacing: 30 },
            { minWidth: 1000, cols: 3, spacing: 40 },
            { minWidth: 1200, cols: 3, spacing: 50 },
          ]}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              withHeart={false}
              sizes="(min-width: 1200px) 400px, 33vw"
            />
          ))}
        </SimpleGrid>
      </MediaQuery>

      {/* Mobile View */}
      <MediaQuery largerThan={768} styles={{ display: 'none' }}>
        <Carousel
          slideSize="80%"
          slideGap="md"
          align="start"
          withControls={false}
          loop
          breakpoints={[
            { minWidth: 500, slideSize: '65%', slideGap: 'md' },
            { minWidth: 600, slideSize: '50%', slideGap: 'md' },
          ]}
        >
          {products.map((product) => (
            <Carousel.Slide key={product.id}>
              <ProductCard
                product={product}
                withHeart={false}
                sizes="(min-width: 600px) 50vw, (min-width: 500px) 65vw, 80vw"
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </MediaQuery>
    </>
  );
};

export default ProductRecommendations; 