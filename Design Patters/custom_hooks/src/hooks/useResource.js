import axios from "axios";
import { useEffect, useState } from "react";

export const useResource = (url) => {
  const [resource, setResource] = useState();

  const getResource = async (url) => {
    try {
      const { data } = await axios.get(url);
      setResource(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResource(url);
  }, [url]);

  return resource;
};
