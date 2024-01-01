import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/Hero.jpg";
import { CartContext } from "../context/ContextProvider";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  const total = useMemo(
    () => cart.reduce((acc, curr) => acc + Number(curr.price), 0),
    [cart]
  );

  return (
    <div className="flex flex-row h-14 w-full bg-black">
      <div>
        <img src={Logo} className="w-30 h-14 pl-5" alt="" />
      </div>

      <div className="w-full flex justify-around items-center text-2xl font-bold text-white">
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart ({cart.length}) *Rs : {total}
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
