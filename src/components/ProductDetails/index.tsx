import {
  Accordion,
  Badge,
  Button,
  Group,
  Select,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { Heart, ShoppingCart } from 'tabler-icons-react';
import type { Product } from '@/types';
import { useCartStore } from '@/stores/cart';
import { useWishlistStore } from '@/stores/wishlist';
import styles from './ProductDetails.module.css';

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const addToCart = useCartStore((state) => state.addToCart);
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const wishlist = useWishlistStore((state) => state.wishlist);
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!selectedSize) {
      notifications.show({
        title: 'Please Select a Size',
        message: 'You must select a size before adding to cart',
        color: 'red',
      });
      return;
    }

    addToCart(product, selectedSize);
    notifications.show({
      title: 'Added to Cart',
      message: 'Item has been added to your cart',
      color: 'green',
    });
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product);
    notifications.show({
      title: isInWishlist ? 'Removed from Wishlist' : 'Added to Wishlist',
      message: isInWishlist 
        ? 'Item has been removed from your wishlist'
        : 'Item has been added to your wishlist',
      color: 'green',
    });
  };

  return (
    <Stack spacing="xl">
      {/* Product Title & Brand */}
      <div>
        <Group position="apart" align="start">
          <div>
            <Title order={1} size={24}>
              {product.attributes.title}
            </Title>
            <Text size="sm" color="dimmed">
              {product.attributes.brand.data.attributes.title}
            </Text>
          </div>
          {product.attributes.isNew && (
            <Badge variant="filled" color="cyan">
              New Arrival
            </Badge>
          )}
        </Group>
      </div>

      {/* Price */}
      <Text size="xl" weight={600}>
        ${product.attributes.price.toFixed(2)}
      </Text>

      {/* Size Selection */}
      <div>
        <Text weight={500} mb="xs">
          Select Size
        </Text>
        <Select
          placeholder="Choose a size"
          value={selectedSize}
          onChange={setSelectedSize}
          data={product.attributes.sizes}
          radius={0}
          styles={{
            input: {
              height: '42px',
            },
          }}
        />
      </div>

      {/* Action Buttons */}
      <Group grow>
        <Button
          size="lg"
          radius={0}
          leftIcon={<ShoppingCart size={20} />}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
        <Button
          size="lg"
          radius={0}
          variant={isInWishlist ? 'filled' : 'outline'}
          leftIcon={<Heart size={20} />}
          onClick={handleToggleWishlist}
        >
          {isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
        </Button>
      </Group>

      {/* Product Details Accordion */}
      <Accordion variant="separated" radius={0}>
        <Accordion.Item value="details">
          <Accordion.Control>Product Details</Accordion.Control>
          <Accordion.Panel>
            <Stack spacing="sm">
              <Text>
                Category: {product.attributes.category.data.attributes.title}
              </Text>
              <Text>Type: {product.attributes.type.data.attributes.title}</Text>
              <Text>Brand: {product.attributes.brand.data.attributes.title}</Text>
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="shipping">
          <Accordion.Control>Shipping & Returns</Accordion.Control>
          <Accordion.Panel>
            <Stack spacing="sm">
              <Text>Free standard shipping on all orders</Text>
              <Text>30-day return policy for unworn items</Text>
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
  );
};

export default ProductDetails; 