import { createApi } from '@reduxjs/toolkit/query/react'
import axios from 'axios';
import { setCredentials, logOut } from '../../features/auth/authSlice'

const baseQuery = async (args, api, extraOptions) => {
  const baseUrl = 'http://localhost:3500';
  const credentials = 'include';
  const headers = {
    ...extraOptions.headers,
  };
  
  const token = api.getState().auth.token;
  if (token) {
    headers["authorization"] = `Bearer ${token}`;
  }

  try {
    const response = await axios({
      url: `${baseUrl}${args.endpoint}`,
      method: args.method,
      data: args.body,
      headers,
      withCredentials: credentials === 'include',
    });

    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    if (error.response) {
      return {
        data: null,
        error: {
          status: error.response.status,
          data: error.response.data,
        },
      };
    } else {
      return {
        data: null,
        error: {
          status: null,
          data: null,
        },
      };
    }
  }
};

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    console.log('sending refresh token');
    // send refresh token to get new access token
    const refreshResult = await baseQuery({ endpoint: '/refresh', method: 'GET' }, api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      // store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
