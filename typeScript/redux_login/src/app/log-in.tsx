"use client";

import { logIn, logout, toggleModerator } from "@/redux/features/authSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Login() {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { isAuth } = useAppSelector((state) => state.authReducer.value);

  const onClickLogIn = () => {
    dispatch(logIn(userName));
    setUserName("");
  };

  const onClickLogOut = () => {
    dispatch(logout());
  };

  const onClickToggle = () => {
    dispatch(toggleModerator());
  };

  return (
    <div className="m-5">
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="text-black"
      />
      <br />
      <button
        onClick={onClickLogIn}
        className="text-black bg-white px-4 py-2 m-4 rounded"
      >
        Log In
      </button>
      <button
        onClick={onClickLogOut}
        className="text-black bg-white px-4 py-2  m-4 rounded"
      >
        Log Out
      </button>
      <br />
      {isAuth && (
        <button
          onClick={onClickToggle}
          className="text-black bg-white px-4 py-2  m-1 rounded"
        >
          Toggle Moderator Status
        </button>
      )}
    </div>
  );
}
