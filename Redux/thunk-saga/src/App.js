import Counter from "./pages/Counter";
import { Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/post" element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
