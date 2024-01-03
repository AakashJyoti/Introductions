import { useState } from "react";

export default function Multiple() {
  const [baseNumber, setBaseNumber] = useState(1);

  const updatedNumber = baseNumber * 5;

  const handleClick = () => {
    setBaseNumber((prev) => prev + 1);
  };

  return (
    <div>
      <p>BaseNumber = {baseNumber}</p>
      <button onClick={handleClick}>Multiply 5</button>
      <p>{updatedNumber}</p>
    </div>
  );
}
