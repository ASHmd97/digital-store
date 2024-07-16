import ProductCard from "./ProductCard";

const ProductsList = ({ productList }) => {
  // console.log(productList);

  const productList_ = productList.map((product) => {
    return <ProductCard key={product.id} Product={product} />;
  });
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-4xl font-bold md:text-5xl">
        Our Latest Products
      </h2>

      <p className="text-gray-500 mb-8">We have all kinds of products</p>
      {/* grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-8 gap-4">
        {/* {productList_} */}
        {productList_}
      </div>
    </div>
  );
};

export default ProductsList;
