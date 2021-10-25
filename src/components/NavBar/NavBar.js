import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  SpotifyIcon,
  HomeIconSolid,
  HomeIconOutline,
  SearchIcon,
  LibraryIcon,
  CreateIcon,
  LikedIcon,
} from '@/components/Icons/Icons';

const NavBar = () => {
  const router = useRouter();

  console.log(router);

  const navigation = [
    {
      icon: router.route === '/' ? <HomeIconSolid /> : <HomeIconOutline />,
      title: 'Home',
      pathname: '/',
    },
    { icon: <SearchIcon />, title: 'Search', pathname: '/search' },
    {
      icon: <LibraryIcon />,
      title: ' Your Library',
      pathname: '/collection/playlists',
    },
  ];

  const playlists = [
    { title: 'Playlist 1' },
    { title: 'Playlist 2' },
    { title: 'Playlist 3' },
    { title: 'Playlist 4' },
    { title: 'Playlist 5' },
    { title: 'Playlist 6' },
    { title: 'Playlist 7' },
    { title: 'Playlist 8' },
    { title: 'Playlist 9' },
    { title: 'Playlist 10' },
    { title: 'Playlist 11' },
  ];

  return (
    <nav>
      <Link href="/" passHref>
        <div className="px-4 py-6 cursor-pointer">
          <SpotifyIcon />
        </div>
      </Link>

      <ul className="flex flex-col">
        {navigation.map((item) => (
          <Link href={item.pathname} passHref key={item.title}>
            <li
              className={`${
                item.pathname === router.pathname && 'bg-[#282828]'
              } flex items-center h-10 gap-x-4 px-4 py-2 text-xs text-gray-300 transition duration-200 ease-in-out rounded-md cursor-pointer hover:text-white`}
            >
              <span>{item.icon}</span>
              <span className="font-bold">{item.title}</span>
            </li>
          </Link>
        ))}
      </ul>

      <div className="flex flex-col px-4 pt-6 ">
        <button className="flex items-center gap-4 py-2 text-sm text-gray-300 hover:text-white">
          <CreateIcon />
          <span>Create Playlist</span>
        </button>

        <Link href="/collection/tracks" passHref>
          <button className="flex items-center gap-4 py-2 text-sm text-gray-300 hover:text-white">
            <LikedIcon />
            <span>Linked Songs</span>
          </button>
        </Link>

        <div className="mt-2 h-[2px] bg-gray-700"></div>
      </div>

      <ul className="flex flex-col px-4 py-6 overflow-y-auto h-80 gap-y-4">
        {playlists.map((item) => (
          <li key={item.title} className="text-gray-400 cursor-pointer hover:text-gray-100">
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
