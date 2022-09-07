import React from "react";
import Link from "next/link";

function Publication() {
  return (
    <div className="my-32 md:mt-48 text-white bg-white">
      <h1 className="text-ecffBrown font-bold text-center text-5xl">
        Publications
      </h1>
      <div
        className="flex flex-col-reverse my-12 justify-center h-128 items-center space-y-4 space-x-0  
          mx-24 md:flex-row md:space-y-0 md:space-x-4"
      >
        <div className="flex flex-col items-end justify-start  w-1/2 h-128 bg-blend-darken overflow-hidden bg-cover bg-center publications-reports-two">
          <div className="flex flex-col w-1/2  justify-between h-full">
            <div className="flex flex-col place-self-end my-8 space-y-6">
              <h3 className="text-white font-monospace font-bold text-2xl">
                2021 Production Reports
              </h3>
              <p className="text-ecffSecondary font-sans">
                Lorem ipsum dolor sit amet, consectet.
              </p>
            </div>

            <div className="flex flex-col space-y-1 place-self-start my-8">
              <p className="text-copyrightTextColor text-sm font-sans">
                4.1 MB PDF
              </p>
              <Link href="/">
                <a>
                  <h5 className="border my-2 p-1 text-sm text-copyrightTextColor font-semibold font-monospace hover:text-white ">
                    DOWNLOAD
                  </h5>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:w-1/2 space-y-2 h-128">
          <div className="flex flex-col h-1/2 bg-black/10 bg-blend-darken	 bg-cover bg-center publications-reports-one justify-start items-end">
            <div className="flex flex-col w-1/2  justify-between h-full">
              <div className="flex flex-col place-self-end my-6 space-y-2">
                <h3 className="text-white font-monospace font-bold text-2xl">
                  2021 Production Reports
                </h3>
                <p className="text-ecffSecondary font-sans">
                  Lorem ipsum dolor sit amet, consectet.
                </p>
              </div>
              <div className="flex flex-col space-y-1 place-self-start">
                <Link href="/">
                  <a>
                    <h5 className="border mb-4 p-1 text-sm text-copyrightTextColor font-semibold font-monospace hover:text-white ">
                      READ MORE
                    </h5>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-1/2 bg-black/10 bg-blend-darken	 bg-cover bg-center publications-reports-three justify-start items-end">
            <div className="flex flex-col w-1/2  justify-between h-full">
              <div className="flex flex-col place-self-end my-6 space-y-2">
                <h3 className="text-white font-monospace font-bold text-2xl">
                  2021 Seminar
                </h3>
                <p className="text-ecffSecondary font-sans">
                  Lorem ipsum dolor sit amet, consectet.
                </p>
              </div>
              <div className="flex flex-col space-y-1 place-self-start">
                <p className="text-copyrightTextColor text-sm font-sans">
                  32 mins
                </p>
                <Link href="/">
                  <a>
                    <h5 className="border mb-4 p-1 text-sm text-copyrightTextColor font-semibold font-monospace hover:text-white ">
                      VIEW
                    </h5>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publication;
