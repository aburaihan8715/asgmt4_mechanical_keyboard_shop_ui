import { RootState } from '@/redux/store';
import { createSlice } from '@reduxjs/toolkit';

export type TUser = {
  name: string;
  email: string;
  role: string;
  image: string;
};
type TAuthState = {
  user: null | TUser;
};

const initialState: TAuthState = {
  user: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

export const getCurrentUser = (state: RootState) => state.auth.user;
