import { useEffect, useState } from "react";
import { TMain, TProduct, getRequest } from "../apis/getRequest";
import { PRODUCTS_API } from "../constants/api_routes";
import { Product } from "../components";
import { Link } from "react-router-dom";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState<TProduct[] | []>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data: TMain = await getRequest(PRODUCTS_API);
        setTrendingProducts(data.products.slice(0, 6));
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="py-3 px-5 flex justify-center flex-col">
      <section>
        <p className="text-center mb-2 text-3xl font-semibold">
          Trending Products
        </p>
        <div className="flex gap-5 flex-wrap justify-center">
          {trendingProducts?.map((product) => (
            <Product key={product.id} productInfo={product} />
          ))}
        </div>
        <Link to={"/products"}>
          <p className="text-right underline mx-20 text-blue-700 hover:text-blue-500">
            All Products
          </p>
        </Link>
      </section>
    </div>
  );
};
export default Home;
