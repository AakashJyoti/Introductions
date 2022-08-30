import { useEffect, useRef } from "react";
// to create a mutable variable which will no rerender the component
// can Access DOM element

// const {current : value} = useRef(initialValue)

const useRef = () => {
  const count = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    count.current += 1;
  });

  const focusOnInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>{count.current}</h1>

      <div>
        <input type="text" ref={inputRef} />
        <button onClick={focusOnInput}>Click</button>
      </div>
    </div>
  );
};
export default useRef;
