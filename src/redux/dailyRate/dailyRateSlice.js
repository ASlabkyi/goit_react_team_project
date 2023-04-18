import { createSlice } from '@reduxjs/toolkit';
import { calculateDailyRate, calculateDailyLoggedIn } from './operations';

export const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState: {
    dailyRate: null,
    isLoading: false,
    error: null,
    summaries: [],
    notAllowedProducts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(calculateDailyRate.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(calculateDailyRate.fulfilled, (state, action) => {
        state.dailyRate = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(calculateDailyRate.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Something went wrong';
      })
      .addCase(calculateDailyLoggedIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(calculateDailyLoggedIn.fulfilled, (state, action) => {
        console.log(action);
        state.dailyRate = action.payload;
        state.isLoading = false;
        state.error = null;
        state.summaries = action.payload.summaries;
        state.notAllowedProducts = action.payload.notAllowedProducts;
      })
      .addCase(calculateDailyLoggedIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Something went wrong';
      })
      
  },
});

