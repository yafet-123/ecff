import React from "react";
import Link from "next/link";
import Image from "next/image";
function Partners() {
  const PartnersLinks = [
    { name: "usaid", url: "/", imgsrc: "/images/usaid-1.svg" },
    { name: "euras", url: "/", imgsrc: "/images/usaid-1.svg" },
    { name: "usaid", url: "/", imgsrc: "/images/usaid-1.svg" },
    { name: "euras", url: "/", imgsrc: "/images/usaid-1.svg" },
  ];

  return (
    <div className="text-center my-16 md:mx-12">
      <h1 className="text-ecffBrown font-bold text-center text-5xl">
        Partners
      </h1>
      <div
        className="flex flex-col md:flex-row space-x-0 h-128 md:space-x-6 space-y-4 md:space-y-0 md:h-64 justify-between items-center bg-white 
                    text-center font-montserrat py-6"
      >
        {PartnersLinks.map((partner, index) => {
          return (
            <div
              key={index}
              className="w-1/4 mx-auto h-full border-gray-200 hover:border-gray-500 border-2 justify-center items-center flex"
            >
              <Link href={partner.url}>
                <Image
                  src={partner.imgsrc}
                  alt={partner.name}
                  width={120}
                  height={120}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Partners;
