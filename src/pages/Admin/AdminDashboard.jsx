import { useState } from "react";
import { useProducts } from "../../context/ProductContext";
import "./admin.css";

function AdminDashboard() {
  const {
    products,
    addProduct,
    deleteProduct,
  } = useProducts();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addProduct({
      title,
      price: Number(price),
      category,
      image,
      rating: 5,
    });

    setTitle("");
    setPrice("");
    setCategory("");
    setImage("");
  };

  /* ======================
      Analytics
  ======================= */

  const totalProducts = products.length;

  const totalRevenue = products.reduce(
    (sum, product) => sum + product.price,
    0
  );

  const averageRating =
    products.length > 0
      ? (
          products.reduce(
            (sum, product) =>
              sum + product.rating,
            0
          ) / products.length
        ).toFixed(1)
      : 0;

  const highestPricedProduct =
    products.reduce((max, product) =>
      product.price > max.price
        ? product
        : max
    );

  return (
    <div className="admin-container">
      <h1>📊 Sales Analytics Dashboard</h1>

      {/* Analytics Cards */}
      <div className="analytics-grid">
        <div className="analytics-card">
          <h2>📦 Products</h2>
          <p>{totalProducts}</p>
        </div>

        <div className="analytics-card">
          <h2>💰 Revenue</h2>
          <p>${totalRevenue.toFixed(2)}</p>
        </div>

        <div className="analytics-card">
          <h2>⭐ Average Rating</h2>
          <p>{averageRating}</p>
        </div>

        <div className="analytics-card">
          <h2>🏆 Most Expensive</h2>
          <p>
            {highestPricedProduct.title}
          </p>
          <small>
            $
            {highestPricedProduct.price}
          </small>
        </div>
      </div>

      {/* Add Product Form */}
      <h2>Add New Product</h2>

      <form
        className="admin-form"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Product Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
          required
        />

        <input
          placeholder="Category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          required
        />

        <input
          placeholder="Image URL"
          value={image}
          onChange={(e) =>
            setImage(e.target.value)
          }
          required
        />

        <button type="submit">
          Add Product
        </button>
      </form>

      {/* Product List */}
      <h2>Manage Products</h2>

      <div className="admin-products">
        {products.map((product) => (
          <div
            key={product.id}
            className="admin-product"
          >
            <div>
              <strong>
                {product.title}
              </strong>

              <p>
                ${product.price} •{" "}
                {product.category}
              </p>
            </div>

            <button
              onClick={() =>
                deleteProduct(
                  product.id
                )
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;