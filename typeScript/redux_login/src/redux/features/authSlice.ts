import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isAuth: Boolean;
  userName: String;
  uuid: String;
  isModerator: Boolean;
};

const initialState = {
  value: {
    isAuth: false,
    userName: "",
    uuid: "",
    isModerator: false,
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          userName: action.payload,
          uuid: "astrdscdsk",
          isModerator: false,
        },
      };
    },
    toggleModerator: (state) => {
      state.value.isModerator = !state.value.isModerator;
    },
  },
});

export const { logIn, logout, toggleModerator } = auth.actions;
export default auth.reducer;
