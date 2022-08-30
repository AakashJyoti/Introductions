import { useReducer } from "react";

// const [state, dispatch] = useReducer(reducer, initialValue)

const initialValue = 0;

const reducer = (state, action) => {
  if (action.type === "increment") {
    state += 1;
  }
  if (action.type === "decrement") {
    state -= 1;
  }
  //   Also done with switch case statement
  return state;
};

export { reducer };

const useReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};
export default useReducer;
