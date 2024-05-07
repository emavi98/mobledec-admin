import {
  DeliveryMethodComponent,
  OrderToSupplierComponent,
  PaymentMethodComponent,
  UserInfoForm,
} from "./components";

const multiStepFormConfiguration = [
  <UserInfoForm title="Datos de cliente" />,
  <DeliveryMethodComponent title="Forma de entrega" />,
  <PaymentMethodComponent title="Metodo de pago" />,
  <OrderToSupplierComponent title="Pedido a proveedor" />,
];

export { multiStepFormConfiguration };
