import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Product,
  lengthType,
  InitialOrderState,
} from "@/interfaces/general-dto";

const initialState = InitialOrderState;

export const orderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      const productIndex = state.orderList.findIndex((item) => item?.sku);
      if (productIndex === lengthType.notFound) {
        state.orderList = [...state.orderList, action.payload];
      } else {
        state.orderList = state.orderList
          .filter((item) => item.sku !== state.productDialog.sku)
          .concat(action.payload);
      }
    },
    setProductDialog(state, action: PayloadAction<Product>) {
      state.productDialog = action.payload;
    },
    removeProduct(state, action: PayloadAction<Product>) {
      const newOrderList = state.orderList.filter(
        (item) => item.sku !== action.payload.sku
      );
      state.orderList = newOrderList;
    },
  },
});

export const { addProduct, removeProduct, setProductDialog } =
  orderSlice.actions;

export default orderSlice.reducer;
