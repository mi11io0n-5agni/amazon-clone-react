import Header from "./Components/Header/Header";
import ProductList from "./Components/ProductList/ProductList";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;