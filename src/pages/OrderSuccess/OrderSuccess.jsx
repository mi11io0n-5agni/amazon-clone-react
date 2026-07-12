import { Link } from "react-router-dom";
import "./orderSuccess.css";

function OrderSuccess() {
  return (
    <div className="success-container">
      <div className="success-card">
        <h1>✅ Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with ShopEasy.
        </p>

        <p>
          Your order has been received and is being processed.
        </p>

        <Link to="/">
          <button className="continue-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;