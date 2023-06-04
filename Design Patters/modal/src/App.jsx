import Modal from "./Modal";
import LargePersonListitem from "./LargePersonListitem";

const people = {
  name: "John",
  age: 54,
  hairColor: "brown",
  hobbies: ["swimming", "bicycle", "video games"],
};

export default function App() {
  return (
    <>
      <Modal>
        <LargePersonListitem person={people} />
      </Modal>
    </>
  );
}
