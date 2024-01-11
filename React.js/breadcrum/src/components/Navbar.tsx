import { NavLink } from "react-router-dom";

const Navbar = () => {
  const handleActiveColor = ({
    isActive,
    isPending,
  }: {
    isActive: boolean;
    isPending: boolean;
  }) =>
    `font-semibold text-xl ${
      isPending ? "text-gray-400" : isActive ? "text-red-500" : ""
    }`;

  return (
    <nav className="border-b-2 px-6 py-2 flex gap-4">
      <NavLink className={(state) => handleActiveColor(state)} to="/">
        Home
      </NavLink>
      <NavLink className={(state) => handleActiveColor(state)} to="products">
        Products
      </NavLink>
    </nav>
  );
};
export default Navbar;
