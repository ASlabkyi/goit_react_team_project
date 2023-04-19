import { createSlice } from '@reduxjs/toolkit';
import { setFetchDay } from './operations';
import { setAddProduct } from 'redux/product/operations';
import { setDeleteProduct } from './operations';
import { fetchGetUserInfo } from 'redux/auth/operations';

export const dayInfoSlice = createSlice({
  name: 'dayInfo',
  initialState: {
    id: null,
    eatenProducts: [],
    date: null,
    daySummary: null,
    isLoading: false,
    error: null,
    days: null,
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
        state.daySummary = payload.daySummary;
        state.eatenProducts = payload.eatenProducts;
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
        const newProducts = state.eatenProducts.filter(
          product => product.id !== payload.id
        );
        state.eatenProducts = newProducts;
      })
      .addCase(fetchGetUserInfo.fulfilled, (state, { payload }) => {
        state.days = payload.days;
      }),
});

export const { changeDate } = dayInfoSlice.actions;
