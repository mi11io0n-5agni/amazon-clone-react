import "./header.css";
import { useCart } from "../../context/CartContext";

function Header() {
  const { cartItems } = useCart();

  const goToCart = () => {
    window.location.href = "/cart";
  };

  return (
    <header className="header">
      <div className="logo">ShopEasy</div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
        />
      </div>

      <div className="cart" onClick={goToCart}>
        🛒 Cart ({cartItems.length})
      </div>
    </header>
  );
}

export default Header;