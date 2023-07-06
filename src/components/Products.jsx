import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { server } from "../index";

import "../styles/productcard.css";

const Products = () => {
  const [product, setProduct] = useState([]);
  // const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`${server}/products`);
      console.log(data);
      setProduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <>
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
