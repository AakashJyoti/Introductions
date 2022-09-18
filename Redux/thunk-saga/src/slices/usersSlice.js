import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Abba" },
  { id: "1", name: "Dabba" },
  { id: "2", name: "Jabba" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
