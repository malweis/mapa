// store.js

import {  combineReducers, applyMiddleware } from 'redux';
import configureStore from './configureStore';
import thunkMiddleware from 'redux-thunk';

// Define your reducer for token
const tokenReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return action.token;
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
};

// Combine multiple reducers if needed
const rootReducer = combineReducers({
  token: tokenReducer,
});

// Create the Redux store with thunk middleware
const store = configureStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
