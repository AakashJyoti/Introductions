import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import { routes } from "./lib/routes";
import Home from "./pages/Home";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: routes.Home,
        element: <Home />,
      },
      {
        path: routes.About,
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
