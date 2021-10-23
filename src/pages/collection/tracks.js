import Head from 'next/head';

import Layout from '@/components/Layout/Layout';
import CollectionNav from '@/components/CollectionNav/CollectionNav';

export default function Tracks() {
  return (
    <>
      <Head>
        <title>Spotify - Linked Songs</title>
      </Head>

      <div>Linked Songs</div>
    </>
  );
}

Tracks.getLayout = function getLayout(page) {
  return <Layout topBarChildren={<CollectionNav />}>{page}</Layout>;
};
