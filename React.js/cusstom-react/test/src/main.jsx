import ReactDOM from "react-dom/client";
import React from "react";

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google ",
};

const CreatedReactElement = React.createElement(
  reactElement.type,
  reactElement.props,
  reactElement.children
);

React.createElement;

ReactDOM.createRoot(document.getElementById("root")).render(
  CreatedReactElement
);
