import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full flex items-center justify-center bg-blue-200 flex-col gap-3 h-screen">
      <p className="text-6xl font-bold text-red-500">
        Error 404: Sorry, Page not found
      </p>
      <p className="text-2xl">
        Please go back to <span className="font-semibold"> Home page</span>
      </p>
      <button className="bg-blue-500 py-3 rounded-xl font-semibold text-white mt-2 w-40 text-2xl shadow-lg shadow-blue-300 hover:bg-blue-400">
        <NavLink to="/">Home</NavLink>
      </button>
    </div>
  );
};
export default Error;
