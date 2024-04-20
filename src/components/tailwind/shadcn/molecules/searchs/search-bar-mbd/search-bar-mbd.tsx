import { PersonIcon } from '@radix-ui/react-icons';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from 'components';
import { SearchBarProps } from './types/search-bar-mbd.types';

export function SearchBardShadcnMbd({
  keyword,
  setKeyword,
  data = [],
  isLoading,
  error,
}: SearchBarProps) {
  const handleInputChange = (value: string) => {
    setKeyword(value);
  };

  const handleSelectItem = (value: string) => {
    setKeyword(value);
  };

  if (isLoading) return <div>Loading ...</div>;
  if (error) return 'An error has occurred: ' + error.message;
  if (data) return null;
  return (
    <Command shouldFilter={false} className="rounded-lg border">
      <CommandInput
        value={keyword}
        onValueChange={handleInputChange}
        placeholder="Type a command or search..."
      />
      <CommandList>
        {data?.map(
          ({ name, email }: { name: string; email: string }, index: number) => (
            <CommandItem key={index} value={name} onSelect={handleSelectItem}>
              <div className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>
                    <PersonIcon />
                  </AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">{name}</p>
                  <p className="text-sm text-muted-foreground">{email}</p>
                </div>
              </div>
            </CommandItem>
          )
        )}
      </CommandList>
    </Command>
  );
}
