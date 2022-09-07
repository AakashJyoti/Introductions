import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART called", action);
      return [action.data, ...data];

    case REMOVE_FROM_CART:
      console.log("REMOVE_FROM_CART called", action);
      // if (data.length) {
      //   data.length = data.length - 1;
      // }
      const remainItem = data.filter((item) => item.id !== action.data);
      return [...remainItem];

    case CLEAR_CART:
      console.log("CLEAR_CART called", action);
      data = [];
      return [...data];

    default:
      return data;
  }
};
