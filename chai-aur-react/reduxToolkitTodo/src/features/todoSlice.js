import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { todos: [{ id: 1, text: "hellow world" }] };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {},
    removeTodo: () => {},
  },
});
