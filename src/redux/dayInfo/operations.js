// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDay, deleteProduct } from 'API';
import { token } from 'redux/auth/operations';

export const setFetchDay = createAsyncThunk(
  'dayInfo/fetchDay',
  async (date, thunkAPI) => {
    // const { date } = data;
    const { token: newToken } = thunkAPI.getState().auth;

    try {
      const response = await fetchDay(date);

      token.set(newToken);
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const setDeleteProduct = createAsyncThunk(
  '/day/deleteProduct',
  async (product, thunkAPI) => {
    const { token: newToken } = thunkAPI.getState().auth;

    try {
      const response = await deleteProduct(product);

      token.set(newToken);
      return { response, id: product.eatenProductId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
