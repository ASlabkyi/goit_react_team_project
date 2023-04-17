import { createSlice } from '@reduxjs/toolkit';

const initialState = false;
const ModalOpenedSlice = createSlice({
  name: 'modalopened',
  initialState,
  reducers: {
    setModalOpened(_, action) {
      return action.payload;
    },
  },
});

export const { setModalOpened } = ModalOpenedSlice.actions;
export const modalOpenedReducer = ModalOpenedSlice;
