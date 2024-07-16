"use client";

import { MdOutlineAddShoppingCart } from "react-icons/md";
import { LuBadgeCheck } from "react-icons/lu";
import { LuBadgeX } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useContext } from "react";
import { cartContext } from "../../_context/context";
import cardApis from "../../_utils/cartApis";

const ProductInfo = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  const id = product?.id;

  const title = product?.attributes?.title;

  const description = product?.attributes?.description[0].children[0].text;

  const price = product?.attributes?.price;

  const category = product?.attributes?.category;

  const instantDelivery = product?.attributes?.instantDelivery;

  const handelAddToCart = (id) => {
    if (!isSignedIn) {
      router.push("/sign-in");
    } else {
      const payload = {
        data: {
          username: user.fullName,
          email: user.emailAddresses[0].emailAddress,
          products: id,
        },
      };

      console.log(payload);
      cardApis
        .addToCart(payload)
        .then((res) => {
          console.log(res);
          setCart((prv) => [
            ...prv,
            {
              id: res?.data?.data?.id,
              product,
            },
          ]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="w-full max-w-md flex flex-col gap-2">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-500 text-sm">{category}</p>
      <p className="text-gray-500 text-lg">{description}</p>
      <div className="flex items-center gap-1">
        {instantDelivery ? (
          <LuBadgeCheck className="text-green-600 text-2xl" />
        ) : (
          <LuBadgeX className="text-red-600 text-2xl" />
        )}
        <p className="text-gray-500 text-sm">Eligible for Instant Shipping</p>
      </div>
      <p className="text-primary font-bold text-xl">$ {price}</p>

      <button
        type="button"
        onClick={() => handelAddToCart(id)}
        className="flex items-center gap-2  mt-4 rounded-md border border-primary bg-primary text-white px-3 py-2 text-md font-medium uppercase tracking-widest transition-colors hover:bg-white hover:text-indigo-900 w-fit">
        <MdOutlineAddShoppingCart className="text-2xl" /> Add to cart
      </button>
    </div>
  );
};

export default ProductInfo;
