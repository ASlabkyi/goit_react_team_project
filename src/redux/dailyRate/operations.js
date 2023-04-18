import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const calculateDailyRate = createAsyncThunk(
  'dailyRate/calculateDailyRate',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://slimmom-backend.goit.global/daily-rate',
        formData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const calculateDailyLoggedIn = createAsyncThunk(
  'dailyRate/calculateDailyLoggedIn',
  async (value, { rejectWithValue }) => {
    const { id, data } = value;
    // console.log(id);
    // console.log(data);
    try {
      const response = await axios.post(
        `https://slimmom-backend.goit.global/daily-rate/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
