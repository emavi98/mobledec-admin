import useDialogStore from 'store/dialog-store';

export const DialogPropsConfiguration = () => {
  const { showDialog, isOpen } = useDialogStore();
  return {
    title: 'Edit Orders',
    isOpen: isOpen,
    handleClose: () => showDialog(false),
  };
};
