import { TableShadcnMbd } from 'components';
import { useFetchOrders } from 'services/orders-service';
import { OrdersPageTableToolBar } from './components/orders-page-table/orders-page-table-toolbar';
import { columns } from './configurations/table-configuration';

export const OrdersPageTable = () => {
  const { data, isLoading, error } = useFetchOrders();

  if (isLoading) return <div>Loading ...</div>;
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <OrdersPageTableToolBar {...{ data, columns }} />
      <TableShadcnMbd {...{ data, columns }} />
    </div>
  );
};
