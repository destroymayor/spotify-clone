import Head from 'next/head';

import Layout from '@/components/Layout/Layout';
import CollectionNav from '@/components/CollectionNav/CollectionNav';

export default function Playlist() {
  return (
    <>
      <Head>
        <title>Spotify - Playlist</title>
      </Head>

      <div className="h-full bg-gray-800"></div>
    </>
  );
}

Playlist.getLayout = function getLayout(page) {
  return <Layout topBarChildren={<CollectionNav />}>{page}</Layout>;
};
