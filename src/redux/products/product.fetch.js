import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../api";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async ({ page = 1, limit = 10 }, thunkApi) => {
    try {
      const response = await axios.get(`${apiUrl}products`, {
        params: { page, limit },
      });
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
