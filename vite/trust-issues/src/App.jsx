import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [Users, setUsers] = useState([]);

  //  --- Axios ---

  // const getData = async () => {
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //   setUsers(res.data);
  // };

  //  --- Fetch ---

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(Users);

  return <div>App</div>;
};
export default App;
