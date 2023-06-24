import { useGetTodosQuery } from "../redux/api/apiSlice";
import AddTodoForm from "../components/AddTodoForm";
import Todo from "../components/Todo";

const TodoListPage = () => {
  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = todos.map((todo) => <Todo todo={todo} key={todo.id} />);
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <main>
      <h1>Todo List</h1>
      <AddTodoForm />
      {content}
    </main>
  );
};
export default TodoListPage;
