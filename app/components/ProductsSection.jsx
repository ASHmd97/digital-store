"use client";

import { getProducts } from "../_utils/productApis";
import ProductsList from "./ProductsList";
import { useEffect, useState } from "react";

const ProductsSection = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProducts_();
  }, []);

  const getProducts_ = () => {
    getProducts().then((res) => {
      setProductList(res.data.data);
    });
  };

  return (
    <div className="container mx-auto">
      <ProductsList productList={productList} />
    </div>
  );
};

export default ProductsSection;
