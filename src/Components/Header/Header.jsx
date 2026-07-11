import "./header.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

function Header({ setSearchTerm }) {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  return (
    <header className="header">
      {/* Logo */}
      <Link to="/" className="logo">
        ShopEasy
      </Link>

      {/* Search */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* User Section */}
      <div className="user-section">
        {user ? (
          <>
            <span className="welcome-text">
              Hello, {user.name}
            </span>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="auth-link">
              Login
            </Link>

            <Link to="/register" className="auth-link">
              Register
            </Link>
          </>
        )}
      </div>

      {/* Cart */}
      <Link to="/cart" className="cart">
        🛒 Cart ({cartItems.length})
      </Link>
    </header>
  );
}

export default Header;