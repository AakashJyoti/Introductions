import React from "react";
import PostsList from "./features/post/PostsList";
import AddPostForm from "./features/post/AddPostForm";

function App() {
  return (
    <div className="App">
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
