import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../index";
import ProductCard from "./ProductCard";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import "../styles/category.css";

const Categories = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState("jewelery");

  const handleCategory = (event) => {
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
            defaultValue={"men's clothing"}
            onChange={handleCategory}
            name="radio-buttons-group"
          >
            <Radio value="men's clothing" label="Mens" variant="outlined" />
            <Radio value="women's clothing" label="Womens" variant="outlined" />
            <Radio value="jewelery" label="Jewelery" variant="outlined" />
            <Radio value="electronics" label="Electronics" variant="outlined" />
          </RadioGroup>
        </div>
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
