import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center gap-10 h-10 items-center shadow border-b">
      <NavLink to="/">Home</NavLink>
      <NavLink to="products">Products</NavLink>
      <NavLink to="products_old">Products Old</NavLink>
    </nav>
  );
};

export default Navbar;
