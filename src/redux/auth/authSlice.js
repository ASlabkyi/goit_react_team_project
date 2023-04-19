import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, fetchGetUserInfo } from './operations';

const initialState = {
  user: { username: null, email: null, userData: {}, id: '' },
  // todaySummary: {},
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
        state.user.username = action.payload.user.username;
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
        state.token = null;
        state.sid = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchGetUserInfo.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchGetUserInfo.fulfilled, (state, { payload }) => {
        state.isRefreshing = true;
        state.isLoading = false;
        state.user.username = payload.username;
        state.user.email = payload.email;
        state.user.id = payload.id;
        state.user.userData = payload.userData;
      })
      .addCase(fetchGetUserInfo.rejected, state => {
        state = initialState;
      }),
});

export const authReducer = authSlice.reducer;

// .addCase(refresh.pending, state => {
//   state.isRefreshing = true;
//   state.isLoading = true;
//   state.error = null;
// })
// .addCase(refresh.fulfilled, (state, { payload }) => {
//   state.isLoggedIn = true;
//   state.token = payload.newAccessToken;
//   state.sid = payload.sid;
//   state.refreshToken = payload.newRefreshToken;
//   state.isLoading = false;
//   state.isRefreshing = false;
// }),
