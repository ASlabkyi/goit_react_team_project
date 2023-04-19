import { createSlice } from '@reduxjs/toolkit';
import { setFetchDay } from './operations';
import { setAddProduct } from 'redux/product/operations';
import { setDeleteProduct } from './operations';

export const dayInfoSlice = createSlice({
  name: 'dayInfo',
  initialState: {
    id: null,
    eatenProducts: [],
    date: null,
    daySummary: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    changeDate: (state, action) => {
      state.date = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(setFetchDay.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(setFetchDay.fulfilled, (state, { payload }) => {
        console.log(payload);
        // state.id = payload.id;
        // state.eatenProducts = payload.eatenProducts;
        // state.date = payload.date;
        state.daySummary = payload.daySummary;

        // state.daySummary = payload;
        state.isLoading = false;
      })
      .addCase(setFetchDay.rejected, (state, { payload }) => {
        state.error = payload.error;
        state.isLoading = false;
      })
      .addCase(setAddProduct.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(setAddProduct.fulfilled, (state, { payload }) => {
        state.eatenProducts = payload.day.eatenProducts;
        state.daySummary = payload.daySummary;
        state.id = payload.day.id;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(setAddProduct.rejected, (state, { payload }) => {
        state.error = payload.error;
        state.isLoading = false;
      })
      .addCase(setDeleteProduct.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(setDeleteProduct.fulfilled, (state, { payload }) => {
        state.daySummary = payload.response.newDaySummary;
        // console.log(newProducts);
        const newProducts = state.eatenProducts.filter(
          product => product.id !== payload.id
        );
        state.eatenProducts = newProducts;
      }),
});

export const { changeDate } = dayInfoSlice.actions;
