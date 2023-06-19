import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Jabba" },
  { id: "1", name: "Astroworld" },
  { id: "2", name: "Astra" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
