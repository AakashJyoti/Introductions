import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);

  return (
    <>
      <div>
        <p>Count {count} </p>
      </div>

      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  );
}
