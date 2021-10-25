import Head from 'next/head';

import Layout from '@/components/Layout/Layout';

export default function Tracks() {
  return (
    <>
      <Head>
        <title>Spotify - Linked Songs</title>
      </Head>

      <div className="h-full bg-gray-800"></div>
    </>
  );
}

Tracks.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
