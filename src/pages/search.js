import Head from 'next/head';

import Layout from '@/components/Layout/Layout';
import SearchBar from '@/components/SearchBar/SearchBar';

export default function Search() {
  const topSection = {
    title: 'Your top genres',
    data: [{ title: 'Dance / Electronic' }, { title: 'Pop' }, { title: 'Rock' }],
  };

  const browseAll = {
    title: 'Browse All',
    data: [
      { title: 'Podcasts' },
      { title: 'Made For You' },
      { title: 'Charts' },
      { title: 'New Releases' },
      { title: 'Discover' },
      { title: 'Concerts' },
      { title: 'Mandopop' },
      { title: 'At Home' },
      { title: 'Wellness' },
      { title: 'K-Pop' },
      { title: 'Pride' },
      { title: 'RADAR' },
      { title: 'EQUAL' },
      { title: 'Hip Hop' },
      { title: 'Chill' },
      { title: 'Anime' },
      { title: 'Mood' },
      { title: 'J-Tracks' },
      { title: 'Jazz' },
      { title: 'Focus' },
    ],
  };

  return (
    <>
      <Head>
        <title>Spotify - Search</title>
      </Head>

      <main className="px-8 pt-4 pb-10 bg-gray-800">
        <section>
          <h2 className="py-4 text-xl font-bold text-gray-200">{topSection.title}</h2>
          <div className="grid grid-cols-3 grid-rows-1 gap-4 overflow-hidden auto-cols-auto">
            {topSection.data.map((item) => (
              <div
                className="flex h-48 p-5 text-gray-200 transition-all duration-200 bg-blue-600 rounded-md cursor-pointer bg-opacity-10 group hover:bg-opacity-30"
                key={item.title}
              >
                <div className="text-xl">{item.title}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-200">{browseAll.title}</h2>
          <ul className="flex flex-wrap gap-6 mt-4">
            {browseAll.data.map((category) => (
              <li
                key={category.title}
                className="bg-gray-500 rounded-lg w-72 h-72 md:w-60 md:h-60 lg:w-48 lg:h-48"
              >
                <div className="p-3 text-white">{category.title}</div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

Search.getLayout = function getLayout(page) {
  return <Layout topBarChildren={<SearchBar />}>{page}</Layout>;
};
