import { useState } from "react";
import { useQuery, useQueries } from "@tanstack/react-query";
import { API_URL } from "../constants";

const Parallel = () => {
  const [userIds, setUserIds] = useState([1, 2]);

  const userQueries = useQueries({
    queries: userIds.map((id) => {
      return {
        queryKey: ["user", id],
        queryFn: async () => {
          const data = await fetch(`${API_URL}/users/${id}`).then((res) =>
            res.json()
          );
          return data;
        },
      };
    }),
  });

  console.log(userQueries);

  return (
    <div>
      <button
        onClick={() =>
          setUserIds((prev) => {
            return [...prev, Date.now()];
          })
        }
      >
        Load more
      </button>

      {userIds.map((id) => (
        <h1 key={id}>{id}</h1>
      ))}
    </div>
  );
};

export default Parallel;
