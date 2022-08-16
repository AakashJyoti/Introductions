import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./features/Users";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  return (
    <div className="App">
      <div className="addUser">
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
            setName("");
            setUsername("");
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div key={user.id} className="dataBox">
              <div className="dataDisplay">
                <p className="name">Name: {user.name}</p>
                <p className="username">@{user.username}</p>
              </div>
              <div className="dataChange">
                <input
                  type="text"
                  placeholder="New Username"
                  onChange={(e) => setNewUsername(e.target.value)}
                />
                <div>
                  <button
                    className="change"
                    onClick={() => {
                      dispatch(
                        updateUsername({ id: user.id, username: newUsername })
                      ).then(setNewUsername(""));
                    }}
                  >
                    Change
                  </button>
                  <button
                    className="delete"
                    onClick={() => {
                      dispatch(deleteUser({ id: user.id }));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
