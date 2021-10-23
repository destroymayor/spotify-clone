import Head from 'next/head';

import Layout from '@/components/Layout/Layout';
import { PauseIcon, PlayIcon } from '@/components/Icons/Icons';

export default function Home() {
  const topSection = {
    title: 'Good afternoon',
    data: [
      { title: 'EDM' },
      { title: 'Liked Songs' },
      { title: 'Discover Weekly' },
      { title: 'Playlist 1' },
      { title: 'Playlist 2' },
      { title: 'Playlist 3' },
    ],
  };

  const sections = [
    {
      title: 'Your shows',
      data: [
        { title: 'EDM 1', author: 'By Jared' },
        { title: 'EDM 2', author: 'By Jared' },
        { title: 'EDM 3', author: 'By Jared' },
        { title: 'EDM 4', author: 'By Jared' },
        { title: 'EDM 5', author: 'By Jared' },
        { title: 'EDM 6', author: 'By Jared' },
        { title: 'EDM 7', author: 'By Jared' },
      ],
    },
    {
      title: 'Made For Jared',
      data: [
        { title: 'EDM 1', author: 'By Jared' },
        { title: 'EDM 2', author: 'By Jared' },
        { title: 'EDM 3', author: 'By Jared' },
        { title: 'EDM 4', author: 'By Jared' },
        { title: 'EDM 5', author: 'By Jared' },
        { title: 'EDM 6', author: 'By Jared' },
        { title: 'EDM 7', author: 'By Jared' },
      ],
    },
    {
      title: 'Recently played',
      data: [
        { title: 'EDM 1', author: 'By Jared' },
        { title: 'EDM 2', author: 'By Jared' },
        { title: 'EDM 3', author: 'By Jared' },
        { title: 'EDM 4', author: 'By Jared' },
        { title: 'EDM 5', author: 'By Jared' },
        { title: 'EDM 6', author: 'By Jared' },
        { title: 'EDM 7', author: 'By Jared' },
      ],
    },
    {
      title: 'Your top mixes',
      data: [
        { title: 'EDM 1', author: 'By Jared' },
        { title: 'EDM 2', author: 'By Jared' },
        { title: 'EDM 3', author: 'By Jared' },
        { title: 'EDM 4', author: 'By Jared' },
        { title: 'EDM 5', author: 'By Jared' },
        { title: 'EDM 6', author: 'By Jared' },
        { title: 'EDM 7', author: 'By Jared' },
      ],
    },
    {
      title: 'Your playlists',
      data: [
        { title: 'EDM 1', author: 'By Jared' },
        { title: 'EDM 2', author: 'By Jared' },
        { title: 'EDM 3', author: 'By Jared' },
        { title: 'EDM 4', author: 'By Jared' },
        { title: 'EDM 5', author: 'By Jared' },
        { title: 'EDM 6', author: 'By Jared' },
        { title: 'EDM 7', author: 'By Jared' },
      ],
    },
    {
      title: 'Episodes for you',
      data: [
        { title: 'EDM 1', author: 'By Jared' },
        { title: 'EDM 2', author: 'By Jared' },
        { title: 'EDM 3', author: 'By Jared' },
        { title: 'EDM 4', author: 'By Jared' },
        { title: 'EDM 5', author: 'By Jared' },
        { title: 'EDM 6', author: 'By Jared' },
        { title: 'EDM 7', author: 'By Jared' },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Spotify - Web Player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-8 pt-4 pb-10 bg-gray-800">
        <section>
          <h2 className="py-4 text-3xl font-bold text-gray-200">{topSection.title}</h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {topSection.data.map((item) => (
              <div
                className="flex items-center h-20 text-gray-200 transition-all duration-200 bg-gray-600 rounded-md cursor-pointer bg-opacity-10 group hover:bg-opacity-30"
                key={item.title}
              >
                <div className="min-w-[80px] min-h-[80px] bg-blue-200 rounded-l-md"></div>
                <div className="flex justify-between flex-1 px-4">
                  <span className="font-bold text-md">{item.title}</span>
                  <button className="bg-[#1db054] opacity-0 w-10 h-10 rounded-full flex justify-center items-center transition duration-300 ease-in-out hover:scale-[1.1] group-hover:opacity-100">
                    <PlayIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div>
          {sections.map((item) => (
            <section key={item.title} className="mt-6">
              <div className="flex items-end justify-between py-6">
                <button className="text-2xl font-bold text-gray-200 hover:underline">
                  <h2>{item.title}</h2>
                </button>
                <button className="text-sm font-bold text-gray-400 hover:underline">SEE ALL</button>
              </div>

              <div className="flex flex-wrap items-center gap-4 overflow-x-hidden text-gray-200">
                {item.data.map((data) => (
                  <div
                    key={data.title}
                    className="w-[183px] h-[282px] transition-all duration-200 bg-gray-600 rounded-md cursor-pointer bg-opacity-10 hover:bg-opacity-30 p-4"
                  >
                    <div className="w-full h-[163px] bg-gray-500 rounded-xl mb-4 shadow-md"></div>
                    <div className="min-h-[62px]">
                      <div>{data.title}</div>
                      <div>{data.author}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
