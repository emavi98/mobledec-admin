import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dialog: false,
};

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
