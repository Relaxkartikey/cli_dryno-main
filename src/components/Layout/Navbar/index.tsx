import { NavLink } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { categories } from '@/data/mockData';

type NavbarProps = {
  onClose: () => void;
};

const Navbar = ({ onClose }: NavbarProps) => {
  const router = useRouter();
  const currentRoute = router.asPath;

  return (
    <>
      <RemoveScroll>
        <NavLink
          label="Shop"
          component={Link}
          href="/shop"
          onClick={onClose}
          active={currentRoute === '/shop'}
          color="cyan.9"
          defaultOpened
        >
          {categories.map((category) => (
            <NavLink
              key={category.id}
              label={category.attributes.title}
              component={Link}
              href={`/shop/${category.attributes.title.toLowerCase()}`}
              onClick={onClose}
              active={currentRoute === `/shop/${category.attributes.title.toLowerCase()}`}
              color="cyan.9"
              pl={16}
            />
          ))}
        </NavLink>
      </RemoveScroll>
    </>
  );
};

export default Navbar;
