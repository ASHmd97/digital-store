import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ Product }) => {
  const id = Product.id;

  const title = Product.attributes.title;

  const description = Product.attributes.description[0].children[0].text;

  const price = Product.attributes.price;

  const category = Product.attributes.category;

  const instantDelivery = Product.attributes.instantDelivery;

  const whatsIncluded = Product.attributes.whatsIncluded;
  const whatsIncluded_ = whatsIncluded.map((item) => item.children[0].text);

  const banner = Product.attributes.banner.data.attributes.url;

  const files = Product.attributes.files.data[0].attributes.url;

  return (
    <div className="max-w-sm mx-auto shadow-xl">
      <div className="relative block rounded-tr-3xl border border-gray-100">
        <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-secondary px-2 py-2 font-base uppercase tracking-widest text-white">
          Save 10%
        </span>

        <Image
          src={banner}
          alt=""
          className="max-h-80 w-full rounded-tr-3xl object-cover"
          width={300}
          height={300}
        />

        <div className="p-4 flex flex-col justify-start space-y-4">
          <h1 className="text-xl font-medium text-gray-900 line-clamp-1">
            {title}
          </h1>

          <p className="text-sm my-2 text-pretty text-gray-700 line-clamp-3">
            {description}
          </p>
          <div className="flex justify-between">
            <span>{category}</span>
            <p>{price}</p>
          </div>

          {/* {whatsIncluded_.map((item) => (
            <p>{item}</p>
          ))} */}

          <Link
            href={`/Product-details/${id}`}
            type="button"
            className="text-center mt-4 rounded-md border border-primary bg-primary text-white px-3 py-2 text-md font-medium uppercase tracking-widest transition-colors hover:bg-white hover:text-indigo-900">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
