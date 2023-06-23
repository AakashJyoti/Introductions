import { useSelector } from "react-redux";
import {
  selectAllPosts,
  getPostStatus,
  getPostsError,
} from "../redux/features/postSlice";
import PostsExcerpt from "./PostsExcerpt";

export default function PostsList() {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostStatus);
  const postsError = useSelector(getPostsError);

  let content;
  if (postsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postsStatus === "failed") {
    content = <p>{postsError}</p>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

    content = orderedPosts.map((post) => (
      <PostsExcerpt post={post} key={post.id} />
    ));
  }

  return (
    <section>
      <h2>PostsList</h2>
      {content}
    </section>
  );
}
