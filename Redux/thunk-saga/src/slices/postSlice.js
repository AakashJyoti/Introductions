import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Jabba",
    desc: "Hot Module Replacement enabled.",
  },
  {
    id: 2,
    title: "Dabba",
    desc: "Live Reloading enabled.",
  },
  {
    id: 3,
    title: "Abba",
    desc: "Progress disabled.",
  },
  {
    id: 4,
    title: "Gabba",
    desc: "Overlay enabled.",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addPost } = postSlice.actions;

export default postSlice.reducer;
