import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "../redux/features/postSlice";
import { selectAllUsers } from "../redux/features/usersSlice";

const formInitialValue = {
  title: "",
  content: "",
  userId: "",
};

export default function AddPostPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(selectAllUsers);

  const [formValue, setFormValue] = useState(formInitialValue);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const canSave =
    [formValue.title, formValue.content, formValue.userId].every(Boolean) &&
    addRequestStatus === "idle";

  const onPostSave = () => {
    try {
      setAddRequestStatus("pending");
      dispatch(
        addNewPost({
          title: formValue.title,
          body: formValue.content,
          userId: formValue.userId,
        })
      ).unwrap();
      setFormValue(formInitialValue);
      navigate("/");
    } catch (error) {
      console.log("Failed to save Error", error);
    } finally {
      setAddRequestStatus("idle");
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <label htmlFor="PostTitle">Post Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formValue.title}
          onChange={onChangeHandler}
        />

        <label htmlFor="PostContent">Content:</label>
        <input
          type="text"
          id="content"
          name="content"
          value={formValue.content}
          onChange={onChangeHandler}
        />

        <label htmlFor="PostContent">Author:</label>
        <select
          name="userId"
          id="userId"
          value={formValue.userId}
          onChange={onChangeHandler}
        >
          <option value="">Select</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <button disabled={!canSave} type="button" onClick={onPostSave}>
          Save Post
        </button>
      </form>
    </section>
  );
}
