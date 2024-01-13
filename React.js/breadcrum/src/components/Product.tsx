import { Link } from "react-router-dom";
import { TProduct } from "../apis/getRequest";

type TProps = {
  productInfo: TProduct;
};

const Product = ({ productInfo }: TProps) => {
  return (
    <Link to={`/products/${productInfo?.id}`}>
      <div className="shadow-md shadow-gray-500 border flex flex-col w-56 rounded-lg overflow-hidden hover:scale-105 hover:ease-in-out">
        <img src={productInfo?.thumbnail} alt="" className="h-40" />
        <div className="flex justify-between px-4 py-2 border-t-2">
          <div className="flex justify-between flex-col gap-">
            <p className="font-semibold">{productInfo?.title}</p>
            <p className="text-xs">{productInfo?.brand}</p>
          </div>
          <div className="flex flex-col-reverse">
            <p className="font-medium">$ {productInfo?.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
