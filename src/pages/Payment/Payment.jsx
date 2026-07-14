import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./payment.css";

function Payment() {
  const [method, setMethod] = useState("");
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const handlePayment = () => {
    if (!method) {
      alert("Please select a payment method.");
      return;
    }

    clearCart();
    navigate("/order-success");
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h1>Select Payment Method</h1>

        <label>
          <input
            type="radio"
            name="payment"
            value="Credit Card"
            onChange={(e) =>
              setMethod(e.target.value)
            }
          />
          💳 Credit / Debit Card
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="Bank Transfer"
            onChange={(e) =>
              setMethod(e.target.value)
            }
          />
          🏦 Bank Transfer
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="Telebirr"
            onChange={(e) =>
              setMethod(e.target.value)
            }
          />
          📱 Telebirr
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="Cash on Delivery"
            onChange={(e) =>
              setMethod(e.target.value)
            }
          />
          💵 Cash on Delivery
        </label>

        <button onClick={handlePayment}>
          Confirm Payment
        </button>
      </div>
    </div>
  );
}

export default Payment;