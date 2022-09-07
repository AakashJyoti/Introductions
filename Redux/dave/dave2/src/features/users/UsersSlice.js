import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "jabba" },
  { id: "1", name: "hikaru" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
