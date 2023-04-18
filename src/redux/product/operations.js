import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'redux/auth/operations';
import { searchProduct, addProduct } from 'API';

export const setSearchProduct = createAsyncThunk(
  'product/search',
  async (search, thunkAPI) => {
    const { token: newToken } = thunkAPI.getState().auth;

    token.set(newToken);
    try {
      const { data } = await searchProduct(search);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setAddProduct = createAsyncThunk(
  'product/add',
  async (product, thunkAPI) => {
    const { token: newToken } = thunkAPI.getState().auth;

    token.set(newToken);
    try {
      const { data } = await addProduct(product);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchProducts = createAsyncThunk(
//     'products',
//     async (search, thunkAPI) => {
//         const { accessToken } = thunkAPI.getState().auth;
//         try {
//             const response = await axios.get(`/product`, {
//                 params: { search }
//             });
//             token.set(accessToken);

//             return response.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

// export const addProduct = createAsyncThunk(
//     'products/add',
//     async (data, thunkApi) => {
//         try {
//             const response = await axios.post('day', data);
//             return response.data;
//         } catch (error) {
//             return thunkApi.rejectWithValue(error.message);
//         }
//     }
// );
