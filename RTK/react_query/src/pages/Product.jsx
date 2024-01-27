import { useMutation, useQuery } from "@tanstack/react-query";
import { PRODUCT_API } from "../constant";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const { productId } = useParams();

  const fetchProduct = async () => {
    const { data } = await axios.get(`${PRODUCT_API}/${productId}`);
    return data;
  };

  const {
    isLoading,
    isError,
    error,
    data: product,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: fetchProduct,
  });

  const mutation = useMutation({
    mutationFn: (newProduct) => {
      return axios.put(`${PRODUCT_API}/${productId}`, newProduct);
    },
    // onSettled: async () => {
    //   return await queryClient.invalidateQueries({ queryKey: ["todos"] });
    // },
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error : {error.message}</h1>;
  }

  if (mutation.isPending) {
    return <h1>Updating...</h1>;
  }

  if (mutation.isError) {
    return <h1>Error : {mutation.error.message}</h1>;
  }

  return (
    <div>
      <p>Product page</p>
      <p>{product.title}</p>
      <button
        onClick={() => mutation.mutate({ title: "Jabba" })}
        className="border px-3 py-1 rounded"
      >
        Manage mutation
      </button>
    </div>
  );
};
export default Product;
