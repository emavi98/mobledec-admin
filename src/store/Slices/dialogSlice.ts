import { createSlice } from "@reduxjs/toolkit";
import { InitialDialogState } from "@/interfaces/general-dto";

const initialState = InitialDialogState;

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    showDialog(state, { payload }) {
      state.dialog = payload;
    },
  },
});

export const { showDialog } = dialogSlice.actions;

export default dialogSlice.reducer;
