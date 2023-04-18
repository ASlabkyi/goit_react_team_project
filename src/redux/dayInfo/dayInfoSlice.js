import { createSlice } from '@reduxjs/toolkit';
import { setFetchDay } from './operations';

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
  extraReducers: builder =>
    builder
      .addCase(setFetchDay.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(setFetchDay.fulfilled, (state, { payload }) => {
        // state.id = payload.id;
        // state.eatenProducts = payload.eatenProducts;
        // state.date = payload.date;
        // state.daySummary = payload.daySummary;
        state.daySummary = payload;
        state.isLoading = false;
      })
      .addCase(setFetchDay.rejected, (state, { payload }) => {
        state.error = payload.error;
        state.isLoading = false;
      }),
});
