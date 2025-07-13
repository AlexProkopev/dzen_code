import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../api";


export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async ({ page = 1, limit = 10 }, thunkApi) => {
    try {
      const response = await axios.get(`${apiUrl}orders`, {
        params: { page, limit },
      });
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchOrdersById = createAsyncThunk(
  "orders/fetchOrdersById",
  async (id, thunkApi) => {
    try {
      const response = await axios.get(`${apiUrl}orders/${id}`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deleteOrder = createAsyncThunk(
  "orders/deleteOrder",
  async (id, thunkApi) => {
    try {
      await axios.delete(`${apiUrl}orders/${id}`);
      return id; 
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);