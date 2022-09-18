import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Jabba",
    desc: "Hot Module Replacement enabled.",
    reactions: {
      like: 0,
      dislike: 0,
    },
  },
  {
    id: 2,
    title: "Dabba",
    desc: "Live Reloading enabled.",
    reactions: {
      like: 0,
      dislike: 0,
    },
  },
];

// // Normal way

// const postSlice = createSlice({
//   name: "posts",
//   initialState,
//   reducers: {
//     addPost(state, action) {
//       state.push(action.payload);
//     },
//   },
// });

//  // reducer with callback to prepare new state and add in store

const postSlicePre = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPostPre: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, desc, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            desc,
            userId,
            reactions: {
              like: 0,
              dislike: 0,
            },
          },
        };
      },
    },
    addReactiion(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

// export const { addPost } = postSlice.actions;
export const { addPostPre, addReactiion } = postSlicePre.actions;

// export default postSlice.reducer;
export default postSlicePre.reducer;
