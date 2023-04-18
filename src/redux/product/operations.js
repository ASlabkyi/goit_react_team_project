import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },

    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const fetchProducts = createAsyncThunk(
    'products',
    async (search, thunkAPI) => {
        const { accessToken } = thunkAPI.getState().auth;
        try {
            const response = await axios.get(`/product`, {
                params: { search }
            });
            token.set(accessToken);

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addProduct = createAsyncThunk(
    'products/add',
    async (data, thunkApi) => {
        try {
            const response = await axios.post('day', data);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);