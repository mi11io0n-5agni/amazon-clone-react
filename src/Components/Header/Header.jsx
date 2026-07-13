import "./header.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

function Header({
  setSearchTerm,
  darkMode,
  setDarkMode,
}) {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <Link to="/" className="logo">
        ShopEasy
      </Link>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />
      </div>

      <button
        className="theme-btn"
        onClick={() =>
          setDarkMode(!darkMode)
        }
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      <div className="user-section">
        {user ? (
          <>
            <Link
              to="/profile"
              className="profile-link"
            >
              Hello, {user.name}
            </Link>

            <Link
              to="/orders"
              className="profile-link"
            >
              Orders
            </Link>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="auth-link"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="auth-link"
            >
              Register
            </Link>
          </>
        )}
      </div>

      <Link
        to="/cart"
        className="cart-link"
      >
        🛒 Cart ({cartItems.length})
      </Link>
    </header>
  );
}

export default Header;