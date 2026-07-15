import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <button
          className="back-to-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Back to top
        </button>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h3>Get to Know Us</h3>

          <a
            href="https://www.aboutamazon.com/"
            target="_blank"
            rel="noreferrer"
          >
            About Us
          </a>

          <a
            href="https://www.amazon.jobs/"
            target="_blank"
            rel="noreferrer"
          >
            Careers
          </a>

          <a
            href="https://www.aboutamazon.com/news"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>

          <a
            href="https://ir.aboutamazon.com/"
            target="_blank"
            rel="noreferrer"
          >
            Investor Relations
          </a>
        </div>

        <div className="footer-column">
          <h3>Make Money with Us</h3>

          <a
            href="https://sell.amazon.com/"
            target="_blank"
            rel="noreferrer"
          >
            Sell Products
          </a>

          <a
            href="https://affiliate-program.amazon.com/"
            target="_blank"
            rel="noreferrer"
          >
            Become an Affiliate
          </a>

          <a
            href="https://advertising.amazon.com/"
            target="_blank"
            rel="noreferrer"
          >
            Advertise Your Products
          </a>

          <a
            href="https://kdp.amazon.com/"
            target="_blank"
            rel="noreferrer"
          >
            Self Publish
          </a>
        </div>

        <div className="footer-column">
          <h3>Payment Products</h3>

          <a
            href="https://www.amazon.com/cpe/businesscredit/"
            target="_blank"
            rel="noreferrer"
          >
            Business Card
          </a>

          <a
            href="https://www.amazon.com/shopwithpoints"
            target="_blank"
            rel="noreferrer"
          >
            Shop with Points
          </a>

          <a
            href="https://www.amazon.com/asv/reload"
            target="_blank"
            rel="noreferrer"
          >
            Reload Balance
          </a>

          <a
            href="https://www.xe.com/currencyconverter/"
            target="_blank"
            rel="noreferrer"
          >
            Currency Converter
          </a>
        </div>

        <div className="footer-column">
          <h3>Let Us Help You</h3>

          <a
            href="https://www.amazon.com/gp/css/homepage.html"
            target="_blank"
            rel="noreferrer"
          >
            Your Account
          </a>

          <a
            href="https://www.amazon.com/gp/css/order-history"
            target="_blank"
            rel="noreferrer"
          >
            Your Orders
          </a>

          <a
            href="https://www.amazon.com/gp/help/customer/display.html?nodeId=G26L6NHEDGERVR8W"
            target="_blank"
            rel="noreferrer"
          >
            Shipping Rates
          </a>

          <a
            href="https://www.amazon.com/gp/help/customer/display.html"
            target="_blank"
            rel="noreferrer"
          >
            Help Center
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <h2>Ethio-Gebeya</h2>
        © 2026 Ethio-Gebeya by Milion Sagni
      </div>
    </footer>
  );
}

export default Footer;