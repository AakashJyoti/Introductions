import { IProduct } from "../App";

interface ProductProps {
  product: IProduct;
  handleAddToCartClick(id: number): void;
}

const Product = ({ product, handleAddToCartClick }: ProductProps) => {
  return (
    <div style={{ borderBottom: "2px solid black" }}>
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <button onClick={() => handleAddToCartClick(product.id)}>
        Add to Cart
      </button>
    </div>
  );
};
export default Product;
