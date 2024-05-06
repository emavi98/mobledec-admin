import {
  DeliveryMethodComponent,
  OrderToSupplierComponent,
  PaymentMethodComponent,
  ProductList,
  UserInfoForm,
} from './components';

const multiStepFormConfiguration = [
  <UserInfoForm title="Datos de cliente" />,
  <ProductList title="Listado de productos" />,
  <DeliveryMethodComponent title="Forma de entrega" />,
  <PaymentMethodComponent title="Metodo de pago" />,
  <OrderToSupplierComponent title="Pedido a proveedor" />,
];

export { multiStepFormConfiguration };
