import { useEffect, useState } from "react";
import { TMain, TProduct, getRequest } from "../apis/getRequest";
import { PRODUCTS_API } from "../constants/api_routes";
import { Product } from "../components";

const Products = () => {
  const [allProducts, setAllProducts] = useState<TProduct[] | []>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data: TMain = await getRequest(PRODUCTS_API);
        setAllProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="py-3 px-5 flex justify-center flex-col">
      <section>
        <p className="text-center mb-2 text-3xl font-semibold">All Products</p>
        <div className="flex gap-5 flex-wrap justify-center">
          {allProducts?.map((product) => (
            <Product key={product.id} productInfo={product} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default Products;
