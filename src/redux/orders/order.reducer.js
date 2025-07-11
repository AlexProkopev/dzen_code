import { createSlice } from "@reduxjs/toolkit";
import { deleteOrder, fetchOrders, fetchOrdersById } from "./order.fetch";

const initialState = {
  orders: null,
  currentOrder: null,
  isLoading: false,
  isError: null,
};

const ordersReducers = createSlice({
  name: "ordersReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.orders = payload;
    });

    builder.addCase(fetchOrders.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });

    builder.addCase(fetchOrders.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload;
    });

    builder.addCase(fetchOrdersById.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchOrdersById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.currentProduct = payload;
    });

    builder.addCase(deleteOrder.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });

    builder.addCase(deleteOrder.fulfilled, (state, { payload: deletedId }) => {
      state.isLoading = false;
      if (state.orders) {
        state.orders = state.orders.filter(order => order._id !== deletedId);
      }
    });

    builder.addCase(deleteOrder.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload;
    });
  },
});

export const ordersReducer = ordersReducers.reducer;
