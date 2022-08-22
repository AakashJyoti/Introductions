import { createSelector, createEntityAdaptor } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const userAdaptor = createEntityAdaptor({});
const intialState = userAdaptor.getInitialState();

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getusers: builder.query({
      query: () => "/users",

      validataStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      keepUnusedDataFor: 60,

      transformResponse: (responseData) => {
        const loadedUsers = responseData.map((user) => {
          user.id = user._id;
          return user;
        });
        return userAdaptor.setAll(intialState, loadedUsers);
      },

      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "User", id: "LIST" },
            ...result.ids.map((id) => ({ type: "User", id })),
          ];
        } else return [{ type: "User", id: "LIST" }];
      },
    }),
  }),
});
