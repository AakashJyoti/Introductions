import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between  bg-slate-600 text-white h-12 items-center">
      <p className="text-3xl pl-3 ">Navbar</p>
      <div className="flex gap-4 pr-6">
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <Link to="/contact">
          <h4>Contact</h4>
        </Link>
        <Link to="/about">
          <h4>About</h4>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
