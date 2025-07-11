import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./products/product.reducer";
import { ordersReducer } from "./orders/order.reducer";

export const store = configureStore({
  reducer: {
    productsStore: productReducer,
    ordersStore: ordersReducer,
  },
});
