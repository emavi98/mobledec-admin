// Components
// Store
import useOrdersPageStore from 'store/orders-store';
import { toast } from 'components/tailwind/shadcn/atoms/use-toast';
import useDialogStore from 'store/dialog-store';
import { OrdersPageMultiStepForm } from './components/multi-step-form/orders-page-multi-step-form';
import { DialogShadcnMbd } from 'components';

export const OrdersPageDialog = () => {
  const { showDialog, isOpen } = useDialogStore();
  const { orderFormDialog } = useOrdersPageStore();

  const title = 'Edit Orders';
  const handleClose = () => {
    showDialog(false);
  };

  const handleSubmit = () => {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(orderFormDialog.billing, null, 2)}
          </code>
        </pre>
      ),
    });
  };

  return (
    <>
      <DialogShadcnMbd {...{ isOpen, title, handleClose, handleSubmit }}>
        <OrdersPageMultiStepForm />
      </DialogShadcnMbd>
    </>
  );
};
