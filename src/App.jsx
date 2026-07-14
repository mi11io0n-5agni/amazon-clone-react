import { useState, useEffect } from "react";
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
import Checkout from "./pages/Checkout/Checkout";

import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";
import Profile from "./pages/Profile/Profile";
import Orders from "./pages/Orders/Orders";
import Payment from "./pages/Payment/Payment";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div>
      <Header
        setSearchTerm={setSearchTerm}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Navbar setSelectedCategory={setSelectedCategory} />

      <Routes>
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

        <Route path="/cart" element={<Cart />} />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route path="/login" element={<Login />} />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

      <Route
      path="/payment"
      element={
        <ProtectedRoute>
          <Payment />
        </ProtectedRoute>
      }
    />

        <Route
          path="/order-success"
          element={<OrderSuccess />}
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={<AdminDashboard />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;