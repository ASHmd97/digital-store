import { GoCheckCircleFill } from "react-icons/go";

const ProductIncluded = ({ whatsIncluded }) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <h1 className="text-3xl font-bold">What you'll learn</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {whatsIncluded?.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div>
              <GoCheckCircleFill className="text-primary text-xl" />
            </div>

            <p className="text-gray-500 max-w-lg">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductIncluded;
