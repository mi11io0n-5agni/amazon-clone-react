import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/products";
import "./productList.css";

function ProductList() {
  return (
    <div className="product-grid">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductList;