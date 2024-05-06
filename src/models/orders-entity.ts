export interface OrderEntity {
  status: string;
  currency: string;
  version: string;
  pricesIncludeTax: boolean;
  discountTotal: string;
  discountTax: string;
  shippingTotal: string;
  shippingTax: string;
  cartTax: string;
  total: string;
  totalTax: string;
  customerId: number;
  deliveryStatus: string;
  paidStatus: string;
  sellerName: string;
  billing: CustomerInfo;
  shipping: CustomerInfo;
  customerIpAddress: string;
  customerUserAgent: string;
  createdVia: string;
  customerNote: string;
  orderNumber: string;
  meta_data: any[];
  lineItems: LineItem[];
  taxLines: TaxLine[];
  refunds: any[];
  currencySymbol: string;
}

export interface CustomerInfo {
  documentIdentificationType: string;
  documentNumber: string;
  firstName: string;
  lastName: string;
  company: string;
  addressFirstLine: string;
  addressSecondLine: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  email?: string;
  phone?: string;
}

export interface LineItem {
  id: number;
  name: string;
  productId: number;
  variationId: number;
  quantity: number;
  taxClass: string;
  subtotal: string;
  subtotalTax: string;
  total: string;
  totalTax: string;
  taxes: Tax[];
  metaData: LineItemMetaDatum[];
  sku: string;
  price: number;
  parentName: null | string;
  cogItemCcost: number;
  cogItemTotalCost: number;
  yithPosImage: boolean;
}

export interface LineItemMetaDatum {
  id: number;
  key: string;
  value: string;
  displayKey: string;
  displayValue: string;
}

export interface Tax {
  id: number;
  total: string;
  subtotal: string;
}

export interface TaxLine {
  id: number;
  rateCode: string;
  rateId: number;
  label: string;
  compound: boolean;
  taxTotal: string;
  shippingTaxTotal: string;
  ratePercent: number;
  metaData: any[];
}

export interface Payments {
  id: number;
  paymentDateGMT: string;
  paymentDate: string;
  paymentMethod: number;
  paymentNotes: string;
}

export interface installments {
  id: number;
  installmentsNumber: string;
  totalAmount: number;
  label: string;
}
