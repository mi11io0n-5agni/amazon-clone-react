import "./productCard.css";
import { useCart } from "../../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="product-image" />

      <h3 className="title">{product.title}</h3>

      <p className="price">${product.price}</p>

      <button className="button" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;