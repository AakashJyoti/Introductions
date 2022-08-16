import { faker } from "@faker-js/faker";
import { useState } from "react";
import SingleProduct from "../components/SingleProduct";

const Home = () => {
  const productsArray = [...Array(10)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
  }));

  const [products] = useState(productsArray);

  return (
    <div className="m-6 flex flex-wrap flex-row justify-evenly">
      {products.map((prod) => (
        <SingleProduct prod={prod} key={prod.id} />
      ))}
    </div>
  );
};
export default Home;
