import { Dispatch, SetStateAction } from 'react';

export interface SearchBarProps {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
  data: any;
  isLoading: any;
  error: any;
}
