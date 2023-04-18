import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { userRefresh, userGetInfo } from 'API';

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

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const { refreshToken, sid } = thunkAPI.getState().auth;
  if (!refreshToken || !sid) {
    return thunkAPI.rejectWithValue();
  }
  token.set(refreshToken);

  try {
    const { data } = await userRefresh({
      sid,
    });
    token.set(data.newAccessToken);

    // const user = await userGetInfo();
    // console.log(user);

    thunkAPI.dispatch(userGetInfo());

    return data;
    // user: user.data,
    // sid: data.sid,
    // refreshToken: data.newRefreshtoken,
    // accessToken: data.newAccessToken,
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const fetchCurrentUser = createAsyncThunk(
//   'user/info',
//   async (_, { getState, rejectWithValue }) => {
//     const state = getState();
//     const persistedToken = state.auth.accessToken;

//     if (persistedToken === null) {
//       return rejectWithValue();
//     }
//     try {
//       token.set(persistedToken);
//       const { data } = await axios.get('/user');
//       return data;
//     } catch (error) {
//       if (error.response.status === 401) {
//         try {
//           const persistedSessionId = { sid: state.auth.sessionId };
//           console.log(persistedSessionId);
//           token.set(state.auth.refreshToken);
//           const refresh = await axios.post('/auth/refresh', persistedSessionId);
//           token.set(refresh.data.newAccessToken);
//           const { data } = await axios.get('/user');
//           return { data: data, refresh: refresh.data };
//         } catch (err) {
//           return rejectWithValue(err.message);
//         }
//       }
//       console.log(error.response.status);
//     }
//   }
// );
