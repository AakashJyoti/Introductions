import axios from "axios";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

export default function ResourceLoader({
  resourceUrl,
  resourceName,
  children,
}) {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);

  const getUser = async (resourceUrl) => {
    setLoading(true);
    try {
      const { data } = await axios.get(resourceUrl);
      setState(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser(resourceUrl);
  }, [resourceUrl]);

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

ResourceLoader.propTypes = {
  resourceUrl: PropTypes.string,
  resourceName: PropTypes.string,
  children: PropTypes.object,
};
