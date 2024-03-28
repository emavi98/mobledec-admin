// Components
import { DialogShadcnMbd, MultiStepForm, TableShadcnMbd } from 'components';
// Services
import { useFetchOrders } from '../../hooks/useOrders';
// Configurations
import { columns, multiStepFormChildrenConfiguration } from './configurations';
import { DialogPropsConfiguration } from './configurations/dialog-configuration/dialog-configuration';

export const OrdersPage = () => {
  const { data, isLoading, error } = useFetchOrders();
  if (isLoading) return <div>Loading ...</div>;
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      <TableShadcnMbd {...{ data, columns }} />
      <DialogShadcnMbd {...DialogPropsConfiguration()}>
        <MultiStepForm>{multiStepFormChildrenConfiguration}</MultiStepForm>
      </DialogShadcnMbd>
    </>
  );
};
