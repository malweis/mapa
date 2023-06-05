// actions.js

// Action types
export const SET_TOKEN = 'SET_TOKEN';
export const LOGOUT = 'LOGOUT';

// Action creators
export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

export const logout = () => ({
  type: LOGOUT,
});
