import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import postReducer from "./slices/postSlice";
import userReducer from "./slices/usersSlice";

export const store = configureStore({
  reducer: { counter: counterReducer, posts: postReducer, users: userReducer },
});
