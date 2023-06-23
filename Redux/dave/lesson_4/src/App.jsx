import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import PostListPage from "./pages/PostListPage";
import AddPostPage from "./pages/AddPostPage";
import SinglePostPage from "./pages/SinglePostPage";
import EditPostFormPage from "./pages/EditPostFormPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostListPage />} />
        <Route path="post">
          <Route index element={<AddPostPage />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit">
            <Route path=":postId" element={<EditPostFormPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
