import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incAmount, setIncAmount] = useState(0);
  const [decAmount, setDecAmount] = useState(0);

  const resetValue = () => {
    setDecAmount(0);
    setIncAmount(0);
    dispatch(reset());
  };

  const addValue = Number(incAmount) || 0;
  const removeValue = Number(decAmount) || 0;

  return (
    <section className="counter">
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => resetValue()}>Reset</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input
          type="number"
          value={incAmount}
          onChange={(e) => setIncAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add
        </button>
      </div>
      <div>
        <input
          type="number"
          value={decAmount}
          onChange={(e) => setDecAmount(e.target.value)}
        />
        <button onClick={() => dispatch(decrementByAmount(removeValue))}>
          Remove
        </button>
      </div>
    </section>
  );
};
export default Counter;
