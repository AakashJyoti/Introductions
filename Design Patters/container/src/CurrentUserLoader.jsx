import axios from "axios";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

export default function CurrentUserLoader({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const getCurrentUser = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:4000/current-user");
      setUser(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

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

CurrentUserLoader.propTypes = {
  children: PropTypes.object,
};
