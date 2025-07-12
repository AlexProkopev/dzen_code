import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProduct,
  fetchProductById,
  fetchProductTypes,
} from "./product.fetch";

const initialState = {
  products: [],
  currentProduct: null,
  types: [],
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
    clearState() {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });

    builder.addCase(fetchProductTypes.fulfilled, (state, { payload }) => {
      state.types = payload;
    });
    builder.addCase(fetchProduct.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.products = payload.data;
      state.page = payload.page;
      state.limit = payload.limit;
      state.total = payload.total;
      state.totalPages = payload.totalPages;
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

export const { setPage, clearState } = productsReducers.actions;
export const productReducer = productsReducers.reducer;
