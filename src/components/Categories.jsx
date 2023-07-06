import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../index";
import ProductCard from "./ProductCard";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import { Slider } from "@mui/joy";
import "../styles/category.css";
import { Button } from "@mui/material";

function valueText(value) {
  return `${value}°C`;
}

const Categories = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState("jewelery");
  const [value, setValue] = useState([10, 30]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleEvent = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    const fetchCategory = async () => {
      const { data } = await axios.get(
        `${server}/products/category/${category}`
      );
      setProduct(data);
    };
    fetchCategory();
  }, [category]);

  return (
    <>
      <div className="filters">
        <div className="catfilter">
          <RadioGroup
            defaultValue={"jewelery"}
            onChange={handleEvent}
            name="radio-buttons-group"
          >
            <Radio value="men's clothing" label="Mens" variant="outlined" />
            <Radio value="women's clothing" label="Womens" variant="outlined" />
            <Radio value="jewelery" label="Jewelery" variant="outlined" />
            <Radio value="electronics" label="Electronics" variant="outlined" />
          </RadioGroup>
        </div>
        <div className="rangeFilter">
          <Slider
            min={1}
            max={1000}
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valueText}
          />
        </div>
        <Button color="primary" variant="outlined">
          Apply Filter
        </Button>
      </div>

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

export default Categories;
