import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { userGetInfo } from 'API';

axios.defaults.baseURL = process.env.REACT_APP_URL;

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);
      thunkAPI.dispatch(
        login({ email: credentials.email, password: credentials.password })
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);

      token.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/logout');
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

// export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
//   const { refreshToken, sid } = thunkAPI.getState().auth;
//   if (!refreshToken || !sid) {
//     return thunkAPI.rejectWithValue();
//   }
//   token.set(refreshToken);

//   try {
//     const { data } = await userRefresh({
//       sid,
//     });

//     token.set(data.newAccessToken);
//     const user = await userGetInfo();

//     thunkAPI.dispatch(userGetInfo());

//     return {
//       user: user.username,
//       sid: data.sid,
//       newRefreshToken: data.newRefreshtoken,
//       newAccessToken: data.newAccessToken,
//     };
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

export const fetchGetUserInfo = createAsyncThunk(
  '/user',
  async (_, thunkAPI) => {
    const { token: newToken } = thunkAPI.getState().auth;
    token.set(newToken);

    try {
      const res = await userGetInfo();
      return res;
    } catch (error) {
      token.unset(newToken);
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
