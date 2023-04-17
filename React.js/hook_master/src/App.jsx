import { useEffect, useState } from "react";
import "./App.css";

const obj = { msg: "hello" };

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("Counter 1 Updated ");
    return () => {
      console.log("cleaning up effects of counter 1");
    };
  }, [counter, obj]);

  return (
    <div className="App">
      <div>
        <button onClick={() => setCounter((prev) => prev + 1)}>
          Count :{counter}
        </button>
      </div>
      <div>
        <button onClick={() => setCounter2((prev) => prev + 1)}>
          Count :{counter2}
        </button>
      </div>
    </div>
  );
}

export default App;
