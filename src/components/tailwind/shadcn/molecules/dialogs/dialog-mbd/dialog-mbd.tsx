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

const DialogShadcnMbd = ({
  children,
  title,
  isOpen,
  handleClose,
  handleSubmit,
}: DialogShadMbdTypes) => {
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter>
          <Button onClick={handleSubmit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { DialogShadcnMbd };
