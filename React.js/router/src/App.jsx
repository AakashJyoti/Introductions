import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Page404 from "./pages/Page404";
import Post from "./pages/Post";
import Layout from "./Layout";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <h2>React Router Dom v6</h2>
//       <Routes>
//         <Route index element={<Home />} />
//         <Route path="posts" element={<Posts />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="about" element={<About />} />
//         <Route path="post/:id" element={<Post />} />
//         <Route path="/*" element={<Page404 />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "posts",
//         element: <Posts />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "post/:id",
//         element: <Post />,
//       },
//       {
//         path: "*",
//         element: <Page404 />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="posts" element={<Posts />} />
      <Route loader={"Api call function"} path="post/:id" element={<Post />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
