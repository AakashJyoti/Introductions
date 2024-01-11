import axios from "axios";

export type TMain = {
  products: TProduct[];
  total: number;
  skip: number;
  limit: number;
};

export type TProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export const getRequest = async (api: string) => {
  const { data } = await axios.get(api);
  return data;
};
