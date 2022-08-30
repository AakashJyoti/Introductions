import { useMemo, useState } from "react";
// const value =  useMemo(() => callback, [dependency])

const useMemo = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    return setMyNum(myNum + 1);
  };

  const countNum = (num) => {
    for (let i = 0; i <= 100000; i++) {}
    return num;
  };

  const CheckData = useMemo(() => {
    return countNum(myNum);
  }, [myNum]);

  return (
    <div>
      <button onClick={getValue}>Counter</button>
      <p>{CheckData}</p>

      <button onClick={() => setShow(!show)}>Show / Hide</button>
    </div>
  );
};
export default useMemo;
