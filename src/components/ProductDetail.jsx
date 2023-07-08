import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../index";
import { useParams } from "react-router-dom";
import ProductDetailCard from "./ProductDetailCard";

const ProductDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productDetail = async () => {
      const { data } = await axios.get(`${server}/products/${params.id}`);
      console.log(data);
      setProduct(data);
    };
    productDetail();
  }, [params.id]);

  return (
    <div className="productDetailCard">
      <ProductDetailCard
        image={product.image}
        cate={product.category}
        title={product.title}
        desc={product.description}
        price={product.price}
      />
    </div>
  );
};

export default ProductDetail;
