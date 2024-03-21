import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { api } from '../../config';
import { toastFNC } from '../../config/toast';

export const Login = createAsyncThunk('auth/login', async (data) => {
  try {
    const res = await axios.post(api + 'auth/login', data);
    return res;
  } catch (err) {
    return err.response;
  }
});
export const Signup = createAsyncThunk('auth/signup', async (data) => {
  try {
    const res = await axios.post(api + 'auth/signup', data);
    return res;
  } catch (err) {
    return err.response;
  }
});
export const getUser = createAsyncThunk('auth/getUser', async (data) => {
  try {
    const res = await axios.get(api + 'auth/user', {
      headers: {
        Authorization: `Bearer ${data}`,
      },
    });
    return res;
  } catch (err) {
    return err.response;
  }
});
const initialState = {
  authenticated: localStorage.getItem('token') ? true : false,
  user: null,
  pendingAuth: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.authenticated = false;
      state.user = null;
      localStorage.removeItem('token');
      toastFNC('logged out', 'success');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Login.pending, (state) => {
        state.pendingAuth = true;
      })
      .addCase(Login.fulfilled, (state, action) => {
        state.pendingAuth = false;
        if (action.payload.status === 201) {
          toastFNC('Login Success', 'success');
          state.authenticated = true;
          state.user = action.payload.data;
          localStorage.setItem('token', action.payload.data.Token);
        } else if (action.payload.status === 400) {
          toastFNC(action.payload.data.message[0], 'error');
        } else if (action.payload.status === 401) {
          toastFNC(action.payload.data.message, 'error');
        }
      })
      .addCase(Login.rejected, (state) => {
        state.pendingAuth = false;
        toastFNC('Login Failed', 'error');
      })
      .addCase(Signup.pending, (state) => {
        state.pendingAuth = true;
      })
      .addCase(Signup.fulfilled, (state, action) => {
        state.pendingAuth = false;
        console.log(action.payload);
        if (action.payload.status === 201) {
          toastFNC('Signup Success', 'success');
        } else if (action.payload.status === 400) {
          toastFNC(action.payload.data.message[0], 'error');
        } else {
          toastFNC(action.payload.data.message, 'error');
        }
      });
  },
});
export default authSlice.reducer;
export const { logout } = authSlice.actions;
