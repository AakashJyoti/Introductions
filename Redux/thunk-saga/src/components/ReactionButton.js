import { useDispatch } from "react-redux";
import { addReactiion } from "../slices/postSlice";

const reactionEmoji = {
  like: "👍",
  dislike: "👎",
};

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
          <button
            key={name}
            onClick={() =>
              dispatch(addReactiion({ postId: post.id, reaction: name }))
            }
            style={{ marginRight: "10px" }}
          >
            {emoji} {post.reactions[name]}
          </button>
        );
      })}
    </div>
  );
};
export default ReactionButton;
