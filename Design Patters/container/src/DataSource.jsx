import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

export default function DataSource({ getDataFunc, resourceName, children }) {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);

  const getUser = async (getDataFunc) => {
    setLoading(true);
    try {
      const data = await getDataFunc();
      setState(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser(getDataFunc);
  }, [getDataFunc]);

  return (
    <>
      {loading
        ? "Loading"
        : React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { [resourceName]: state });
            }
            return child;
          })}
    </>
  );
}

DataSource.propTypes = {
  getDataFunc: PropTypes.func,
  resourceName: PropTypes.string,
  children: PropTypes.object,
};
