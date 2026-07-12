import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./checkout.css";

function Checkout() {
  const { cartItems, clearCart } = useCart();

  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    clearCart();
    navigate("/order-success");
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      {cartItems.length === 0 ? (
        <div className="empty-checkout">
          <h2>Your cart is empty</h2>
        </div>
      ) : (
        <>
          <div className="checkout-items">
            {cartItems.map((item) => (
              <div key={item.id} className="checkout-item">
                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="checkout-info">
                  <h3>{item.title}</h3>

                  <p>
                    Price: ${item.price}
                  </p>

                  <p>
                    Quantity: {item.quantity}
                  </p>

                  <p>
                    Subtotal: $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-summary">
            <h2>
              Total: ${total.toFixed(2)}
            </h2>

            <button
              className="place-order-btn"
              onClick={placeOrder}
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;