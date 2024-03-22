export type RowType<T> = {
  original: T;
};

export type PaymentType = {
  id: string;
};

export type TableActionsComponentProps<T> = {
  row: RowType<T>;
};
