import { Container, SimpleGrid, Title, Box, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/data/mockData';

const CategoryGrid = () => {
  return (
    <Container size={1400} py={50} px={{ base: 16, md: 32 }}>
      <Title order={2} size={24} weight={600} mb={30} align="center">
        Shop by Category
      </Title>
      
      <SimpleGrid
        cols={2}
        spacing={20}
        breakpoints={[
          { minWidth: 768, cols: 3, spacing: 30 },
          { minWidth: 992, cols: 4, spacing: 40 },
        ]}
      >
        {categories.map((category) => (
          <Box
            key={category.id}
            component={Link}
            href={`/shop/${category.attributes.title.toLowerCase()}`}
            sx={(theme) => ({
              position: 'relative',
              aspectRatio: '1',
              overflow: 'hidden',
              cursor: 'pointer',
              '&:hover img': {
                transform: 'scale(1.05)',
              },
              '&:hover .overlay': {
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
              },
            })}
          >
            <Image
              src={`/images/categories/${category.attributes.title.toLowerCase()}.jpg`}
              alt={category.attributes.title}
              fill
              style={{
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
              }}
            />
            <Box
              className="overlay"
              sx={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                transition: 'background-color 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                color="white"
                weight={600}
                size="xl"
                sx={{ textTransform: 'uppercase' }}
              >
                {category.attributes.title}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default CategoryGrid; 