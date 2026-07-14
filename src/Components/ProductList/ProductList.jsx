import ProductCard from "../ProductCard/ProductCard";
import { useProducts } from "../../context/ProductContext";
import "./productList.css";

function ProductList({ selectedCategory, searchTerm }) {
  const { products } = useProducts();

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const searchMatch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductList;