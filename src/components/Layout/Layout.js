import NavBar from '@/components/NavBar/NavBar';
import TopBar from '@/components/TopBar/TopBar';
import NowPlayingBar from '@/components/NowPlayingBar/NowPlayingBar';

const Layout = (props) => {
  const { children, topBarChildren } = props;

  return (
    <div
      className="grid h-screen overflow-hidden"
      style={{ gridTemplateColumns: 'auto 1fr', gridTemplateRows: '1fr auto' }}
    >
      <div className="w-[220px] text-white bg-black px-2">
        <NavBar />
      </div>

      <div className="overflow-y-auto bg-gray-400">
        <div className="sticky top-0">
          <TopBar>{topBarChildren}</TopBar>
        </div>
        {children}
      </div>

      <div className="col-span-2">
        <NowPlayingBar />
      </div>
    </div>
  );
};

export default Layout;
