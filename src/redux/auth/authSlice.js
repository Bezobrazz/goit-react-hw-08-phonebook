import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from '../../redux/operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logoutThunk.fulfilled, state => {
        // state.user = {
        //   name: '',
        //   email: '',
        // };
        // state.token = null;
        // state.isLoggedIn = false;
        return initialState;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authSliceReducer = authSlice.reducer;
