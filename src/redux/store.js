import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { dailyRateSlice } from './dailyRate/dailyRateSlice';
import { productReducer } from './product/productsSlice';
import { dayInfoSlice } from './dayInfo/dayInfoSlice';
import { userInfoSlice } from './userInfo/userInfoSlice';
import { modalOpenedReducer } from './modal/modalOpenedSlice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['accessToken'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    dailyRate: dailyRateSlice.reducer,
    product: productReducer,
    dayInfo: dayInfoSlice.reducer,
    userInfo: userInfoSlice.reducer,
    modalOpenedReducer: modalOpenedReducer.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'contacts/fetchContacts/fulfilled',
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

export const persistor = persistStore(store);
