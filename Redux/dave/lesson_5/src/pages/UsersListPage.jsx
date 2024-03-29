import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllUsers } from "../redux/features/usersSlice";

export default function UsersListPage() {
  const users = useSelector(selectAllUsers);

  const renderUsers = users.map((user) => (
    <li key={user.id}>
      <Link to={`/user/${user.id}`}>{user.name}</Link>
    </li>
  ));

  return (
    <section>
      <h2>Users</h2>
      {renderUsers}
    </section>
  );
}
