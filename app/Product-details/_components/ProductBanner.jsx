import Image from "next/image";

const ProductBanner = ({ banner }) => {
  return (
    <div className="w-full flex items-center justify-start">
      <Image
        src={banner}
        alt=""
        width={500}
        height={500}
        className="rounded-lg"
      />
    </div>
  );
};

export default ProductBanner;
