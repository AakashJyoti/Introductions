import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const posts = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({ query: () => "posts" }),
  }),
});
