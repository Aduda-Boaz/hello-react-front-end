import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import greetingReducer, { getGreetingAsync } from './greeting/greeting';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
},
  composeWithDevTools(applyMiddleware(thunk, logger)));
  store.dispatch(getGreetingAsync()); 

export default store;
