import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
