import "./navbar.css";

function Navbar({ setSelectedCategory }) {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li onClick={() => setSelectedCategory("All")}>
          ☰ All
        </li>

        <li onClick={() => setSelectedCategory("Electronics")}>
          Electronics
        </li>

        <li onClick={() => setSelectedCategory("Gaming")}>
          Gaming
        </li>

        <li onClick={() => setSelectedCategory("Accessories")}>
          Accessories
        </li>

        <li onClick={() => setSelectedCategory("Fashion")}>
          Fashion
        </li>

        <li onClick={() => setSelectedCategory("Home")}>
          Home
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;