import { Button } from "@mui/material";
import React from "react";
import "../styles/productdetails.css";

const ProductDetailCard = ({
  title,
  price,
  desc,
  cate,
  image,
  //   rating: { rate, count },
}) => {
  return (
    <div className="cardContainer">
      <div className="ProductDeatilCard">
        <div className="imageContainer">
          <img src={image} alt="" />
        </div>
        <div className="Productdetails">
          <h3>{cate}</h3>
          <h3>{title}</h3>
          <p>{desc}</p>
          <h4>
            <span>₹</span>
            {price}
          </h4>
          <Button variant="contained">Add to Cart</Button>
          {/* <p>{rating[rate]}</p>
        <p>{rating[count]}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
