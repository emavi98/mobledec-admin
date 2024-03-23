// Components
//import { DialogOrdersForm } from './components/dialog-form/dialog-form.component';
import { TableShadcnMbd } from 'components';
import { useFetchOrders } from '../../hooks/useOrders';
import { columns } from './configurations/table-configurations/columns/columns';

export const OrdersPage = () => {
  const { data, isLoading, error } = useFetchOrders();

  if (isLoading) return <div>Loading ...</div>;
  if (error) return 'An error has occurred: ' + error.message;
  console.log(data);
  return (
    <>
      <TableShadcnMbd {...{ data, columns }} />
      {/* <DialogOrdersForm /> */}
    </>
  );
};
