import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import products from "../../data/products";
import { useCart } from "../../context/CartContext";
import "./productdetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const savedReviews =
      JSON.parse(
        localStorage.getItem(`reviews-${id}`)
      ) || [];

    setReviews(savedReviews);
  }, [id]);

  const submitReview = (e) => {
    e.preventDefault();

    const newReview = {
      name,
      rating,
      comment,
      date: new Date().toLocaleDateString(),
    };

    const updatedReviews = [
      ...reviews,
      newReview,
    ];

    setReviews(updatedReviews);

    localStorage.setItem(
      `reviews-${id}`,
      JSON.stringify(updatedReviews)
    );

    setName("");
    setRating(5);
    setComment("");
  };

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce(
            (sum, review) =>
              sum + Number(review.rating),
            0
          ) / reviews.length
        ).toFixed(1)
      : "No ratings yet";

  return (
    <div className="details-page">
      <div className="details-container">
        <img
          src={product.image}
          alt={product.title}
          className="details-image"
        />

        <div className="details-info">
          <h1>{product.title}</h1>

          <h2>${product.price}</h2>

          <p>
            Category: {product.category}
          </p>

          <p>
            This is a premium quality product
            available in our store.
          </p>

          <h3>
            ⭐ Average Rating: {averageRating}
          </h3>

          <button
            onClick={() =>
              addToCart(product)
            }
          >
            Add To Cart
          </button>
        </div>
      </div>

      <div className="reviews-section">
        <h2>Customer Reviews</h2>

        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((review, index) => (
            <div
              className="review-card"
              key={index}
            >
              <h3>{review.name}</h3>

              <p>
                {"⭐".repeat(review.rating)}
              </p>

              <p>{review.comment}</p>

              <small>
                {review.date}
              </small>
            </div>
          ))
        )}

        <form
          className="review-form"
          onSubmit={submitReview}
        >
          <h2>Add Review</h2>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
          />

          <select
            value={rating}
            onChange={(e) =>
              setRating(e.target.value)
            }
          >
            <option value="5">
              5 Stars
            </option>
            <option value="4">
              4 Stars
            </option>
            <option value="3">
              3 Stars
            </option>
            <option value="2">
              2 Stars
            </option>
            <option value="1">
              1 Star
            </option>
          </select>

          <textarea
            placeholder="Write your review..."
            value={comment}
            onChange={(e) =>
              setComment(e.target.value)
            }
            required
          />

          <button type="submit">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductDetails;