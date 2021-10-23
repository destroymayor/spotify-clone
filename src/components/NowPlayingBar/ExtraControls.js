import {
  QueueIcon,
  ConnectToDeviceIcon,
  VolumeIcon,
  FullScreenIcon,
} from '@/components/Icons/Icons';

const ExtraControls = () => {
  return (
    <div className="w-[30%] min-w-[180px] flex justify-end items-center gap-4">
      <button className="text-gray-400 transition duration-200 ease-in-out hover:text-gray-100">
        <QueueIcon />
      </button>

      <button className="text-gray-400 transition duration-200 ease-in-out hover:text-gray-100">
        <ConnectToDeviceIcon />
      </button>

      <div className="flex items-center ">
        <button className="text-gray-400 transition duration-200 ease-in-out hover:text-gray-100">
          <VolumeIcon />
        </button>
        <div className="w-[93px] h-1 mx-2 bg-gray-500 rounded-lg"></div>
      </div>

      <button className="text-gray-400 transition duration-200 ease-in-out hover:text-gray-100">
        <FullScreenIcon />
      </button>
    </div>
  );
};

export default ExtraControls;
