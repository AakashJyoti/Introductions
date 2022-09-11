import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.status === 400 || data.status === 422 || !data) {
      window.alert("Login Fail");
      console.log("Login Fail");
    } else {
      window.alert("Login Success");
      console.log("Login Success");
      navigate("/");
    }
  };

  return (
    <div className="w-full flex items-center justify-center bg-blue-200 flex-col gap-3 h-screen ">
      <div className=" bg-white py-10 px-20 flex flex-col gap-4 rounded-lg overflow-hidden shadow-lg shadow-gray-400">
        <span className="font-bold text-4xl px-6">Login</span>
        <form method="POST" className="flex flex-col gap-4 p-5">
          <div className="border-b-2">
            <input
              className="focus:outline-none py-1 px-3 rounded text-base  w-96"
              type="email"
              placeholder="Enter Your Email Id"
              name="email"
              value={userData.email}
              onChange={handleInput}
            />
          </div>
          <div className="border-b-2">
            <input
              className="focus:outline-none py-1 px-3 rounded text-base w-96"
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={userData.password}
              onChange={handleInput}
            />
          </div>
          <button
            className="bg-blue-500 py-3 rounded-xl font-semibold text-white mt-4 shadow-md shadow-blue-300 hover:bg-blue-400"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        <div className="flex gap-2">
          <p>I don't have any account</p>
          <NavLink
            to="/signin"
            className="text-blue-700 underline font-semibold hover:text-red-600"
          >
            Signin
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
