import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state) => {
      state.count++;
    },
    reduce: (state) => {
      state.count--;
    },
    set: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { add, reduce, set } = countSlice.actions;

export default countSlice.reducer;
