import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./constant";

export const addToCart = (data) => {
  //   console.log("action Called", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeFromCart = (data) => {
  //   console.log("action Called", data);
  return {
    type: REMOVE_FROM_CART,
    data: data,
  };
};

export const clearCart = () => {
  //   console.log("action Called", data);
  return {
    type: CLEAR_CART,
  };
};
