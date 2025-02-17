import { RootState } from '@/redux/store';
import { IUser } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

export interface IAuthState {
  user: null | IUser;
  token: null | string;
  isAuthenticated: boolean;
}

const initialState: IAuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const getUserInfo = (state: RootState) => state.auth.user;
