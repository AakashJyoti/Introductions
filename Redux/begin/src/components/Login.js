import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="button"
        onClick={() => {
          dispatch(
            login({
              name: "Aakash",
              age: 24,
              email: "ladkaAbhiBhiNahiKartaJob",
            })
          );
        }}
      >
        Login
      </button>
      <button className="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default Login;
