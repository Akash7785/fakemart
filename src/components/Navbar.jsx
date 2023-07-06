import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </>
  );
};

export default Navbar;
