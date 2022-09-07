import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <div className="flex justify-end place-items-center mx-auto h-screen bg-scroll bg-blend-darken bg-opacity-50 bg-cover hero-background">
      <div className="flex flex-col p-8 w-82 text-white  text-right">
        <h2 className="text-white text-right font-bold text-4xl">
          Sustainability is Our Core Principle
        </h2>
        <p className="text-white text-right place-self-end inline w-1/2">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <Link href="/">
          <a>
            <h3 className="text-white text-right inline hover:text-ecffSecondary underline underline-offset-2 decoration-2  font-monospace font-bold hover:font-bold text-xl ">
              Learn More
            </h3>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
