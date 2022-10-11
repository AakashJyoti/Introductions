const Post = ({ post, loading }) => {
  return (
    <ul className="list-group mb-4">
      {loading ? (
        <h2>Loading ...</h2>
      ) : (
        <>
          {post.map((p) => {
            return (
              <li key={p.id} className="list-group-item">
                <p>
                  <span className="me-2" >{p.id}.</span>
                  <span>{p.title}</span>
                </p>
              </li>
            );
          })}
        </>
      )}
    </ul>
  );
};
export default Post;
