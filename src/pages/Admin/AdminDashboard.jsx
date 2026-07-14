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
  const [category, setCategory] =
    useState("");
  const [image, setImage] =
    useState("");

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

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>

      <h2>
        Total Products: {products.length}
      </h2>

      <form
        className="admin-form"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Title"
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

      <div className="admin-products">
        {products.map((product) => (
          <div
            key={product.id}
            className="admin-product"
          >
            <span>
              {product.title}
            </span>

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