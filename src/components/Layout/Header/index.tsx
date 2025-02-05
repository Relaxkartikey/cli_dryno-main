import { useTotalQuantity } from '@/stores/cart';
import { useWishlist } from '@/stores/wishlist';
import {
  ActionIcon,
  Burger,
  Grid,
  Group,
  Indicator,
  MediaQuery,
  rem,
  Text,
} from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import { Heart, ShoppingCart } from 'tabler-icons-react';
import styles from './Header.module.css';

type HeaderProps = {
  opened: boolean;
  onToggleNavbar: () => void;
  onClose: () => void;
};

const Header = ({ opened, onToggleNavbar, onClose }: HeaderProps) => {
  const { totalQuantity } = useTotalQuantity();
  const { wishlist } = useWishlist();

  return (
    <MediaQuery
      largerThan={768}
      styles={{ paddingLeft: rem(32), paddingRight: rem(32) }}
    >
      <Grid align="center" mx="auto" h="100%" m={0} px={16} maw={1400}>
        <Grid.Col span="auto" p={0}>
          <MediaQuery largerThan={768} styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={onToggleNavbar}
              size="sm"
              color="white"
              aria-label="Open navigation"
            />
          </MediaQuery>
        </Grid.Col>
        <Grid.Col span="content" p={0}>
          <Text
            component={Link}
            href="/"
            weight={700}
            size={24}
            sx={{ cursor: 'pointer' }}
          >
            Dryno
          </Text>
        </Grid.Col>
        <Grid.Col span="auto" p={0}>
          <Group position="right" className={styles['icons-wrapper']}>
            <ActionIcon
              component={Link}
              href="/wishlist"
              variant="transparent"
              aria-label="Wishlist"
              className={styles.icon}
              onClick={onClose}
            >
              <Indicator
                size={16}
                label={wishlist.length}
                disabled={wishlist.length === 0}
                color="cyan.9"
              >
                <Heart color="white" />
              </Indicator>
            </ActionIcon>
            <ActionIcon
              component={Link}
              href="/cart"
              variant="transparent"
              aria-label="Cart"
              className={styles.icon}
              onClick={onClose}
            >
              <Indicator
                size={16}
                label={totalQuantity}
                disabled={totalQuantity === 0}
                color="cyan.9"
              >
                <ShoppingCart color="white" />
              </Indicator>
            </ActionIcon>
          </Group>
        </Grid.Col>
      </Grid>
    </MediaQuery>
  );
};

export default Header;
