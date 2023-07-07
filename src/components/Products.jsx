import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { server } from "../index";
import { Slider } from "@mui/joy";

import "../styles/productcard.css";

const marks = [
  {
    value: 10,
    label: "₹ 10",
  },
  {
    value: 100,
    label: "₹100",
  },
  {
    value: 500,
    label: "₹500",
  },
  {
    value: 1000,
    label: "₹1000",
  },
];

function valueText(value) {
  return `₹ ${value}`;
}

const Products = () => {
  const [product, setProduct] = useState([]);
  const [price, setNewPrice] = useState([10, 50]);

  const newPrice = (event, newValue) => {
    setNewPrice(newValue);

    settedProduct(newValue[0], newValue[1]);
  };

  const settedProduct = (min, max) => {
    console.log(min);
    console.log(max);
    const newItem = product.filter((newval) => {
      return newval.price <= min || newval.price >= max;
    });
    console.log("New array is ", newItem);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`${server}/products`);
      // console.log(data);
      setProduct(data);
      // settedProduct();
    };
    fetchProduct();
  }, []);

  return (
    <>
      <div className="filter">
        <div className="slider">
          <Slider
            min={5}
            max={1000}
            getAriaLabel={() => "Temperature range"}
            value={price}
            onChange={newPrice}
            valueLabelDisplay="auto"
            getAriaValueText={valueText}
            marks={marks}
          />
        </div>
      </div>

      {/* {
        product.filter()
      } */}

      <div className="cardcontainer">
        <div className="cardRender">
          {product.map((i) => (
            <ProductCard
              key={i.id}
              image={i.image}
              title={i.title}
              price={i.price}
              category={i.category}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
