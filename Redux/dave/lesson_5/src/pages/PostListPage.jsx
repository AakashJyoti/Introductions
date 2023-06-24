import { useSelector } from "react-redux";
import {
  getPostStatus,
  getPostsError,
  selectPostIds,
} from "../redux/features/postSlice";
import PostsExcerpt from "../components/PostsExcerpt";

export default function PostListPage() {
  const orderedPostsIds = useSelector(selectPostIds);
  const postsStatus = useSelector(getPostStatus);
  const postsError = useSelector(getPostsError);

  let content;
  if (postsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postsStatus === "failed") {
    content = <p>{postsError}</p>;
  } else if (postsStatus === "succeeded") {
    content = orderedPostsIds.map((postId) => (
      <PostsExcerpt postId={postId} key={postId} />
    ));
  }

  return (
    <section>
      <h2>PostsList</h2>
      {content}
    </section>
  );
}
