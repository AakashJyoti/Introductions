import "./App.css";
import NumberedList from "./NumberedList";
import RegularList from "./RegularList";
import LargePersonListitem from "./people/LargePersonListitem";
import SmallPersonListitem from "./people/SmallPersonListitem";
import LargeProductListItem from "./products/LargeProductListItem";
import SmallProductListItem from "./products/SmallProductListItem";

const people = [
  {
    name: "John",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycle", "video games"],
  },
  {
    name: "Brenda",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"],
  },
  {
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"],
  },
];

const products = [
  {
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal.",
    rating: 4.5,
  },
  {
    name: "Basketball",
    price: "$10",
    description: "Just like pros use.",
    rating: 3.8,
  },
  {
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum running.",
    rating: 4.2,
  },
];

function App() {
  return (
    <>
      <RegularList
        items={people}
        resourceName={"person"}
        itemComponent={SmallPersonListitem}
      />
      <RegularList
        items={people}
        resourceName={"person"}
        itemComponent={LargePersonListitem}
      />
      <RegularList
        items={products}
        resourceName={"product"}
        itemComponent={LargeProductListItem}
      />
      <NumberedList
        items={products}
        resourceName={"product"}
        itemComponent={SmallProductListItem}
      />
    </>
  );
}

export default App;
