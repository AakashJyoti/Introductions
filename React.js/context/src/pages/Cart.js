import { useContext, useMemo } from "react";
import SingleProduct from "../components/SingleProduct";
import { CartContext } from "../context/ContextProvider";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const total = useMemo(
    () => cart.reduce((acc, curr) => acc + Number(curr.price), 0),
    [cart]
  );

  return (
    <div>
      <div>
        <div className="flex  justify-between p-3">
          <span className="text-xl">MY Cart</span>
          <span className="text-xl">Total: Rs:{total}</span>
        </div>

        {/* Cart Components */}
        <div className="m-6 flex flex-wrap flex-row justify-evenly">
          {cart.map((prod) => (
            <SingleProduct prod={prod} key={prod.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Cart;
