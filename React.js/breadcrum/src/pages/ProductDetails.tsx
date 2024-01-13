import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TProduct, getRequest } from "../apis/getRequest";
import { PRODUCTS_API } from "../constants/api_routes";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    if (productId) {
      const getProductDetails = async () => {
        try {
          const data: TProduct = await getRequest(
            `${PRODUCTS_API}/${productId}`
          );
          setProduct(data);
        } catch (error) {
          console.log(error);
        }
      };
      getProductDetails();
    }
  }, [productId]);

  return (
    <>
      <p className="text-3xl text-center font-semibold my-3 mx-60 border-b-2">
        Product Details
      </p>
      <div className="flex gap-10 mx-auto w-fit">
        <img
          src={product?.thumbnail}
          alt={product?.title}
          className="h-80 w-80 shadow-lg rounded-lg p-10 border"
        />
        <div className="mt-10 w-80">
          <p className="text-2xl font-medium">{product?.title}</p>
          <p className="text-xl font-medium">$ {product?.price}</p>
          <p>Description: {product?.description}</p>
          <p>Rating: {product?.price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
