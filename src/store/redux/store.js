import { configureStore } from '@reduxjs/toolkit';
import countReducer from './count';
import todoReducer from './todo'

const store = configureStore({
  reducer: {
    todo: todoReducer,
    counter: countReducer,
  },
});

export default store;
