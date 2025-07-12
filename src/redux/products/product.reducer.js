import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct, fetchProductById } from "./product.fetch";

const initialState = {
  products: [],
  currentProduct: null,
  page: 1,
  limit: 10,
  total: 0,
  totalPages: 0,
  isLoading: false,
  isError: null,
};

const productsReducers = createSlice({
  name: "productsReducer",
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
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(fetchProduct.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.products = payload.data || [];
      state.page = payload.page || state.page;
      state.limit = payload.limit || state.limit;
      state.total = payload.total || 0;
      state.totalPages = payload.totalPages || 0;
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

export const { setPage,clearState } = productsReducers.actions;
export const productReducer = productsReducers.reducer;
