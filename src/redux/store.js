import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsOperations/contactsSlice';
import { authSlice } from './auth/auth-slice';

export const store = configureStore({
  reducer: {
    contactsSlice: contactsSlice.reducer,
    authSlice: authSlice.reducer,
  },
});
