import { Container, Title, Box } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import type { Product } from '@/types';
import ProductCard from '@/components/ProductsGrid/ProductCard';

type TrendingNowProps = {
  products: Product[];
};

const TrendingNow = ({ products }: TrendingNowProps) => {
  return (
    <Box py={50} sx={{ backgroundColor: '#f5f5f5' }}>
      <Container size={1400} px={{ base: 16, md: 32 }}>
        <Title order={2} size={24} weight={600} mb={30} align="center">
          Trending Now
        </Title>

        <Carousel
          slideSize="33.333333%"
          breakpoints={[
            { maxWidth: 'md', slideSize: '33.333333%' },
            { maxWidth: 'sm', slideSize: '50%' },
            { maxWidth: 'xs', slideSize: '100%' },
          ]}
          slideGap="md"
          align="start"
          loop
          controlsOffset="xs"
          styles={{
            control: {
              backgroundColor: 'white',
              border: 'none',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              '&[data-inactive]': {
                opacity: 0,
                cursor: 'default',
              },
            },
          }}
        >
          {products.map((product) => (
            <Carousel.Slide key={product.id}>
              <ProductCard
                product={product}
                withHeart
                sizes="(min-width: 992px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default TrendingNow; 