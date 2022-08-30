import { useState } from "react";
// manage state in component

const useState = () => {
  const [value, setValue] = useState(initialValue);

  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default useState;
