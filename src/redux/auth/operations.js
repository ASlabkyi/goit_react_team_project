import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = process.env.REACT_APP_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);
      token.set(data.accessToken);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      console.log(data);
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

export const fetchCurrentUser = createAsyncThunk(
  'user/info',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      return rejectWithValue();
    }
    try {
      token.set(persistedToken);
      const { data } = await axios.get('/user');
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        try {
          const persistedSessionId = { sid: state.auth.sessionId };
          console.log(persistedSessionId);
          token.set(state.auth.refreshToken);
          const refresh = await axios.post('/auth/refresh', persistedSessionId);
          token.set(refresh.data.newAccessToken);
          const { data } = await axios.get('/user');
          return { data: data, refresh: refresh.data };
        } catch (err) {
          return rejectWithValue(err.message);
        }
      }
      console.log(error.response.status);
    }
  }
);
