export interface Product {
  sku: number;
  product_name: string;
  cost: number;
  delivery_days: number;
  minutes_mount: number;
  id?: number;
  quantity?: number;
  subTotal?: number;
}

export interface OrderModel {
  [key: string]: string | number | boolean | Product[] | undefined;
}

export interface PDFModel extends OrderModel {
  name: string;
  last_name: string;
  email: string;
  password: string;
  address: string;
  cp: string;
  phone: string;
  dni: string;
  products: Product[];
  shipping_method: string;
  shipping_cost: number;
  total: number;
  total_shipping: number;
  payment: number;
  payment_method: string;
  pending_payment?: number;
  description_shipping?: string;
  installment?: string;
  note?: string;
  send?: boolean;
}

export type InfoProp = {
  info?: OrderModel;
  setInfo: React.Dispatch<React.SetStateAction<OrderModel>>;
};
