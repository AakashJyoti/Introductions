import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal.tsx";

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export default store;
