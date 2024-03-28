import {
  DeliveryMethodComponent,
  OrderToSupplierComponent,
  PaymentMethodComponent,
  ProductList,
  UserInfoForm,
} from './components';

const multiStepFormChildrenConfiguration = [
  <UserInfoForm title="Datos de cliente" />,
  <ProductList title="Listado de productos" />,
  <DeliveryMethodComponent title="Forma de entrega" />,
  <PaymentMethodComponent title="Forma de Pago" />,
  <OrderToSupplierComponent title="Pedido a proveedor" />,
];

export { multiStepFormChildrenConfiguration };
