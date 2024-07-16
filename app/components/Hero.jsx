import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-screen-xl px-4 py-24  lg:flex">
        <div className="mx-auto text-center">
          <h1 className="text-3xl font-extrabold md:text-5xl">
            All your Digital Products
            <br />
            <strong className="py-4 font-extrabold text-secondary sm:block">
              Is One Click Away
            </strong>
          </h1>

          <p className="mt-2 max-w-lg md:max-w-xl mx-auto sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex  justify-center gap-6">
            <Link
              className="block rounded-md bg-primary px-12 py-3 text-sm font-medium text-white shadow-lg hover:bg-primary/60 outline-none w-auto"
              href="#">
              Get Started
            </Link>

            <Link
              className="block bg-secondary rounded-md px-12 py-3 text-sm font-medium text-white shadow-lg hover:bg-secondary/60 outline-none  w-auto"
              href="#">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
