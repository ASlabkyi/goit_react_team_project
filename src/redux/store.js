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
import {dailyRateSlice} from './dailyRate/dailyRateSlice';
import { productSlice } from './product/productsSlice';
import { dayInfoSlice } from './dayInfo/dayInfoSlice';
import { userInfoSlice } from './userInfo/userInfoSlice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    dailyRate: dailyRateSlice.reducer,
    product: productSlice.reducer,
    dayInfo: dayInfoSlice.reducer,
    userInfo: userInfoSlice.reducer,
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
