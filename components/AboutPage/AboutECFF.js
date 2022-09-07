import Link from "next/link";
import React from "react";
import Image from 'next/image'

export default function AboutECFF({Aboutdata}) {
    console.log(Aboutdata)
    const SVGIMAGE = [
        { path: "/icons/Vector (1).svg"},
        { path: "/icons/Vector.svg" },
        { path: "/icons/Vector (2).svg"},
        { path: "/icons/Vector (3).svg"},
    ];
    return (
        <div className="flex flex-col w-full mb-40 px-5 md:px-96">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="flex flex-col w-full lg:w-130">
                    <h1 className="text-ecffBrown font-bold text-4xl md:text-5xl my-4">We are ECFF</h1>
                    <p className="text-textblack text-left md:text-lg my-2 w-full">
                        Environment and Coffee Forest Forum (ECFF) is a local civil society organization registered 
                        and licensed in Ethiopia (Registration Number 0378) and focuses on developing strategies for 
                        sustainable use and conservation of the environment in general and the Coffee forests in 
                        particular, through thematic research on conservation planning education and pilot 
                        implementation of research finding.<br />
                        ECFF provides services including conservation planning practical implementation 
                        specifically proven concepts, environmental education and capacity building and 
                        climate change mitigation.  
                    </p>
                </div>

                <div className="relative hidden lg:inline flex flex-row mt-10 md:mt-0">
                    <div className="lg:absolute w-96 h-96 project-one-background bg-cover bg-center">
                    
                    </div>

                    <div className="lg:absolute w-96 h-72 project-two-background bg-cover bg-center lg:top-2/4 lg:left-1/4">
                    
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 mt-52 px-5 md:px-0">
                { Aboutdata.map((item,index)=>(
                    <div key={index} className="flex">
                        <Image src={SVGIMAGE[index].path} width={30} height={30} alt="" className=""/>
                        <div className="ml-6 flex flex-col">
                            <h1 className="text-2xl font-bold">{item.count}</h1>
                            <p className="text-base">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
