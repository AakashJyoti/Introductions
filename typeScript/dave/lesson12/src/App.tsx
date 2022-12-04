import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import List from "./components/List";
import { Section } from "./components/Section";

const App = () => {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Heading title={"Coco"} />
      <Section>This in my section</Section>

      {/* Example for Type define */}
      <Counter setCount={setCount}>Count is: {count}</Counter>

      {/* Example for Generic type */}
      <List
        items={["Astr", "Coco", "Bella"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </>
  );
};
export default App;
