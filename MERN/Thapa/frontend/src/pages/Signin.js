import { NavLink } from "react-router-dom";

const Signin = () => {
  return (
    <div className="w-full flex items-center justify-center bg-blue-200 flex-col gap-3 h-screen ">
      <div className=" bg-white py-10 px-20 flex flex-col gap-4 rounded-lg overflow-hidden shadow-lg shadow-gray-400">
        <span className="font-bold text-4xl px-6">Sign up</span>
        <form className="flex flex-col gap-4 p-5">
          <div className="border-b-2">
            <input
              className="focus:outline-none py-1 px-3 rounded text-base w-96"
              type="text"
              placeholder="Enter Your Name"
              name="name"
            />
          </div>
          <div className="border-b-2">
            <input
              className="focus:outline-none py-1 px-3 rounded text-base w-96"
              type="email"
              placeholder="Enter Your Email Id"
              name="email"
            />
          </div>
          <div className="border-b-2">
            <input
              className="focus:outline-none py-1 px-3 rounded text-base w-96"
              type="number"
              placeholder="Enter Your Mobile Number"
              name="phone"
            />
          </div>
          <div className="border-b-2">
            <input
              className="focus:outline-none py-1 px-3 rounded text-base w-96"
              type="text"
              placeholder="Enter Your Profession"
              name="profession"
            />
          </div>
          <div className="border-b-2">
            <input
              className="focus:outline-none py-1 px-3 rounded text-base w-96"
              type="password"
              placeholder="Enter Your Pasowrd"
              name="password"
            />
          </div>
          <div className="border-b-2">
            <input
              className="focus:outline-none py-1 px-3 rounded text-base w-96"
              type="text"
              placeholder="Confirm your Password"
              name="cpassword"
            />
          </div>
          <button
            className="bg-blue-500 py-3 rounded-xl font-semibold text-white mt-2 shadow-md shadow-blue-300 hover:bg-blue-400"
            type="submit"
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
