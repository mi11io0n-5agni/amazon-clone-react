import { useCart } from "../context/CartContext";
import "./cart.css";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                />

                <div>
                  <h4>{item.title}</h4>

                  <p>${item.price}</p>

                  <div>
                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      -
                    </button>

                    <span>
                      {" "}
                      {item.quantity}{" "}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h3>
              Total: ${total.toFixed(2)}
            </h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;