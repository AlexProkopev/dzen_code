import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../api";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async ({ page = 1, limit = 10, type = "" }, thunkApi) => {
    try {
      const response = await axios.get(`${apiUrl}products`, {
        params: { page, limit, ...(type && { type }) },
      });
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchProductTypes = createAsyncThunk(
  "product/fetchProductTypes",
  async (_, thunkApi) => {
    try {
      const response = await axios.get(`${apiUrl}products/types`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (id, thunkApi) => {
    try {
      const response = await axios.get(`${apiUrl}products/${id}`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
