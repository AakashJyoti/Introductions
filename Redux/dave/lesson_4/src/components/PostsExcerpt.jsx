import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { deletePost } from "../redux/features/postSlice";
import { useDispatch } from "react-redux";

export default function PostsExcerpt({ post }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deletePost({ id: post.id }));
  };

  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 75)}...</p>
      <p>
        <Link to={`post/${post.id}`}>View Post</Link>{" "}
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />

      <button onClick={handleDelete}>Delete</button>
    </article>
  );
}

PostsExcerpt.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
