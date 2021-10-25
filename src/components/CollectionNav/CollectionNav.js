import Link from 'next/link';
import { useRouter } from 'next/router';

const CollectionNav = () => {
  const router = useRouter();

  const navList = [
    { title: 'Playlists', pathname: '/collection/playlists' },
    { title: 'Podcasts', pathname: '/collection/podcasts' },
    { title: 'Artists', pathname: '/collection/artists' },
    { title: 'Albums', pathname: '/collection/albums' },
  ];

  return (
    <nav className="flex items-center gap-6 mx-6">
      {navList.map((item) => (
        <Link key={item.pathname} href={item.pathname} passHref>
          <div
            className={`${
              item.pathname === router.pathname && 'bg-gray-700'
            } py-2 px-3 text-gray-100 rounded-md cursor-pointer`}
          >
            {item.title}
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default CollectionNav;
