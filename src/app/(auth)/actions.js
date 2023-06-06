import axios from 'axios';
import { setToken, setUser } from '../reducers/authSlice';

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://192.168.16.90:8000/api/login', {
        email: email,
        password: password,
      });

      const { token, user } = response.data;

      dispatch(setToken(token));
      dispatch(setUser(user));

      // Handle success or redirect logic here
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error.response.data.message || 'An error occurred';
      // Handle error or display error message here
    }
  };
};
