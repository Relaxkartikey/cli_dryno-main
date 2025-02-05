import { InferGetStaticPropsType } from 'next';
import { getFeaturedProducts } from '@/api/products/getFeaturedProducts';
import Hero from '@/components/Hero';
import NewArrivals from '@/components/NewArrivals';
import FeaturedProducts from '@/components/FeaturedProducts';
import Brands from '@/components/Brands';
import Newsletter from '@/components/Newsletter';
import CategoryGrid from '@/components/CategoryGrid';
import TrendingNow from '@/components/TrendingNow';
import CollectionBanner from '@/components/CollectionBanner';
import SportStyles from '@/components/SportStyles';
import Head from 'next/head';

export const getStaticProps = async () => {
  const response = await getFeaturedProducts();
  return {
    props: {
      products: response.data,
      trendingProducts: response.data.filter(p => p.attributes.feature === 'trending'),
      newArrivals: response.data.filter(p => p.attributes.isNew),
    },
  };
};

export default function Home({
  products,
  trendingProducts,
  newArrivals,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Dryno | Premium Fashion & Sportswear</title>
        <meta 
          name="description" 
          content="Discover the latest in premium fashion and sportswear at Dryno. Shop our curated collection of clothing, shoes, and accessories."
        />
      </Head>

      {/* Hero Banner with Dynamic Slider */}
      <Hero />

      {/* Category Grid - Shop by Category */}
      <CategoryGrid />

      {/* Trending Now Section */}
      <TrendingNow products={trendingProducts} />

      {/* Collection Banner - Seasonal Campaign */}
      <CollectionBanner />

      {/* New Arrivals Grid */}
      <NewArrivals products={newArrivals} />

      {/* Sport Styles Section */}
      <SportStyles />

      {/* Featured Products */}
      <FeaturedProducts products={products} />

      {/* Brand Showcase */}
      <Brands />

      {/* Newsletter Signup */}
      <Newsletter />
    </>
  );
}
