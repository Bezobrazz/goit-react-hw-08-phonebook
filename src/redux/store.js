import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import { authSliceReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authSliceReducer,
  },
});
