import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByValue,
  decrementByValue,
} from "../redux/features/counter/counterSlice";
import { useState } from "react";

export default function Counter() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const [number, setNumber] = useState("");

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  const onReset = () => {
    dispatch(reset());
  };

  const onIncrementByValue = () => {
    if (!parseInt(number)) return;
    dispatch(incrementByValue(parseInt(number)));
    setNumber("");
  };

  const onDecrementByValue = () => {
    if (!parseInt(number)) return;
    dispatch(decrementByValue(parseInt(number)));
    setNumber("");
  };

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>

      <br />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={onIncrementByValue}>+</button>
      <button onClick={onDecrementByValue}>-</button>
    </div>
  );
}
