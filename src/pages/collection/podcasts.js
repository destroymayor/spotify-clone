import Head from 'next/head';

import Layout from '@/components/Layout/Layout';
import CollectionNav from '@/components/CollectionNav/CollectionNav';

export default function Podcasts() {
  return (
    <>
      <Head>
        <title>Spotify - Podcasts</title>
      </Head>

      <div className="h-full bg-gray-800"></div>
    </>
  );
}

Podcasts.getLayout = function getLayout(page) {
  return <Layout topBarChildren={<CollectionNav />}>{page}</Layout>;
};
