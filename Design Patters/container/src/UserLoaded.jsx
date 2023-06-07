import axios from "axios";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

export default function UserLoader({ userId, children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const getUser = async (userId) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`http://localhost:4000/user/${userId}`);
      setUser(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser(userId);
  }, [userId]);

  return (
    <>
      {loading
        ? "Loading"
        : React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { user });
            }
            return child;
          })}
    </>
  );
}

UserLoader.propTypes = {
  userId: PropTypes.string,
  children: PropTypes.object,
};
