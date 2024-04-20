import create from 'zustand';

interface DialogStore {
  isOpen: boolean;
  showDialog: (isOpen: boolean) => void;
}

const useDialogStore = create<DialogStore>((set) => ({
  isOpen: false,
  showDialog: (isOpen) =>
    set(() => ({
      isOpen: isOpen,
    })),
}));

export default useDialogStore;
