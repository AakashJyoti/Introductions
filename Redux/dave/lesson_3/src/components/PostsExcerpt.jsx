import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import PropTypes from "prop-types";

export default function PostsExcerpt({ post }) {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <ReactionButtons post={post} />
    </article>
  );
}

PostsExcerpt.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
