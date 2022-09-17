import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count >= 1) {
        state.count -= 1;
      }
    },
    reset: (state) => {
      state.count = initialState.count;
    },
    incrementByAmout: (state, actions) => {
      state.count += actions.payload;
    },
    decrementByAmout: (state, actions) => {
      if (state.count <= actions.payload) {
        state.count = initialState.count;
      } else {
        state.count -= actions.payload;
      }
    },
  },
});

export const {
  increment,
  decrement,
  reset,
  incrementByAmout,
  decrementByAmout,
} = counterSlice.actions;
export default counterSlice.reducer;
