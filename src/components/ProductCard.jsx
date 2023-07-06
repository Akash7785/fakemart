import React from "react";
import "../styles/productcard.css";
import { Button } from "@mui/material";

const ProductCard = ({ title, image, price, category }) => {
  return (
    <div className="prodcontainer">
      <div className="prod">
        <img src={image} alt="productImage" />
        <h3>{category}</h3>
        <p>{title}</p>
        <h4>₹{price}</h4>
        <Button variant="contained">Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
