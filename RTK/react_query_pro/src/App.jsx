import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/paginated";
import Parallel from "./pages/parallel";
import Optimistic from "./pages/optimistic";
import Dependant from "./pages/dependant";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "paginated",
    element: <Products />,
  },
  {
    path: "parallel",
    element: <Parallel />,
  },
  {
    path: "optimistic",
    element: <Optimistic />,
  },
  {
    path: "dependant",
    element: <Dependant />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
