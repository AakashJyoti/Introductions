import RecursiveComponent from "./RecursiveComponent";
import data from "./assets/nestedObject.json";

export default function App() {
  return <RecursiveComponent data={data} />;
}
