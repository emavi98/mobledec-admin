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
