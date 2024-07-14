"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileNav from "./MobileNav";

const links = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#" },
  { name: "Blog", href: "#" },
  { name: "About", href: "#" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header class="bg-white relative shadow-lg">
      <div class="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          {/* Logo */}
          <div class="md:flex md:items-center md:gap-12">
            <Link class="block text-teal-600" href="#">
              <Image src="/logo.svg" alt="" width={42} height={42} />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul class="flex items-center gap-6 text-sm">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-4">
              <Link
                class="rounded-md bg-primary hover:bg-white/70 hover:text-primary px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-500"
                href="#">
                Login
              </Link>

              <div class="hidden md:flex">
                <Link
                  class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-secondary shadow-md transition-all duration-500 hover:bg-secondary hover:text-white"
                  href="#">
                  Register
                </Link>
              </div>
            </div>

            <div class="block md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            {/* Mobile menu */}
            <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
