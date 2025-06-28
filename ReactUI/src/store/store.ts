import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import bookingReducer from './slices/bookingSlice';
import userReducer from './slices/userSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    booking: bookingReducer,
    user: userReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;