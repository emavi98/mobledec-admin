import { OrdersPageDialog } from './components/orders-page-dialog/orders-page-dialog';
import { OrdersPageTable } from './components/orders-page-table/orders-page-table';

export const OrdersPage = () => {
  return (
    <>
      <OrdersPageTable />
      <OrdersPageDialog />
    </>
  );
};
