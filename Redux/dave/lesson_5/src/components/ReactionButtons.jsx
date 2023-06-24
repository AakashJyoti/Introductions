import { useDispatch } from "react-redux";
import { reactionAdded } from "../redux/features/postSlice";
import PropTypes from "prop-types";

const reactionEmoji = {
  like: "👍",
  dislike: "👎",
};

export default function ReactionButtons({ post }) {
  const dispatch = useDispatch();
  const reactionButton = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button
      key={name}
      type="button"
      onClick={() =>
        dispatch(reactionAdded({ postId: post.id, reaction: name }))
      }
    >
      {emoji} {post.reactions[name]}
    </button>
  ));

  return <div>{reactionButton}</div>;
}

ReactionButtons.propTypes = {
  post: PropTypes.object,
};
