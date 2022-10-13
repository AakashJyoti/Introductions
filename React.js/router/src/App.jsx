import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Page404 from "./pages/Page404";
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <h2>React Router Dom v6</h2>
      <Routes>
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
