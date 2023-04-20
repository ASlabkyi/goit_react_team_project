import { createSlice } from '@reduxjs/toolkit';
import { setSearchProduct } from './operations';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(setSearchProduct.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(setSearchProduct.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.isLoading = false;
      })
      .addCase(setSearchProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
  // .addCase(setAddProduct.pending, state => {
  //   state.isLoading = true;
  //   state.error = null;
  // })
  // .addCase(setAddProduct.fulfilled, (state, { payload }) => {
  //   // state.products = payload.day.eatenProducts;
  //   state.isLoading = false;
  // }),
});

export const productReducer = productsSlice;
