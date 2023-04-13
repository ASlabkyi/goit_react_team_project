import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, id: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => builder,
});
