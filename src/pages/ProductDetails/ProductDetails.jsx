import { useParams } from "react-router-dom";
import products from "../../data/products";
import { useCart } from "../../context/CartContext";
import "./productdetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="details-container">
      <img
        src={product.image}
        alt={product.title}
        className="details-image"
      />

      <div className="details-info">
        <h1>{product.title}</h1>

        <h2>${product.price}</h2>

        <p>Category: {product.category}</p>

        <p>
          This is a premium quality product available
          in our store.
        </p>

        <button onClick={() => addToCart(product)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;