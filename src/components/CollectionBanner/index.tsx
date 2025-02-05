import { Container, Box, Title, Text, Button } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

const CollectionBanner = () => {
  return (
    <Container size={1400} py={50} px={{ base: 16, md: 32 }}>
      <Box
        sx={{
          position: 'relative',
          aspectRatio: '21/9',
          '@media (max-width: 768px)': {
            aspectRatio: '1',
          },
        }}
      >
        <Image
          src="/images/collection-banner.jpg"
          alt="New Collection"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            color: 'white',
            '@media (max-width: 768px)': {
              alignItems: 'center',
              textAlign: 'center',
            },
          }}
        >
          <Title order={2} size={40} weight={700} mb={10}>
            Spring Collection 2024
          </Title>
          <Text size="xl" mb={30} maw={600}>
            Discover our latest collection featuring fresh styles and vibrant colors for the new season.
          </Text>
          <Button
            component={Link}
            href="/shop"
            size="lg"
            radius={0}
            sx={{ 
              backgroundColor: 'white',
              color: 'black',
              '&:hover': {
                backgroundColor: 'black',
                color: 'white',
              },
            }}
          >
            SHOP NOW
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CollectionBanner; 