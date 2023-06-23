import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { fetchUsers } from "./redux/features/usersSlice.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchPosts } from "./redux/features/postSlice.js";

store.dispatch(fetchUsers());
store.dispatch(fetchPosts());
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
