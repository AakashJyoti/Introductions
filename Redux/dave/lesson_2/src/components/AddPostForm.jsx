import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../redux/features/postSlice";
import { selectAllUsers } from "../redux/features/usersSlice";

const formInitialValue = {
  title: "",
  content: "",
  userId: "",
};

export default function AddPostForm() {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const [formValue, setFormValue] = useState(formInitialValue);

  const onPostSave = () => {
    dispatch(postAdded(formValue.title, formValue.content, formValue.userId));
    setFormValue(formInitialValue);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const canSave =
    Boolean(formValue.title) &&
    Boolean(formValue.content) &&
    Boolean(formValue.userId);

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
