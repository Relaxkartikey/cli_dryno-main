import { Button, Group, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import hero from '../../../public/images/hero.jpg';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles['hero-wrapper']}>
      <div className={styles['image-wrapper']}>
        <Image
          priority
          src={hero}
          alt="young couple posing in warm winter outfit"
          fill
          placeholder="blur"
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: '50% 30%' }}
        />
      </div>
      <div className={styles['hero-content']}>
        <Text
          color="white"
          weight={600}
          align="center"
          className={`${styles.text} ${styles.primary}`}
        >
          Style that speaks volumes.
        </Text>
        <Text
          color="white"
          weight={600}
          maw={500}
          align="center"
          className={`${styles.text} ${styles.secondary}`}
        >
          Discover our curated collection of premium clothing.
        </Text>
        <Group position="center" className={styles['buttons-container']}>
          <Button
            variant="default"
            radius={0}
            component={Link}
            href="/shop"
            className={styles.button}
          >
            SHOP NOW
          </Button>
        </Group>
      </div>
    </div>
  );
};

export default Hero;
