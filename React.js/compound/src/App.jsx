import React, { createContext, useContext, useState } from "react";
import "./App.css";
import "./scss/main.scss";

const CheckboxInterface = createContext(null);

const Checkbox = ({ children }) => {
  const [checked, setChecked] = useState(true);

  return (
    <CheckboxInterface.Provider value={{ checked, setChecked }}>
      {children}
    </CheckboxInterface.Provider>
  );
};

const CheckboxInput = () => {
  const context = useContext(CheckboxInterface);
  if (!context) {
    throw new Error("CheckboxInput should be called inside Checkbox container");
  }
  const { checked, setChecked } = context;

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

const Label = ({ children }) => {
  const context = useContext(CheckboxInterface);
  if (!context) {
    throw new Error("Label should be called inside Checkbox container");
  }
  const { setChecked } = context;
  return <label onClick={() => setChecked((prev) => !prev)}>{children}</label>;
};

const App = () => {
  return (
    // <CheckboxInput />
    <Checkbox>
      <CheckboxInput />
      <div>
        <Label>Check box label</Label>
      </div>
    </Checkbox>
  );
};
export default App;
