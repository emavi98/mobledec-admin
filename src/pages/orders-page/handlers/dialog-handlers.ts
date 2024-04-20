/* Store */
import useDialogStore from 'store/dialog-store';

export function DialogHandlers(isOpen: boolean) {
  const { showDialog } = useDialogStore();

  showDialog(isOpen);
}
