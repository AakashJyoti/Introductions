import React, { useState } from "react";
import "./App.css";
import "./scss/main.scss";

const Checkbox = ({ children }) => {
  const [checked, setChecked] = useState(true);

  const allChildren = React.Children.map(children, (child) => {
    // if (typeof child.type === "string") {
    //   return null;
    // }
    // if (typeof child.type !== "function") {
    //   return child;
    // }
    if (child.type !== Label && child.type !== CheckboxInput) {
      throw new Error("No custom element supported");
    }
    const clone = React.cloneElement(child, { checked, setChecked });
    return clone;
  });
  return allChildren;
};

const CheckboxInput = ({ checked, setChecked }) => {
  // const [_checked, _setChecked] = useState(!!checked);

  return (
    <input
      type="checkbox"
      checked={checked}
      // checked={_checked}
      onChange={(e) => {
        // _setChecked(e.target.checked);
        if (setChecked) {
          setChecked(e.target.checked);
        }
      }}
    />
  );
};

const Label = ({ checked, setChecked, children }) => {
  return <label onClick={() => setChecked((prev) => !prev)}>{children}</label>;
};
export default function StateChild() {
  return (
    // <CheckboxInput />
    <Checkbox>
      <CheckboxInput />
      <Label>Check box label</Label>
    </Checkbox>
  );
}
