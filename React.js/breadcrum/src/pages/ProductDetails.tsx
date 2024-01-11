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

  console.log(product);

  return (
    <div>
      <img src={product?.thumbnail} alt="" />
      <p>{product?.title}</p>
    </div>
  );
};
export default ProductDetails;
