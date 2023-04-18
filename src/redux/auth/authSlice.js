import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refresh } from './operations';

const initialState = {
  user: { username: null, email: null, userData: {}, id: '' },
  todaySummary: {
    date: null,
    kcalLeft: null,
    kcalConsumed: null,
    dailyRate: null,
    percentsOfDailyRate: null,
    userId: null,
    id: null,
  },
  token: null,
  isLoading: false,
  error: null,
  refreshToken: '',
  sid: '',
  isLoggedIn: false,
  isRefreshing: false,
  id: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.accessToken;
        state.sid = action.payload.sid;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.id = action.payload.user.id;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sessionId = action.payload.sid;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = { username: null, email: null, userData: {} };
        state.isRefreshing = false;
        state.token = null;
        state.sid = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
      })
      .addCase(refresh.pending, state => {
        state.isRefreshing = true;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        console.log(payload);
        // state.user = payload.user;
        state.isLoggedIn = true;
        state.token = payload.accessToken;
        state.sid = payload.sid;
        state.refreshToken = payload.refreshToken;
        state.isLoading = false;
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
