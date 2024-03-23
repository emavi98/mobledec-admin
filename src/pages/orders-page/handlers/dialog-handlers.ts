/* Store */
import useDialogStore from 'store/dialog-store';

export function DialogHandlers() {
  const { addDialog, removeDialog } = useDialogStore();

  const handleShowDialog = (dialogName: string) => {
    addDialog(dialogName);
  };

  const handleCloseDialog = (dialogName: string) => {
    removeDialog(dialogName);
  };

  return {
    handleShowDialog,
    handleCloseDialog,
  };
}
