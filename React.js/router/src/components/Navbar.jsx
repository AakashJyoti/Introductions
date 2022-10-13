import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink
        className="navLinks"
        to="/"
        // style={(isActive) => {
        //   return { color: isActive && "red" };
        // }}
      >
        Home
      </NavLink>
      <NavLink className="navLinks" to="posts">
        Posts
      </NavLink>
      <NavLink className="navLinks" to="contact">
        Contact
      </NavLink>
      <NavLink className="navLinks" to="about">
        About
      </NavLink>
    </div>
  );
};
export default Navbar;
