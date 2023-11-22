export interface Order {
  id: number;
  order: number;
  first_name: string;
  last_name: string;
  phone: string;
  date: string;
  state: string;
  subRows?: Order[];
}

export interface TableProps {
  filtering?: string;
  setFiltering?: React.Dispatch<React.SetStateAction<string>>;
  data: any;
  columns: any;
  className?: {
    table: string;
    thead: string;
    th: string;
    tr: string;
    td: string;
  };
  children?: any;
  thRow?: string[];
  editRowFn: (id: number) => void;
  removeRowFn: (id: number) => void;
}

export interface TableCell {
  getContext(): {
    row: {
      original: {
        sku?: string;
      };
    };
  };
}

export interface TableRow {
  getVisibleCells(): TableCell[];
}

export interface TableActionsProps {
  row: TableRow;
  editHandler: (ev: React.MouseEvent<HTMLParagraphElement>) => void;
  removeHandler: (ev: React.MouseEvent<HTMLParagraphElement>) => void;
}

export interface TableTypePagination {
  setPageIndex: (number: number) => void;
  getCanPreviousPage: () => boolean;
  getCanNextPage: () => boolean;
  previousPage: () => void;
  nextPage: () => void;
  getPageCount: () => number;
  getState: () => { pagination: { pageIndex: number } };
}
