import { useContext } from "react";
import { CartContext } from "../context/ContextProvider";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="w-96 flex flex-col shadow-2xl p-3 m-3 rounded-2xl bg-slate-200">
      <img className="rounded-2xl" src={prod.image} alt={prod.name} />
      <div className="flex justify-between p-3">
        <span className="text-lg font-bold">{prod.name}</span>
        <span className="font-semibold">₹ {prod.price.substring(0, 3)} </span>
      </div>

      {cart.includes(prod) ? (
        <button
          className="border bg-red-500 text-white py-3 font-semibold rounded-full"
          onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="border bg-green-500 text-white py-3 font-semibold rounded-full"
          onClick={() => setCart([...cart, prod])}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
export default SingleProduct;
