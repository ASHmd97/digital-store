"use client";
import { useEffect, useState } from "react";
import {
  getProductById,
  getProductsByCategory,
} from "@/app/_utils/productApis";

import Breadcrumb from "@/app/Product-details/_components/Breadcrumb";
import ProductBanner from "../_components/ProductBanner";
import ProductInfo from "../_components/ProductInfo";
import ProductIncluded from "../_components/ProductIncluded";
import ProductCard from "@/app/components/ProductCard";

const page = ({ params }) => {
  const [product, setProduct] = useState({});
  const [relatedProductsList, setRelatedProductsList] = useState([]);

  useEffect(() => {
    getProductById_(params);
  }, [params.productId]);

  const getProductById_ = async (params) => {
    try {
      const res = await getProductById(params.productId);

      if (res && res.data && res.data.data) {
        const product = res.data.data;
        setProduct(product);

        fetchRelatedProducts(product.attributes.category);
      } else {
        console.log(
          "response or response.data or response.data.data undefined"
        );
      }
    } catch (error) {
      console.error("Error in getProductById:", error);
    }
  };

  const fetchRelatedProducts = async (cat) => {
    try {
      const response = await getProductsByCategory(cat);
      if (response && response.data) {
        setRelatedProductsList(response.data.data);
        console.log("Related products data:", response.data.data);
      } else {
        console.log("response or response.data undefined");
      }
    } catch (error) {
      console.error("Error in fetchRelatedProducts:", error);
    }
  };

  const whatsIncluded = product?.attributes?.whatsIncluded;
  const whatsIncluded_ = whatsIncluded?.map((item) => item.children[0].text);

  const banner = product?.attributes?.banner?.data?.attributes?.url;

  return (
    <section className="container mx-auto py-14 px-6">
      <div className="flex flex-col gap-12">
        {/* Breadcrumb */}
        <Breadcrumb productId={params.productId} />

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product image  */}
          <ProductBanner banner={banner} />
          {/* Product Info */}
          <ProductInfo product={product} />
          {/* line */}
        </div>
        <div className="w-full h-1 bg-gray-200"></div>

        {/* Product what's included */}
        <ProductIncluded whatsIncluded={whatsIncluded_} />

        <div className="w-full h-1 bg-gray-200"></div>
        {/* related products */}
        <h1 className="text-3xl font-bold">Related Products</h1>
        <div className="w-full xl:w-[70%] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {relatedProductsList?.map((item, index) => (
              <ProductCard key={index} Product={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
