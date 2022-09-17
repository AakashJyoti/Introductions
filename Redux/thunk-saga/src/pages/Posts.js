import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../slices/postSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && desc) {
      dispatch(addPost({ id: posts.length + 1, title, desc }));
      setTitle("");
      setDesc("");
    }
  };

  return (
    <>
      {/* create Post */}
      <div>
        <h2 style={{ textAlign: "center" }}>Create New Post</h2>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
        >
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Post Heading"
            style={{
              padding: "5px 10px",
              fontSize: "16px",
              width: "30rem",
              borderRadius: "10px",
            }}
          />
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            placeholder="Post Description"
            style={{
              padding: "5px 10px",
              fontSize: "16px",
              width: "30rem",
              height: "5rem",
              borderRadius: "10px",
              resize: "none",
            }}
          />
          <button
            style={{
              width: "20rem",
              padding: "10px",
              borderRadius: "1rem",
              fontWeight: "bold",
              fontSize: "16px",
            }}
            type="submit"
          >
            Send
          </button>
        </form>
      </div>

      {/* Posts List */}
      <div style={{ marginTop: "2rem" }}>
        <div>
          <h2 style={{ textAlign: "center" }}>Posts</h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            margin: "1rem",
            gap: "2vw",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {posts.map((post) => {
            return (
              <div
                key={post.id}
                style={{
                  width: "35vw",
                  border: "1px solid black",
                  padding: "1rem",
                  borderRadius: "1rem",
                }}
              >
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Posts;
