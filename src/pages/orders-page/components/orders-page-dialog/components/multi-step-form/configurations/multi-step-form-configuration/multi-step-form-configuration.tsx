import {
  DeliveryMethodComponent,
  OrderToSupplierComponent,
  PaymentMethodComponent,
  ProductList,
  UserInfoForm,
} from './components';

const multiStepFormConfiguration = [
  <UserInfoForm />,
  <ProductList />,
  <DeliveryMethodComponent />,
  <PaymentMethodComponent />,
  <OrderToSupplierComponent />,
];

export { multiStepFormConfiguration };
