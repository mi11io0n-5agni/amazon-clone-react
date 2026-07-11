import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import ProductList from "./Components/ProductList/ProductList";
import Footer from "./Components/Footer/Footer";

import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} />

      <Navbar setSelectedCategory={setSelectedCategory} />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Banner />

              <ProductList
                selectedCategory={selectedCategory}
                searchTerm={searchTerm}
              />
            </>
          }
        />

        {/* Cart Page */}
        <Route path="/cart" element={<Cart />} />

        {/* Product Details Page */}
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        {/* Authentication Pages */}
        <Route path="/login" element={<Login />} />

        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;