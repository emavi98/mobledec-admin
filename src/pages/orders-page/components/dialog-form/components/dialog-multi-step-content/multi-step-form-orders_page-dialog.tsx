import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import UserInfoForm from './user-info/user-info-form';
import ProductList from './product-list/product-list';

import PaymentMethodComponent from './payment-method/payment-method';
import DeliveryMethodComponent from './delivery-method/delivery-method';
import OrderToSupplierComponent from './order-to-supplier/order-to-supplier';
import MultiStepFormComponent from 'components/multi-step-form/multi-step-form';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export const MultiStepFormOdersPageDialogComponent = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="bg-background">
      <MultiStepFormComponent>
        <UserInfoForm title="Datos de cliente" />
        <ProductList title="Listado de productos" />
        <DeliveryMethodComponent title="Forma de entrega" />
        <PaymentMethodComponent title="Forma de Pago" />
        <OrderToSupplierComponent title="Pedido a proveedor" />
      </MultiStepFormComponent>
    </div>
  );
};
