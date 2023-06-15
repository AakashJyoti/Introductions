import { useState, useEffect } from "react";
import axios from "axios";

export default function withUser(Component, userId) {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const { data } = await axios.get(
          `http://localhost:4000/user/${userId}`
        );
        setUser(data);
      })();
    }, []);

    return <Component {...props} user={user} />;
  };
}
