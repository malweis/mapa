import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    getToken: (state) => {
      return state.token;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    getUser: (state) => {
      return state.user;
    },
    logOut: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setToken, getToken, setUser, getUser, logOut } = authSlice.actions;

export const selectedToken = (state) => {state.auth.token}
export const selectedUser = (state) => {state.auth.user}


export default authSlice.reducer;
