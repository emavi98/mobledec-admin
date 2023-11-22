import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/interfaces/general-dto";

type orderProps = {
  orderList: Product[];
  productDialog: Product;
};

const initialState: orderProps = {
  orderList: [],
  productDialog: {
    cost: 0,
    delivery_days: 0,
    id: 0,
    minutes_mount: 0,
    product_name: "",
    sku: 0,
  },
};

export const orderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    addProduct(state, { payload }) {
      const productIndex = state.orderList.findIndex((item) => item?.sku);
      if (productIndex === -1) {
        state.orderList = [...state.orderList, payload];
      } else {
        state.orderList = state.orderList
          .filter((item) => item.sku !== state.productDialog.sku)
          .concat(payload);
      }
    },
    setProductDialog(state, { payload }) {
      state.productDialog = payload;
    },
    removeProduct(state, { payload }) {
      const newOrderList = state.orderList.filter(
        (item) => item.sku !== payload.sku
      );
      state.orderList = newOrderList;
    },
  },
});

export const { addProduct, removeProduct, setProductDialog } =
  orderSlice.actions;

export default orderSlice.reducer;
