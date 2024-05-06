import create from 'zustand';
import { OrderEntity } from '../models/orders-entity';

interface DialogStore {
  orderFormDialog: OrderEntity;
  setOrderFormValues: ({
    ordersFormData,
  }: {
    ordersFormData: OrderEntity;
  }) => void;
}

const useOrdersPageStore = create<DialogStore>((set) => ({
  orderFormDialog: {
    status: '',
    currency: '',
    version: '',
    pricesIncludeTax: false,
    discountTotal: '0',
    discountTax: '0',
    shippingTotal: '0',
    shippingTax: '0',
    cartTax: '0',
    total: '0',
    totalTax: '0',
    customerId: 0,
    deliveryStatus: '',
    paidStatus: '',
    sellerName: '',
    billing: {
      documentIdentificationType: '',
      documentNumber: '',
      firstName: '',
      lastName: '',
      company: '',
      addressFirstLine: '',
      addressSecondLine: '',
      city: '',
      state: '',
      postcode: '',
      country: '',
      email: '',
      phone: '',
    },
    shipping: {
      documentIdentificationType: '',
      documentNumber: '',
      firstName: '',
      lastName: '',
      company: '',
      addressFirstLine: '',
      addressSecondLine: '',
      city: '',
      state: '',
      postcode: '',
      country: '',
      email: '',
      phone: '',
    },
    customerIpAddress: '',
    customerUserAgent: '',
    createdVia: '',
    customerNote: '',
    orderNumber: '',
    meta_data: [],
    lineItems: [],
    taxLines: [],
    refunds: [],
    currencySymbol: '',
  },
  setOrderFormValues: ({ ordersFormData }) =>
    set(() => ({
      orderFormDialog: ordersFormData,
    })),
}));

export default useOrdersPageStore;
