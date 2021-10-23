import { HeartIcon, DesktopComputerIcon } from '@heroicons/react/outline';

const Widget = () => {
  return (
    <div className="flex items-center w-[30%] min-w-[400px] gap-4">
      <div className="flex bg-blue-500 w-[56px] h-14 min-w-[14px]"></div>
      <div className="flex flex-col max-w-[220px]">
        <div className="text-sm truncate">{`In the End`}</div>
        <div className="text-xs text-gray-300 truncate">Linkin Park</div>
      </div>
      <div className="flex items-center px-4 gap-x-3">
        <button className="transition duration-200 ease-in-out hover:text-gray-400">
          <HeartIcon className="w-5 h-5" />
        </button>
        <button className="transition duration-200 ease-in-out hover:text-gray-400">
          <DesktopComputerIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Widget;
