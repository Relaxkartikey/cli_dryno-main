import { Container, SimpleGrid, Box, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

const sportCategories = [
  {
    id: 1,
    title: 'Running',
    image: '/images/sports/running.jpg',
    link: '/shop?type=running',
  },
  {
    id: 2,
    title: 'Training',
    image: '/images/sports/training.jpg',
    link: '/shop?type=training',
  },
  {
    id: 3,
    title: 'Lifestyle',
    image: '/images/sports/lifestyle.jpg',
    link: '/shop?type=lifestyle',
  },
];

const SportStyles = () => {
  return (
    <Container size={1400} py={50} px={{ base: 16, md: 32 }}>
      <SimpleGrid
        cols={1}
        spacing={20}
        breakpoints={[
          { minWidth: 768, cols: 2, spacing: 30 },
          { minWidth: 992, cols: 3, spacing: 40 },
        ]}
      >
        {sportCategories.map((category) => (
          <Box
            key={category.id}
            component={Link}
            href={category.link}
            sx={(theme) => ({
              position: 'relative',
              aspectRatio: '4/5',
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
              src={category.image}
              alt={category.title}
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
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '2rem',
              }}
            >
              <Text
                color="white"
                weight={600}
                size="xl"
                mb={10}
                sx={{ textTransform: 'uppercase' }}
              >
                {category.title}
              </Text>
              <Text color="white" size="sm">
                Shop Collection
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default SportStyles; 