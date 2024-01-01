import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="h-12 border-b border-2 shadow-md sticky top-0 flex justify-center items-center gap-3 bg-white z-10">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/blog"}>Blog</Link>
      </nav>
    </>
  );
};
export default Navbar;
