import "./orders.css";

function Orders() {
  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="orders-container">
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="order-card">
            <h3>Order #{order.id}</h3>

            <p>Date: {order.date}</p>

            <p>Status: {order.status}</p>

            <p>Total: ${order.total.toFixed(2)}</p>

            <div className="order-items">
              {order.items.map((item) => (
                <div key={item.id}>
                  {item.title} × {item.quantity}
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;