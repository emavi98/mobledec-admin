// Components
import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'components/ui/dialog';
import { MultiStepFormOdersPageDialogComponent } from './components/dialog-multi-step-content/multi-step-form-orders_page-dialog';

// Store
import useDialogStore from 'store/dialog-store';

export function DialogOrdersForm() {
  const { dialogNames, removeDialog } = useDialogStore();
  const openDialog = dialogNames.includes('ordersDialog');

  const handleClose = () => {
    removeDialog('ordersDialog');
  };

  return (
    <Dialog open={openDialog} onOpenChange={handleClose}>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Edit Orders</DialogTitle>
        </DialogHeader>
        <MultiStepFormOdersPageDialogComponent />
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
