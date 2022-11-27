import { useEffect, useState } from "react";
import Product from "./components/Product";

export interface IProduct {
  id: number;
  title: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  const handleAddToCart = (id: number): void => console.warn("Clicked", id);

  useEffect(() => {
    setProducts([
      {
        id: 1,
        title: "Iphone",
        price: 150000,
      },
      {
        id: 2,
        title: "S22 Ultra",
        price: 120000,
      },
    ]);
  }, []);

  return (
    <>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleAddToCartClick={handleAddToCart}
        />
      ))}
    </>
  );
}

export default App;
