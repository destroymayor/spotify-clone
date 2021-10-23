import { SearchIcon } from '@/components/Icons/Icons';

const SearchBar = () => {
  return (
    <div className="relative flex items-center bg-gray-50 min-w-[300px] max-w-[450px] rounded-full">
      <span className="px-2">
        <SearchIcon />
      </span>
      <input
        className="w-full h-10 py-1 pr-12 text-xs text-black rounded-r-full outline-none "
        placeholder="Artists, songs, or podcasts"
      />
    </div>
  );
};

export default SearchBar;
