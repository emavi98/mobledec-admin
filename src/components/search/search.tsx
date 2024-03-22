import { Input } from '@/components/ui';

const SearchComponent = () => {
  return (
    <div className="ps-1">
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  );
};

export default SearchComponent;
