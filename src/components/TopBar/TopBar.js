import { useState } from 'react';

import { useRouter } from 'next/router';

import Menu from '@/components/TopBar/Menu';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const TopBar = (props) => {
  const { children } = props;
  const router = useRouter();
  const [routerHistory, setRouterHistory] = useState(null);

  const handleNextPage = () => {
    if (routerHistory) router.push(routerHistory);
  };

  const handlePreviousPage = () => {
    router.back();
    setRouterHistory(router.pathname);
  };

  return (
    <header className="flex items-center justify-between px-8 h-[60px] bg-gray-800">
      <div className="flex items-center">
        <button
          className={`flex items-center justify-center w-8 h-8 mr-4 text-white bg-black rounded-full bg-opacity-70`}
          onClick={handlePreviousPage}
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          className="flex items-center justify-center w-8 h-8 mr-4 text-gray-400 bg-black bg-opacity-50 rounded-full"
          onClick={handleNextPage}
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>

        <div>{children}</div>
      </div>

      <Menu />
    </header>
  );
};

export default TopBar;
