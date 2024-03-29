import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../constants";

const fetchPostById = async (postId) => {
  const data = await fetch(`${API_URL}/posts/${postId}`).then((res) =>
    res.json()
  );
  return data;
};

const fetchCommentsByPostId = async (postId) => {
  const data = await fetch(`${API_URL}/comments/post/${postId}`).then((res) =>
    res.json()
  );
  return data.comments;
};

const Dependant = () => {
  const { data: post, isLoading } = useQuery({
    queryKey: ["post"],
    queryFn: () => fetchPostById(2),
  });

  const { data: comments } = useQuery({
    queryKey: ["comments", post?.id],
    queryFn: () => fetchCommentsByPostId(post.id),
  });

  return (
    <div className="p-12">
      <h1 className="text-lg font-bold">Post:</h1>
      {isLoading ? <p>Loading the post</p> : <h2>{post?.title}</h2>}
      <br />
      <h1 className="text-lg font-bold">Comments</h1>
      <ul>
        {comments?.map((comment) => (
          <p key={comment.id}>{comment.body}</p>
        ))}
      </ul>
    </div>
  );
};

export default Dependant;
