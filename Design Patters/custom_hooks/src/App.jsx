import { useCounter } from "./hooks/useCounter";
import { useCurrentUser } from "./hooks/useCurrentUser";
import { useResource } from "./hooks/useResource";
import { useUser } from "./hooks/useUser";

export default function App() {
  const currentUser = useCurrentUser();
  const firstUser = useUser("1001");
  const resource = useResource("http://localhost:4000/current-user");
  const { count, increment, decrement } = useCounter();

  console.log({ currentUser, firstUser, resource });

  return (
    <>
      <div>
        <h1>useCounter</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}
