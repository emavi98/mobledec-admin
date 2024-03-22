// Components
import { TableOrdersComponent } from './components/table/table-orders.component';
import { DialogOrdersForm } from './components/dialog-form/dialog-form.component';
import { useFetchOrders } from '../../hooks/useOrders';

export const OrdersPage = () => {
  const { data, isLoading, error } = useFetchOrders();

  if (isLoading) return <div>Loading ...</div>;
  if (error) return 'An error has occurred: ' + error.message;
  console.log(data);
  return (
    <>
      <TableOrdersComponent {...{ data }} />
      <DialogOrdersForm />
    </>
  );
};
