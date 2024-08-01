import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  todo: []
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action) => {
      state.todo.push(action.payload)
    },
    remove: (state, action) => {
      state.todo.splice(action.payload, 1)
    }
  }
});

export const { add, remove } = todoSlice.actions;

export default todoSlice.reducer;