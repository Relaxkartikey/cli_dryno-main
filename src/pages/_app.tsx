import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import Layout from '@/components/Layout';
import AppProviders from '@/providers';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dryno</title>
        <meta
          name="description"
          content="Get all of your wardrobe essentials from our collections here at Dryno."
        />
      </Head>
      <AppProviders>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProviders>
      <Analytics />
    </>
  );
}
