import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
      <div className="post">
        <Link to="/post/post1">post1</Link>
        <Link to="/post/post2">post2</Link>
        <Link to="/post/post3">post3</Link>
        <Link to="/post/post4">post4</Link>
        <Link to="/post/post5">post5</Link>
        <Link to="/post/post6">post6</Link>
      </div>
    </div>
  );
};
export default Posts;
