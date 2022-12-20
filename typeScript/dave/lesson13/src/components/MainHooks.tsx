import {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
  MouseEvent,
  KeyboardEvent,
} from "react";

interface User {
  id: number;
  username: string;
}

type TFibFunction = (n: number) => number;

function MainHooks() {
  // const [count, setCount] = useState<User>({} as User)
  const [users, setUsers] = useState<User[] | null>(null);
  const [count, setCount] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log("Called");
    console.log("Users:", users);
    return () => console.log("removed");
  }, [users]);

  // const addTo = useCallback(
  //   (
  //     e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  //   ): void => setCount((prev) => prev + 1),
  //   []
  // );

  const addTo = useCallback((): void => setCount((prev) => prev + 1), []);

  const fib: TFibFunction = (n) => {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
  };

  const myNum: number = 17;

  const result = useMemo<number>(() => fib(myNum), [myNum]);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTo}>Add</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default MainHooks;
