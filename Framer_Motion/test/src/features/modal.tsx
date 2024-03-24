import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    value: {
      isModalActive: false,
      type: "",
    },
  },
  reducers: {
    openModal: (state, action) => {
      state.value = { isModalActive: true, type: action.payload };
    },
    closeModal: (state) => {
      state.value = { isModalActive: false, type: "" };
    },
  },
});

export default modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
