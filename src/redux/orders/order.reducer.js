import { createSlice } from "@reduxjs/toolkit";
import { deleteOrder, fetchOrders, fetchOrdersById } from "./order.fetch";

const initialState = {
  orders: null,
  currentOrder: null,
  isLoading: false,
  isLoadingDetails: false,
  isError: null,
  page: 1,
  totalPages: 1,
  totalCount: 0,
};

const ordersReducers = createSlice({
  name: "ordersReducer",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    clearState(){
      return {
        ...initialState,
      };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.orders = payload.orders;
      state.page = payload.page;
      state.totalPages = payload.totalPages;
      state.totalCount = payload.totalCount;
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
      state.isLoadingDetails = true;
      state.isError = null;
    });
    builder.addCase(fetchOrdersById.fulfilled, (state, { payload }) => {
      state.isLoadingDetails = false;
      state.currentOrder = payload;
    });
    builder.addCase(fetchOrdersById.rejected, (state, { payload }) => {
      state.isLoadingDetails = false;
      state.isError = payload;
      
    });

    builder.addCase(deleteOrder.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });

    builder.addCase(deleteOrder.fulfilled, (state, { payload: deletedId }) => {
      state.isLoading = false;
      if (state.orders) {
        state.orders = state.orders.filter((order) => order._id !== deletedId);
      }
    });

    builder.addCase(deleteOrder.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload;
    });
  },
});
export const { setPage,clearState } = ordersReducers.actions;
export const ordersReducer = ordersReducers.reducer;
