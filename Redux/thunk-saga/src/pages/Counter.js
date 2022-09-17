import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmout,
  decrementByAmout,
} from "../slices/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const [countNum, setCountNum] = useState(0);

  const resetAll = () => {
    dispatch(reset());
    setCountNum(0);
  };

  return (
    <div style={{ width: "100vw", textAlign: "center", margin: "2rem 0" }}>
      <p>Counter</p>
      <div>
        <button
          onClick={() => dispatch(increment())}
          style={{ padding: "5px 10px" }}
        >
          +
        </button>
        <span style={{ padding: "2rem" }}>{count}</span>

        <button
          onClick={() => dispatch(decrement())}
          style={{ padding: "5px 10px" }}
        >
          -
        </button>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <p>Increment By Amount</p>

        <button
          style={{ padding: "5px 10px" }}
          onClick={() => dispatch(incrementByAmout(countNum))}
        >
          Add
        </button>
        <input
          type="text"
          value={countNum}
          onChange={(e) => setCountNum(Number(e.target.value))}
          style={{
            textAlign: "center",
            fontSize: "16px",
            width: "5rem",
            padding: "4px 0",
          }}
        />
        <button
          style={{ padding: "5px 10px" }}
          onClick={() => dispatch(decrementByAmout(countNum))}
        >
          Sub
        </button>
      </div>
      <button
        onClick={() => resetAll()}
        style={{ padding: "5px 10px", marginTop: "1rem" }}
      >
        Reset
      </button>
    </div>
  );
};
export default Counter;
