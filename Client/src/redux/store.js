import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from './reducer';

const store = configureStore({
  reducer: reducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production', 
});

export default store;
