import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full flex items-center justify-center bg-blue-200 flex-col gap-3 h-screen ">
      <div className=" bg-white py-10 px-20 flex flex-col gap-4 rounded-lg overflow-hidden shadow-lg shadow-gray-400">
        <span className="font-bold text-4xl px-6">Login</span>
        <form action="" className="flex flex-col gap-4 p-5">
          <div className="border-b-2">
            <input
              className="focus:outline-none py-1 px-3 rounded text-base  w-96"
              type="email"
              placeholder="Enter Your Email Id"
              name="email"
            />
          </div>
          <div className="border-b-2">
            <input
              className="focus:outline-none py-1 px-3 rounded text-base  w-96"
              type="password"
              placeholder="Enter Your Pasowrd"
              name="password"
            />
          </div>
          <button
            className="bg-blue-500 py-3 rounded-xl font-semibold text-white mt-4 shadow-md shadow-blue-300"
            type="submit"
          >
            Submit
          </button>
        </form>
        <div className="flex gap-2">
          <p>I don't have any account</p>
          <NavLink
            to="/signin"
            className="text-blue-700 underline font-semibold"
          >
            Signin
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Login;
