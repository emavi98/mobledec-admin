//import { Input } from 'components';

/* const SearchBardShadcnMbd = () => {
  return (
    <div className="ps-1">
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  );
}; */

import { PersonIcon } from '@radix-ui/react-icons';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from 'components';
import { useEffect, useState } from 'react';

export function SearchBardShadcnMbd() {
  const [keyword, setKeyword] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const userList = [
    { customerName: 'Olivia', CustomersEmail: 'Olivia@' },
    { customerName: 'Patricio', CustomersEmail: 'Patricio@' },
  ];

  useEffect(() => {
    if (keyword !== '') {
      const filtered = userList.filter((item) =>
        item.customerName.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredItems(filtered);
      console.log('filtered', filtered);
    } else {
      setFilteredItems([]);
    }
  }, [keyword]);

  const handleSelectItem = (value) => {
    setFilteredItems([]);
    setKeyword(value);
  };

  return (
    <Command shouldFilter={false} className="rounded-lg border">
      <CommandInput
        value={keyword}
        onValueChange={setKeyword}
        placeholder="Type a command or search..."
      />
      <CommandList>
        {/* {loading && <Command.Loading>Fetching words…</Command.Loading>} */}
        {filteredItems.map(({ customerName, CustomersEmail }, index) => (
          <CommandItem
            key={index}
            value={customerName}
            onSelect={handleSelectItem}
          >
            <div className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                <AvatarFallback>
                  <PersonIcon />
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {customerName}
                </p>
                <p className="text-sm text-muted-foreground">
                  {CustomersEmail}
                </p>
              </div>
            </div>
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  );
}
