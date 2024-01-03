import { useState } from "react";
import "./App.css";

function App() {
  console.log("astr", Math.random());
  const [value, setValue] = useState({ value: 0 });

  const handleClick = () => {
    console.log("called", value);
    setValue({ value: 0 });
  };

  return (
    <>
      <h1>Main Value: {value.value}</h1>
      <button onClick={handleClick}>MUltiply by 5</button>
    </>
  );
}

export default App;
