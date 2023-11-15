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

export interface Product {
  cost: number;
  description: string;
  id: number;
  name: string;
  quantity?: number;
  subTotal?: number;
}
