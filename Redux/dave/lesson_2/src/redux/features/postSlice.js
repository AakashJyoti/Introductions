import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Learning redux toolkit",
    content: "I'm so bad in this so trying to get some help",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      like: 0,
      dislike: 0,
    },
  },
  {
    id: "2",
    title: "Slices...",
    content: "Why we have slices in features directory",
    date: sub(new Date(), { minutes: 20 }).toISOString(),
    reactions: {
      like: 0,
      dislike: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, userId) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
            reactions: {
              like: 0,
              dislike: 0,
            },
          },
        };
      },
    },
    reactionAdded: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) existingPost.reactions[reaction]++;
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
