import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const postAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = postAdapter.getInitialState({
  status: "idle", //'idle | 'loading' | 'succeeded' | 'failed'
  error: null,
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const { data } = await axios.get(POSTS_URL);
    return data;
  } catch (error) {
    return error.message;
  }
});

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (initialPost) => {
    try {
      const { data } = await axios.post(POSTS_URL, initialPost);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (initialPost) => {
    const { id } = initialPost;
    try {
      const { data } = await axios.put(`${POSTS_URL}/${id}`, initialPost);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (initialPost) => {
    const { id } = initialPost;
    try {
      const response = await axios.delete(`${POSTS_URL}/${id}`);
      if (response.status === 200) return initialPost;
      return `${response?.status}: ${response.statusText}`;
    } catch (error) {
      return error.message;
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reactionAdded: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.entities[postId];
      if (existingPost) existingPost.reactions[reaction]++;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add date and reactions
        let min = 1;
        const loadedPosts = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            like: 0,
            dislike: 0,
          };
          return post;
        });
        // Add any fetch post to the array
        // state.posts = state.posts.concat(loadedPosts); //---> Old code
        postAdapter.upsertMany(state, loadedPosts); //---> New Code
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        action.payload.userId = Number(action.payload.userId);
        action.payload.date = new Date().toISOString();
        action.payload.reactions = {
          like: 0,
          dislike: 0,
        };
        console.log(action.payload);
        // state.posts.push(action.payload); //---> Old code
        postAdapter.addOne(state, action.payload); //---> New Code
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Update could not be complete", action.payload);
          return;
        }

        // const { id } = action.payload; //---> Old Code
        action.payload.date = new Date().toISOString();
        // const posts = state.posts.filter((post) => post.id !== id); //---> Old Code
        // state.posts = [...posts, action.payload]; //--> Old code
        postAdapter.upsertOne(state, action.payload); //---> New Code
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Delete could not be complete", action.payload);
          return;
        }

        const { id } = action.payload;
        // const posts = state.posts.filter((post) => post.id !== id); //---> Old Code
        // state.posts = posts; //---> Old code
        postAdapter.removeOne(state, id); //---> New Code
      });
  },
});

// export const selectAllPosts = (state) => state.posts.posts; //---> Old Code
export const getPostStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

// export const selectPostById = (state, postId) =>
//   state.posts.posts.find((post) => post.id === postId); //---> Old Code\

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postAdapter.getSelectors((state) => state.posts);

export const selectPostByUser = createSelector(
  [selectAllPosts, (state, userId) => userId],
  (posts, userId) => posts.filter((post) => post.userId === userId)
);

export const { reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
