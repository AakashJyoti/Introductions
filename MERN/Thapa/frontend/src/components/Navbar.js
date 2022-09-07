import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center h-12 bg-slate-500 px-10 justify-between shadow-lg shadow-gray-400 absolute w-screen">
      <Link to="/">
        <span className="text-white font-bold text-3xl">Logo</span>
      </Link>
      <div className="gap-8 flex">
        <Link to="/">
          <span className="text-white font-semibold text-xl hover:text-blue-300 active:text-white">
            Home
          </span>
        </Link>
        <Link to="/about">
          <span className="text-white font-semibold text-xl hover:text-blue-300 active:text-white">
            About
          </span>
        </Link>
        <Link to="/contact">
          <span className="text-white font-semibold text-xl hover:text-blue-300 active:text-white">
            Contact
          </span>
        </Link>
        <Link to="/login">
          <span className="text-white font-semibold text-xl hover:text-green-300 active:text-white">
            Login
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
