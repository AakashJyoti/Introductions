import { useState } from "react";
import "./App.css";
import "./scss/main.scss";
import { useReducer } from "react";

function reducer({ state }) {
  switch (state) {
    case "PRESSED_ONCE":
      return {
        state: "PRESSED_TWO",
      };
    case "PRESSED_TWO":
      return {
        state: "PRESSED_THREE",
      };
    case "PRESSED_THREE":
      return {
        state: "PRESSED_ONCE",
      };
  }
}

const Button = ({ color, underline, increment }) => {
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    state: "PRESSED_THREE",
  });
  return (
    <>
      <div
        style={{ color, textDecoration: underline ? "underline" : "" }}
        onClick={() => setCounter((count) => count + increment)}
      >
        I am a Button{counter}
      </div>
      <button onClick={() => dispatch()}>{state.state}</button>
    </>
  );
};

function App() {
  const props = {
    increment: 2,
    underline: true,
  };

  const [state, setState] = useState("idle");

  const clicked = () => {
    setState("loading");
    fetch("https://jsonplaceholder.typicode.com/postse")
      .then((data) => {
        try {
          data.json();
          setState("loaded");
        } catch (error) {
          setState("request-error");
        }
      })
      .catch(() => {
        setState("network-error");
      });
  };

  if (state === "network-error") {
    return <div>Network Error</div>;
  }

  if (state === "request-error") {
    return <div>Request Error</div>;
  }

  if (state === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Button {...props} color="black" />
      <Button {...props} color="yellow" />
      <Button {...props} color="blue" />
      <h4 onClick={clicked}>Current State: {state}</h4>
      <h1>{import.meta.env.VITE_MY_NAME}</h1>
    </div>
  );
}

export default App;
