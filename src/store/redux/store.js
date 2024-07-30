import { configureStore } from '@reduxjs/toolkit';
import countReducer from './slice';

const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});

export default store;
