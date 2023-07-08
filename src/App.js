import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
