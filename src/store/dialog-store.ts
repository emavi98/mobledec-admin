import create from 'zustand';

interface DialogStore {
  dialogNames: string[];
  addDialog: (dialogName: string) => void;
  removeDialog: (dialogName: string) => void;
}

const useDialogStore = create<DialogStore>((set) => ({
  dialogNames: [],
  addDialog: (dialogName) =>
    set((state) => ({
      dialogNames: [...state.dialogNames, dialogName],
    })),
  removeDialog: (dialogName) =>
    set((state) => ({
      dialogNames: state.dialogNames.filter((name) => name !== dialogName),
    })),
}));

export default useDialogStore;
