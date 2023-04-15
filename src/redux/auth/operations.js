import { createAsyncThunk } from '@reduxjs/toolkit';

const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await axios.post('user/logOut');
  } catch (error) {}
});
