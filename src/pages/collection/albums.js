import Head from 'next/head';

import Layout from '@/components/Layout/Layout';
import CollectionNav from '@/components/CollectionNav/CollectionNav';

export default function Albums() {
  return (
    <>
      <Head>
        <title>Spotify - Albums</title>
      </Head>

      <div>Albums</div>
    </>
  );
}

Albums.getLayout = function getLayout(page) {
  return <Layout topBarChildren={<CollectionNav />}>{page}</Layout>;
};
