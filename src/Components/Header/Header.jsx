import "./header.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Header() {
  const { cartItems } = useCart();

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

      <Link to="/cart" className="cart">
        🛒 Cart ({cartItems.length})
      </Link>
    </header>
  );
}

export default Header;