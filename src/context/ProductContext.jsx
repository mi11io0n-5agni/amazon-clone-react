import { createContext, useContext, useState } from "react";
import defaultProducts from "../data/products";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");

    return savedProducts
      ? JSON.parse(savedProducts)
      : defaultProducts;
  });

  const saveProducts = (updatedProducts) => {
    setProducts(updatedProducts);
    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );
  };

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
    };

    saveProducts([...products, newProduct]);
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(
      (product) => product.id !== id
    );

    saveProducts(updatedProducts);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}