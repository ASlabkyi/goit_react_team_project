import { createSlice } from '@reduxjs/toolkit';
import { calculateDailyRate } from './operations';

export const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState: {
    dailyRate: null,
    isLoading: false,
    error: null,
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
      });
  },
});

