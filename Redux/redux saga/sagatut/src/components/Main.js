import { addToCart, removeFromCart, clearCart } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../Redux/productAction";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.productData);
  console.log("result from saga", result);

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      <div>
        <button onClick={() => dispatch(productList())}>
          Get Product List
        </button>
      </div>
      <div className="product-container">
        {result.map((product) => {
          return (
            <div className="product-item" key={product.id}>
              <img src={product.image} alt={product.name} width="80rem" />
              <div>{product.name}</div>
              <div>{product.brand}</div>
              <div>{product.catergory}</div>
              <div>{product.color}</div>
              <div>{product.price}</div>
              <div>
                <button onClick={() => dispatch(addToCart(product))}>
                  Add to Cart
                </button>
              </div>
              <div>
                <button onClick={() => dispatch(removeFromCart(product.id))}>
                  Remove from Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
