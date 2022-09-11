import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Signin = () => {
  let navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handeleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = userData;

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Signin Fail");
      console.log("Signin Fail");
    } else {
      window.alert("Signin Success");
      console.log("Signin Success");
      navigate("/");
    }
  };

  // console.log(userData);

  return (
    <div className="w-full flex items-center justify-center bg-blue-200 flex-col gap-3 h-screen ">
      <div className=" bg-white py-10 px-20 flex flex-col gap-4 rounded-lg overflow-hidden shadow-lg shadow-gray-400">
        <span className="font-bold text-4xl px-6">Sign up</span>
        <form method="POST" className="flex flex-col gap-4 p-5">
          <div className="border-b-2">
            <input
              className="focus:outline-none py-1 px-3 rounded text-base w-96"
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={userData.name}
              onChange={handleInput}
            />
          </div>
          <div className="border-b-2">
            <input
              className="focus:outline-none py-1 px-3 rounded text-base w-96"
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
              type="number"
              placeholder="Enter Your Mobile Number"
              name="phone"
              value={userData.phone}
              onChange={handleInput}
            />
          </div>
          <div className="border-b-2">
            <input
              className="focus:outline-none py-1 px-3 rounded text-base w-96"
              type="text"
              placeholder="Enter Your work"
              name="work"
              value={userData.work}
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
          <div className="border-b-2">
            <input
              className="focus:outline-none py-1 px-3 rounded text-base w-96"
              type="text"
              placeholder="Confirm your Password"
              name="cpassword"
              value={userData.cpassword}
              onChange={handleInput}
            />
          </div>
          <button
            className="bg-blue-500 py-3 rounded-xl font-semibold text-white mt-2 shadow-md shadow-blue-300 hover:bg-blue-400"
            type="submit"
            onClick={handeleSubmit}
          >
            Submit
          </button>
        </form>
        <div className="flex gap-2">
          <p>I alredy have an accout</p>
          <NavLink
            to="/login"
            className="text-blue-700 underline font-semibold hover:text-red-600"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Signin;
