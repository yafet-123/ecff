import Link from "next/link";
import React from "react";
import Image from 'next/image'

export default function Story() {
    const StoryData = [
        { year: 2001, text:""},
        { path: "/images/nathan-dumlao-KixfBEdyp64-unsplash.jpg", year: 2005, text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
        { path: "/images/nathan-dumlao-KixfBEdyp64-unsplash.jpg", year: 2012, text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
        { path: "/images/nathan-dumlao-KixfBEdyp64-unsplash.jpg", year: 2014, text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
    ];
    return (
        <div className="my-10">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-black font-bold text-lg md:text-lg text-center my-2">HOW IT ALL BEGIN</h2>
                <h1 className="text-ecffBrown font-bold text-2xl md:text-5xl text-center my-2">Our Story</h1>
                <p className="text-textblack text-left text-sm md:text-lg w-1/2 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <div className="m-24">
                <div className="flex flex-col items-center md:grid ">
                    <div className="odd:justify-self-end mb-10 md:mb-0">
                        <div className="flex items-center w-96 h-96">
                            <div className="hidden md:inline absolute left-1/2  w-0.5 h-96 bg-gray-600"></div>
                            <div className="hidden md:inline absolute left-1/2 -ml-4 w-10 h-10 rounded-full border mr-24 border-gray-200 bg-red-700 p-5">
                                
                            </div>
                            <div className="hidden md:inline absolute left-1/2 md:ml-6 w-102 h-0.5 bg-gray-600"></div>
                            <div className="hidden md:inline absolute md:left-[30%] lg:left-[40%] py-5 px-10 bg-slate-200 rounded-full">2001</div>
                            <div className="flex flex-col items-center h-full">
                                <Image 
                                    src="/images/crcoffee.jpg" 
                                    width="1050px" 
                                    height="1000px" 
                                    className=""
                                    alt=""
                                />
                                <h1 className="mt-5 text-textblack text-sm text-left md:text-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                </h1>
                            </div>
                        </div>

                    </div>
                    
                    <div className="odd:justify-self-end mb-10 md:mb-0">
                        <div className="flex items-center w-96 h-96">
                            <div className="hidden md:inline absolute left-1/2  w-0.5 h-96 bg-gray-600"></div>
                            <div className="hidden md:inline absolute left-1/2 -ml-4 w-10 h-10 rounded-full border mr-24 border-gray-200 bg-red-700 p-5">
                                
                            </div>
                            <div className="hidden md:inline absolute right-1/2 mr-4 w-102 h-0.5 bg-gray-600"></div>
                            <div className="hidden md:inline absolute md:right-[30%] lg:right-[40%] py-5 px-10 bg-slate-200 rounded-full">2005</div>
                            <div className="flex flex-col h-full">
                                <Image 
                                    src="/images/istockphoto-1197093424-612x612.jpg" 
                                    width="1050px" 
                                    height="1000px" 
                                    className=""
                                    alt=""
                                />
                                <h1 className="mt-5 text-textblack text-sm text-left md:text-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                </h1>
                            </div>
                        </div>

                    </div>

                    <div className="odd:justify-self-end mb-10 md:mb-0">
                        <div className="flex items-center w-96 h-96">
                            <div className="hidden md:inline absolute left-1/2  w-0.5 h-96 bg-gray-600"></div>
                            <div className="hidden md:inline absolute left-1/2 -ml-4 w-10 h-10 rounded-full border mr-24 border-gray-200 bg-red-700 p-5">
                                
                            </div>
                            <div className="hidden md:inline absolute left-1/2 ml-6 w-102 h-0.5 bg-gray-600"></div>
                            <div className="hidden md:inline absolute md:left-[30%] lg:left-[40%] py-5 px-10 bg-slate-200 rounded-full">2012</div>
                            <div className="flex flex-col h-full">
                                <Image 
                                    src="/images/istockphoto-843899022-612x612.jpg" 
                                    width="1050px" 
                                    height="1000px" 
                                    className=""
                                    alt=""
                                />
                                <h1 className="mt-5 text-textblack text-sm text-left md:text-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                </h1>
                            </div>
                        </div>

                    </div>

                    <div className="odd:justify-self-end mb-10 md:mb-0">
                        <div className="flex items-center justify-center w-96 h-96">
                            <div className="hidden md:inline absolute left-1/2  w-0.5 h-96 bg-gray-600"></div>
                            <div className="hidden md:inline absolute left-1/2 -ml-4 w-10 h-10 rounded-full border mr-24 border-gray-200 bg-red-700 p-5">
                                
                            </div>
                            <div className="hidden md:inline absolute right-1/2 mr-4 w-102 h-0.5 bg-gray-600"></div>
                            <div className="hidden md:inline absolute md:right-[30%] lg:right-[40%] py-5 px-10 bg-slate-200 rounded-full">2014</div>
                            <div className="flex flex-col h-full">
                                <Image 
                                    src="/images/istockphoto-938716300-170667a.jpg" 
                                    width="1050px" 
                                    height="1000px" 
                                    className=""
                                    alt=""
                                />
                                <h1 className="mt-5 text-textblack text-sm text-left md:text-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                </h1>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
