import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "1rem", margin: "1rem" }}>
      <Link to="/">Counter</Link>
      <Link to="/post">Posts</Link>
    </div>
  );
};
export default Navbar;
