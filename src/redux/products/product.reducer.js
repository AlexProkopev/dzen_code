import { createSlice } from "@reduxjs/toolkit";

import { fetchProduct, fetchProductById } from "./product.fetch";

const initialState = {
  products: null,
  currentProduct: null,
  isLoading: false,
  isError: null,
};

const productsReducers = createSlice({
  name: "productsReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
    });

    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });

    builder.addCase(fetchProduct.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload;
    });

    builder.addCase(fetchProductById.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProductById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.currentProduct = payload;
    });

    builder.addCase(fetchProductById.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload;
    });
  },
});

export const productReducer = productsReducers.reducer;
