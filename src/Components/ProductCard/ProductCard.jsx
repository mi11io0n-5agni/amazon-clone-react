import "./productCard.css";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card">
    <Link to={`/product/${product.id}`}>
    <div className="rating">
       {"⭐".repeat(product.rating)}
       {"☆".repeat(5 - product.rating)}
    </div>
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />
    </Link>

    <Link to={`/product/${product.id}`}>
      <h3 className="title">
        {product.title}
      </h3>
    </Link>

      <p className="price">${product.price}</p>

      <button className="button" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;