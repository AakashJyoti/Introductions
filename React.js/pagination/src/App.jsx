import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import Post from "./components/Post";

function App() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;

  const getPost = async () => {
    setLoading(true);
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPost(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getPost();
  }, []);

  // Get Current Post
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = post.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Pagination</h1>
      <Post post={currentPost} loading={loading} />
      <Pagination
        postPerPage={postPerPage}
        totalPosts={post.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
