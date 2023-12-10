import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialDialogState } from "@/interfaces/general-dto";
import { Client, Order } from "@/interfaces/table-dto";

const initialState = InitialDialogState;

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    showDialog(state, action: PayloadAction<string>) {
      state.dialog = [...state.dialog, action.payload];
      /*  console.log(state.dialog); */
    },
    removeDialog(state, action: PayloadAction<string>) {
      state.dialog = state.dialog.filter((dialog) => dialog !== action.payload);
    },
    setDataDialog(state, action: PayloadAction<Order | Client>) {
      state.data = action.payload;
    },
  },
});

export const { showDialog, removeDialog, setDataDialog } = dialogSlice.actions;

export default dialogSlice.reducer;
