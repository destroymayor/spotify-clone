import Widget from '@/components/NowPlayingBar/Widget';
import Controls from '@/components/NowPlayingBar/Controls';
import ExtraControls from '@/components/NowPlayingBar/ExtraControls';

const NowPlayingBar = () => {
  return (
    <footer className="overflow-hidden h-[91px] bg-[#181818] text-white border-t-[1px] border-[#282828] px-4 flex items-center">
      <Widget />
      <Controls />
      <ExtraControls />
    </footer>
  );
};

export default NowPlayingBar;
