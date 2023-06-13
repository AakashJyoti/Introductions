import axios from "axios";
import { useEffect, useState } from "react";

const URL = "https://api.spacexdata.com/v3/rockets";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(URL);
        setData(data);
        setLoading(false);
      } catch (error) {
        setIsError(false);
        setLoading(false);
      }
    })();
  }, []);

  if (isError) {
    return <h1>Something went Wrong</h1>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log(data);
  return (
    <>
      {data.map((spaceship) => (
        <div key={spaceship.id}>
          <h4>Name: {spaceship.rocket_name}</h4>
          <p>Description: {spaceship.description}</p>
        </div>
      ))}
    </>
  );
}
