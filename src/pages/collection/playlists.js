import Head from 'next/head';

import Layout from '@/components/Layout/Layout';
import CollectionNav from '@/components/CollectionNav/CollectionNav';

export default function Playlist() {
  return (
    <>
      <Head>
        <title>Spotify - Playlist</title>
      </Head>

      <div>Playlist</div>
    </>
  );
}

Playlist.getLayout = function getLayout(page) {
  return <Layout topBarChildren={<CollectionNav />}>{page}</Layout>;
};
