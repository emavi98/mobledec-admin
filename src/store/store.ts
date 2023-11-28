import { configureStore } from "@reduxjs/toolkit";
//import counterReducer from './features/counterSlice';
import dialogSliceReducer from "./Slices/dialogSlice";
import orderSliceReducer from "./Slices/orderSlice";
import { userApi } from "../services/userApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    dialogSliceReducer,
    orderSliceReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
