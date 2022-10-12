import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './auth-operations';

const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    [register.fulfilled]: handleFulfilled,

    [login.fulfilled]: handleFulfilled,

    [logout.fulfilled](state) {
      state.isLoggedIn = false;
      state.token = false;
      state.user = { name: null, email: null };
    },
  },
});
