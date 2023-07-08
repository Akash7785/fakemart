import React from "react";
import "../styles/productcard.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ title, image, price, category, id }) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="prodcontainer">
        <div className="prod">
          <img src={image} alt="productImage" />
          <h3>{category}</h3>
          <p>{title}</p>
          <h4>₹{price}</h4>
          <Button variant="contained">View Product</Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
