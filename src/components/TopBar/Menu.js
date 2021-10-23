import { useState } from 'react';

import { ArrowUpIcon, ArrowDownIcon } from '@/components/Icons/Icons';

const TopBar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen((prev) => !prev);

  const menus = [
    { title: 'Account', pathname: '/account' },
    { title: 'Profile', pathname: '/profile' },
    { title: 'Log out', pathname: '/logout' },
  ];

  return (
    <div className="relative">
      <button
        className="rounded-full gap-x-2 h-8 flex justify-between px-[2px] items-center bg-gray-900 text-white hover:bg-gray-700"
        onClick={handleClick}
      >
        <div className="w-6 h-6 ml-[2px] bg-blue-500 rounded-full"></div>
        <span>Jared</span>
        <span className="mr-2">{open ? <ArrowUpIcon /> : <ArrowDownIcon />}</span>
      </button>

      <div
        className={`${
          open ? 'flex' : 'hidden'
        } absolute right-0 top-10 w-[196px] bg-gray-700 rounded-sm`}
      >
        <ul className="flex flex-col justify-center w-full gap-2 p-1 text-sm text-gray-100 cursor-pointer">
          {menus.map((item) => (
            <li
              key={item.title}
              className="flex items-center transition duration-200 ease-in-out rounded-sm hover:bg-gray-500"
            >
              <button className="p-3">{item.title}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
