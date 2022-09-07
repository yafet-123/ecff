import Image from "next/image";
import React from "react";
import Link from "next/link";

function NewsAndBlogs({ newsAndBlogs }) {
  console.log(newsAndBlogs)
  return (
    <div className="text-center h-full mb-32 md:mb-24">
      <h2 className="text-black font-bold text-md md:text-md my-1">
        STAY INFORMED
      </h2>
      <h2 className="text-ecffBrown font-bold text-2xl md:text-5xl my-4">
        News And Blogs
      </h2>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 px-10">
        {newsAndBlogs.map((news, index) => {
          return (
            <div
              key={index}
              className="flex flex-col m-5"
            >
              <img
                src={news.urlToImage}
                width={500}
                height={500}
                objectFit="cover"
              />
              <p className="my-5 text-textblack text-left text-lg text-center w-full h-full">{news.description}</p>
              <p>Written by {news.author} </p>
              <Link href={news.url}>
                <a className="my-5 border px-4 py-3 rounded-full bg-blue-300 hover:bg-blue-600">
                  Read
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewsAndBlogs;
