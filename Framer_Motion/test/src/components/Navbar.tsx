import { NavLink } from "react-router-dom";
import { links } from "../lib/routes";
import { useDispatch } from "react-redux";
import { openModal } from "../features/modal";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleOpenModal = (type: string) => dispatch(openModal(type));

  return (
    <div className="py-2 px-4 border-b shadow flex justify-center items-center gap-2 relative">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive, isPending }) =>
            isPending
              ? "bg-slate-200 py-1 px-2 rounded"
              : isActive
              ? "hover:bg-slate-300 hover:text-black w-20 h-8 flex justify-center items-center rounded bg-slate-500 text-white"
              : "hover:bg-slate-300 rounded w-20 h-8 flex justify-center items-center"
          }
        >
          {link.name}
        </NavLink>
      ))}
      <div className="space-x-2 absolute right-4">
        <button
          className="border-2 w-20 h-8 rounded"
          onClick={() => handleOpenModal("login")}
        >
          Login
        </button>
        <button
          className="border-2 w-20 h-8 rounded"
          onClick={() => handleOpenModal("signUp")}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
