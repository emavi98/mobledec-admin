export interface Order {
  id: number;
  order: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  address: string;
  cp: number;
  phone: string;
  dni: number;
  date: string;
  state: string;
  shipping_method: string;
  shipping_cost: number;
  description_shipping: string;
  payment_method: string;
  payment: number;
  installment: number;
  note: string;
  subRows?: Order[];
}

export interface Client {
  id: number;
  order: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  address: string;
  cp: number;
  phone: string;
  dni: number;
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
      id: string;
    };
  };
}

export interface TableRow {
  getVisibleCells(): TableCell[];
  id: string;
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
