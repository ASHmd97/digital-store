"use client";

import Image from "next/image";
import Link from "next/link";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useState, useContext, useEffect } from "react";
import { cartContext } from "../_context/context";
import MobileNav from "./MobileNav";
import cardApis from "../_utils/cartApis";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Cart from "./Cart";

const links = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "#" },
  { name: "Products", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Contact Us", href: "#" },
];

const Header = () => {
  const { cart, setCart } = useContext(cartContext);
  const pathname = usePathname();
  const { isSignedIn, user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    getCartItems();
  }, [user]);

  const getCartItems = async () => {
    if (isSignedIn) {
      const email = user.emailAddresses[0].emailAddress;
      cardApis.getUserCartItems(email).then((response) => {
        console.log(response?.data?.data);
        response?.data?.data?.map((item) => {
          setCart((prv) => [
            ...prv,
            {
              id: item?.id,
              product: item?.attributes?.products?.data[0],
            },
          ]);
        });
      });
    }
  };
  return (
    pathname !== "/sign-in" &&
    pathname !== "/sign-up" && (
      <header className="bg-white relative shadow-lg">
        <div className="relative container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div
            className={`${
              showCart ? "block" : "hidden"
            } absolute top-[64px] right-4 z-40`}>
            <Cart setShowCart={setShowCart} />
          </div>
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600" href="#">
                <Image src="/logo.svg" alt="" width={42} height={42} />
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href={link.href}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="flex gap-4">
                {user && (
                  <div
                    className="cursor-pointer flex items-center justify-center gap-1 rounded-full bg-primary hover:bg-white/70 hover:text-primary px-3 py-1 text-sm font-medium text-white shadow-md transition-all duration-500"
                    onClick={() => setShowCart(!showCart)}>
                    <MdOutlineAddShoppingCart className="text-2xl" />
                    <span>({cart.length})</span>
                  </div>
                )}
                <div className="flex items-center justify-center rounded-full bg-primary hover:bg-white/70 hover:text-primary px-4 py-2 text-lg font-medium text-white shadow-md transition-all duration-500">
                  <SignedOut>
                    <SignInButton />
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
              </div>

              <div className="block md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <Image src="/burgerMenu.svg" alt="" width={24} height={24} />
                </button>
              </div>
              {/* Mobile menu */}
              <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>
      </header>
    )
  );
};

export default Header;
