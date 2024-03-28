// Components
import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'components';
import { DialogShadMbdTypes } from './types/dialog-mbd.types';

// Store
const DialogShadcnMbd = ({
  children,
  title,
  footer,
  isOpen,
  handleClose,
}: DialogShadMbdTypes) => {
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { DialogShadcnMbd };
