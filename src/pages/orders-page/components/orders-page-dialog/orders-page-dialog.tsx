// Components
import { DialogShadcnMbd } from 'components';
import { OrdersPageMultiStepForm } from './components/multi-step-form/orders-page-multi-step-form';
// Configurations
import { DialogPropsConfiguration } from './configurations/dialog-configuration';

export const OrdersPageDialog = () => {
  const dialogProps = DialogPropsConfiguration();

  return (
    <>
      <DialogShadcnMbd {...dialogProps}>
        <OrdersPageMultiStepForm />
      </DialogShadcnMbd>
    </>
  );
};
