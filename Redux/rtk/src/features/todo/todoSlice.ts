import { createSlice, nanoid } from "@reduxjs/toolkit";

type Ttodo = {
  id: string;
  text: string;
};

const initialState: { todos: Ttodo[] } = {
  todos: [
    {
      id: "1",
      text: "Hello there",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload.text };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload.todo.id
      );
      state.todos.push(action.payload.todo);
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
