"use client";
import React, { useContext } from "react";
import { cartContext } from "../_context/context";
import Link from "next/link";

const Cart = ({ setShowCart }) => {
  const { cart, setCart } = useContext(cartContext);
  return (
    <div
      className="w-screen max-w-[300px] drop-shadow-lg bg-gray-100 px-3 py-4 "
      aria-modal="true"
      role="dialog"
      tabIndex="-1">
      <div className="space-y-2 max-h-[360px] ">
        <div className="max-h-[200px] overflow-y-scroll">
          <ul className="space-y-3">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center gap-4">
                <img
                  src={item?.product?.attributes?.banner.data.attributes.url}
                  alt=""
                  className="size-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-lg text-gray-900 line-clamp-1">
                    {item?.product?.attributes?.title}
                  </h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div className="flex gap-1 text-[12px]">
                      <dt className="inline">Category:</dt>
                      <dd className="inline">
                        {item?.product?.attributes?.category}
                      </dd>
                    </div>

                    <div className="flex gap-1 text-[12px]">
                      <dt className="inline">Price:</dt>
                      <dd className="inline">
                        ${item?.product?.attributes?.price}
                      </dd>
                    </div>
                  </dl>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 text-center">
          <Link
            href="/Cart"
            className="block mt-6 rounded border border-primary px-5 py-3 text-md text-primary transition hover:ring-1 hover:ring-primary">
            View my cart ({cart.length})
          </Link>
          <a
            href="#"
            className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
            onClick={() => setShowCart(false)}>
            Continue shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
