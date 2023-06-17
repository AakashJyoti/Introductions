import { useState, useEffect } from "react";
import axios from "axios";

export const useUser = (id) => {
  const [user, setUser] = useState();

  const getUser = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:4000/user/${id}`);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser(id);
  }, [id]);

  return user;
};
