import { useState, useEffect } from "react";
import axios from "axios";

export const useCurrentUser = () => {
  const [user, setUser] = useState();

  const getCurrentUser = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/current-user");
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return user;
};
