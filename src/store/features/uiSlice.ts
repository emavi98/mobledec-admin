import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dialog: false,
};

export const uiSlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    showDialog(state) {
      state.dialog = !state.dialog;
    },
  },
});

export const { showDialog } = uiSlice.actions;

export default uiSlice.reducer;
