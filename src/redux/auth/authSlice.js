import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './operations';

const initialState = {
  user: { username: null, email: null, userData: {} },
  accessToken: null,
  refreshToken: null,
  sessionId: null,
  isLoggedIn: false,
  isFetchingCurrent: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.username;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sessionId = action.payload.sid;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sessionId = action.payload.sid;
      state.isLoggedIn = true;
    },
    [logout.fulfilled](state, action) {
      state.user = { username: null, email: null, userData: {} };
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sessionId = null;
      state.isLoggedIn = false;
    },

    //     [fetchCurrentUser.pending](state) {
    //       state.isFetchingCurrent = true;
    //     },
    //     [fetchCurrentUser.fulfilled](state, action) {
    //       const { data, refresh } = action.payload;

    //       state.user = data;
    //       state.accessToken = refresh.newAccessToken;
    //       state.refreshToken = refresh.newRefreshToken;
    //       state.sessionId = refresh.sid;
    //       state.isFetchingCurrent = false;
    //       state.isLoggedIn = true;
    //     },
    //     [fetchCurrentUser.rejected](state) {
    //       state.isFetchingCurrent = false;
    //     },
  },
});

export const authReducer = authSlice.reducer;
