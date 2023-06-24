import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectUserById } from "../redux/features/usersSlice";
import { selectPostByUser } from "../redux/features/postSlice";

export default function UserPage() {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  const postForUser = useSelector((state) =>
    selectPostByUser(state, Number(userId))
  );

  const postTitles = postForUser.map((post) => {
    return (
      <li key={post?.id}>
        <Link to={`/post/${post?.id}`}>{post?.title}</Link>
      </li>
    );
  });

  console.log({ userId, user, postForUser });

  return (
    <section>
      <h2>{user?.name}</h2>
      <ol>{postTitles}</ol>
    </section>
  );
}
