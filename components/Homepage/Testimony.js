import Image from "next/image";
import Link from "next/link";
import React from "react";

function Testimony() {
  return (
    <div className="flex flex-col space-x-0 space-y-4 h-128  items-center bg-ecffSecondary text-center font-montserrat my-16 mx-auto py-12">
      <Image
        src="/images/QuoteVector.svg"
        className=""
        alt="quote"
        width={100}
        height={35}
      />
      <p className="text-testimonyTextColor text-lg">
        Thousands of satisfied users around the globe
      </p>

      <h2 className="text-black-500 font-semibold text-2xl text-center w-3/5">
        “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
        purus pharetra magna tempor egestas non id massa. ”
      </h2>

      <div className="flex flex-row justify-center items-center space-x-6 h-32 w-1/4">
        <Link href="/">
          <a className="text-testimonyTextColor font-semibold text-sm">
            &#8592; PREV
          </a>
        </Link>
        <div className="">
          <Image
            className="rounded-full"
            src={
              "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            }
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
        <Link href="/">
          <a className="text-testimonyTextColor font-semibold text-sm">
            NEXT &#8594;
          </a>
        </Link>
      </div>
      <p className="text-lg text-black font-bold font-monospace">
        Abebech Derara
      </p>
      <p className="text-testimonyTextColor font-semibold font-monospace text-md">
        Customer
      </p>
    </div>
  );
}

export default Testimony;
