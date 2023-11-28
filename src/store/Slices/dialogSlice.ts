import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialDialogState } from "@/interfaces/general-dto";

const initialState = InitialDialogState;

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    showDialog(state, action: PayloadAction<string>) {
      state.dialog.push(action.payload);
    },
    removeDialog(state, action: PayloadAction<string>) {
      state.dialog = state.dialog.filter((dialog) => dialog !== action.payload);
    },
  },
});

export const { showDialog, removeDialog } = dialogSlice.actions;

export default dialogSlice.reducer;
