import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers as needed
  },
});

export default store;
