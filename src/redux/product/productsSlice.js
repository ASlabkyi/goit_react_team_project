import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts, addProduct } from './operations';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: {
    [fetchProducts.pending](state, action) {
      state.isLoading = true;
    },

    [fetchProducts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.products = action.payload;
    },
    [fetchProducts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addProduct.fulfilled](state, action) {
      state.dayInfo = action.payload.day;
      state.isLoading = false;
    },
    [addProduct.pending](state) {
      state.error = null;
      state.isLoading = true;
    },
    [addProduct.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const productReducer = productsSlice.reducer;
