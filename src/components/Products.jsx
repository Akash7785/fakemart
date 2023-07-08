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
    value: 200,
    label: "₹200",
  },
  {
    value: 300,
    label: "₹300",
  },
  {
    value: 500,
    label: "₹500",
  },
  {
    value: 1000,
    label: "₹1000",
  },
  {
    value: 1500,
    label: "₹1500",
  },
  {
    value: 2000,
    label: "₹2000",
  },
];

function valueText(value) {
  return `₹ ${value}`;
}

const Products = () => {
  const [product, setProduct] = useState([]);
  const [SliderPrice, setSliderPrice] = useState([10, 200]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterStatus, setFilterStatus] = useState(false);

  const newPrice = (event, newValue) => {
    setSliderPrice(newValue);
    settedProduct(newValue[0], newValue[1]);
  };

  const settedProduct = (min, max) => {
    const newItem = product.filter((newPrice) => {
      return newPrice.price >= min && newPrice.price <= max;
    });
    setFilteredData(newItem);
    setFilterStatus(true);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`${server}/products`);
      setProduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <div className="filter">
        <h2>Set Price</h2>
        <div className="slider">
          <Slider
            min={5}
            max={1000}
            getAriaLabel={() => "Temperature range"}
            value={SliderPrice}
            onChange={newPrice}
            valueLabelDisplay="auto"
            getAriaValueText={valueText}
            marks={marks}
            step={100}
          />
        </div>
      </div>
      {filterStatus ? (
        <div className="cardcontainer">
          <div className="cardRender">
            {filteredData.map((i) => (
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
      ) : (
        <>
          <div className="cardcontainer">
            <div className="cardRender">
              {product.map((i) => (
                <ProductCard
                  id={i.id}
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
      )}
    </>
  );
};

export default Products;
