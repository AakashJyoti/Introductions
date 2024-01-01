import { Link, useLoaderData, useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();
  // const data = useLoaderData()
  
  const { id } = params;
  return (
    <div>
      <h1>Post</h1>
      <h2>{id}</h2>
      <Link to="/posts">Back</Link>
    </div>
  );
};
export default Post;
