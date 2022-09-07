import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decremant,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmout, setIncrementAmount] = useState(0);
  const [decremantAmount, setDecrementAmount] = useState(0);

  const addValue = Number(incrementAmout) || 0;
  const subValue = Number(decremantAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    setDecrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decremant())}>-</button>
        <button onClick={() => resetAll()}>reset</button>
      </div>
      <div>
        <input
          type="text"
          value={incrementAmout}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
      </div>
      <div>
        <input
          type="text"
          value={decremantAmount}
          onChange={(e) => setDecrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(decrementByAmount(subValue))}>
          Subtract Amount
        </button>
      </div>
    </section>
  );
};

export default Counter;
