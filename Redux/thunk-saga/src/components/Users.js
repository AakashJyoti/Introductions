import { useSelector } from "react-redux";

const Users = ({ userId }) => {
  const users = useSelector((state) => state.users);
  const author = users.find((user) => user.id === userId);

  return (
    <div>
      <span style={{ fontStyle: "italic", fontSize: "13px" }}>
        by {author ? author.name : "unknown author"}
      </span>
    </div>
  );
};
export default Users;
