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
        className="grid grid-cols-2 gap-2 lg:grid-cols-4 p-10"
      >
        {PartnersLinks.map((partner, index) => {
          return (
            <div
              key={index}
              className="w-full mx-auto h-full border-gray-200 hover:border-gray-500 border-2 justify-center items-center flex"
            >
              <Link href={partner.url}>
                <Image
                  src={partner.imgsrc}
                  alt={partner.name}
                  width={200}
                  height={200}
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
