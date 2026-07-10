import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top
        </button>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h3>Get to Know Us</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>Investor Relations</p>
        </div>

        <div className="footer-column">
          <h3>Make Money with Us</h3>
          <p>Sell Products</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Products</p>
          <p>Self Publish</p>
        </div>

        <div className="footer-column">
          <h3>Payment Products</h3>
          <p>Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Balance</p>
          <p>Currency Converter</p>
        </div>

        <div className="footer-column">
          <h3>Let Us Help You</h3>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates</p>
          <p>Help Center</p>
        </div>
      </div>

      <div className="footer-bottom">
        <h2>ShopEasy</h2>
        <p>© 2026 ShopEasy Clone Project by Milion Sagni</p>
      </div>
    </footer>
  );
}

export default Footer;