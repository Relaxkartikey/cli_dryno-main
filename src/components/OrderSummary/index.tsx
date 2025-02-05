import { Button, Card, Divider, Group, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import React, { useState } from 'react';
import { ExclamationMark, Check } from 'tabler-icons-react';
import { useCart, useTotalPrice, useCartStore } from '@/stores/cart';
import styles from './OrderSummary.module.css';

const OrderSummary = () => {
  const { totalPrice } = useTotalPrice();
  const { cart } = useCart();
  const resetCart = useCartStore((state) => state.resetCart);
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      // Simulate checkout process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Clear the cart after successful checkout
      resetCart();
      
      notifications.show({
        title: 'Order Placed Successfully',
        message: 'Thank you for your purchase!',
        color: 'green',
        icon: <Check />,
      });
      
      setLoading(false);
    } catch (err) {
      notifications.show({
        title: 'Unexpected Error',
        message: 'Please try again later.',
        color: 'red',
        icon: <ExclamationMark />,
      });
      setLoading(false);
    }
  };

  return (
    <Card
      withBorder
      padding={30}
      radius={0}
      bg="gray.0"
      className={styles.card}
    >
      <Text weight={600} size={18} mb={20}>
        Order Summary
      </Text>
      <Group position="apart" mb={6} noWrap>
        <Text weight={500}>Subtotal</Text>
        <Text>${totalPrice.toFixed(2)}</Text>
      </Group>
      <Group position="apart" noWrap>
        <Text weight={500}>Shipping</Text>
        <Text size={14}>FREE</Text>
      </Group>
      <Divider my={15} />
      <Group position="apart" noWrap>
        <Text weight={600}>Total</Text>
        <Text weight={600}>${totalPrice.toFixed(2)}</Text>
      </Group>
      <Button
        w="100%"
        h={50}
        size="md"
        radius={0}
        mt={20}
        onClick={handleCheckout}
        loading={loading}
        disabled={cart.length === 0}
      >
        CHECKOUT
      </Button>
    </Card>
  );
};

export default OrderSummary;
