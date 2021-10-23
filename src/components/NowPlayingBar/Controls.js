import {
  ShuffleIcon,
  PreviousIcon,
  PlayIcon,
  NextIcon,
  RepeatIcon,
} from '@/components/Icons/Icons';

const Controls = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[40%]  min-w-[300px]  gap-y-3">
      <div className="flex items-center justify-center gap-5">
        <button className="text-gray-400 transition duration-200 ease-in-out hover:text-gray-100">
          <ShuffleIcon />
        </button>

        <button className="text-gray-400 transition duration-200 ease-in-out hover:text-gray-100">
          <PreviousIcon />
        </button>

        <button className="flex items-center justify-center w-8 h-8 text-black transition duration-200 ease-in-out bg-gray-100 rounded-full hover:scale-[1.1]">
          <PlayIcon />
        </button>

        <button className="text-gray-400 transition duration-200 ease-in-out hover:text-gray-100">
          <NextIcon />
        </button>

        <button className="text-gray-400 transition duration-200 ease-in-out hover:text-gray-100">
          <RepeatIcon />
        </button>
      </div>

      <div className="flex items-center w-full text-xs text-gray-400">
        <span className="min-w-[40px] text-right">0:00</span>
        <div className="relative w-full group">
          <div className="h-1 mx-2 bg-gray-500 rounded-lg cursor-pointer"></div>
          <div className="absolute top-0 left-0 w-10 h-1 mx-2 bg-gray-200 rounded-lg group-hover:bg-green-500"></div>
        </div>
        <span className="min-w-[40px] text-left">3:18</span>
      </div>
    </div>
  );
};

export default Controls;
