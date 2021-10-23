import Head from 'next/head';

import Layout from '@/components/Layout/Layout';
import CollectionNav from '@/components/CollectionNav/CollectionNav';

export default function Artists() {
  return (
    <>
      <Head>
        <title>Spotify - Artists</title>
      </Head>

      <div>Artists</div>
    </>
  );
}

Artists.getLayout = function getLayout(page) {
  return <Layout topBarChildren={<CollectionNav />}>{page}</Layout>;
};
