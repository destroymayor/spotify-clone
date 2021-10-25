import { useState } from 'react';

import { SearchIcon } from '@/components/Icons/Icons';
import { XIcon } from '@heroicons/react/outline';

const SearchBar = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => setValue(e.target.value);

  const handleClear = () => setValue('');

  return (
    <div className="relative flex items-center bg-gray-50 min-w-[300px] max-w-[450px] rounded-full">
      <span className="px-2">
        <SearchIcon />
      </span>
      <input
        className="w-full h-10 py-1 pr-12 text-sm text-black rounded-r-full outline-none "
        placeholder="Artists, songs, or podcasts"
        value={value}
        onChange={handleChange}
      />
      <div className="flex items-center pr-2">
        {value !== '' && (
          <button onClick={handleClear}>
            <XIcon className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
