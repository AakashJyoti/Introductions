import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../redux/api/apiSlice";

export default function Todo({ todo }) {
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  return (
    <article key={todo.id}>
      <div className="todo">
        <input
          type="checkbox"
          checked={todo.completed}
          id={todo.id}
          onChange={() => updateTodo({ ...todo, completed: !todo.completed })}
        />
        <label htmlFor={todo.id}>{todo.title}</label>
      </div>
      <button className="trash" onClick={() => deleteTodo({ id: todo.id })}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </article>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
