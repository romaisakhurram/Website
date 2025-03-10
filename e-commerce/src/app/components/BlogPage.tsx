"use client"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage () {
    const data = [ 
    {
        id:1,
        title :"Top essential Trend in 2021",
        desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
        button:"ReadMore",
       Image:  "/images/cart1.png"
    },
    {
        id:2,
        title :"Top essential Trend in 2021",
        desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
        button:"ReadMore",
       Image :  "/images/cart2.png"
    },
    {
        id:3,
        title :"Top essential Trend in 2021",
        desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
        button:"ReadMore",
       Image :  "/images/cart3.png"
    },
    ]

    return (
        <div className="w-full py-10 md:py-20 px-4 md:px-5">
          <h1 className="text-2xl md:text-[40px] font-[JosefinSans] font-bold text-[#1A0B5B] text-center">Latest Blog</h1>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 md:gap-10">
           {data.map ((Idata,index) => (
            <div key={index} className="mt-8 md:mt-20 bg-white w-full md:w-[350px] shadow-lg border border-gray-300 rounded-xl">
                <div className="w-full h-[200px] relative">
                  <Image 
                    src={Idata.Image} 
                    alt={Idata.title} 
                    width={220} 
                    height={180}
                    className="w-full h-full object-cover m-0 rounded-t-xl"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-[#1A0B5B] hover:text-pink-600 font-[Josefin Sans] text-lg md:text-xl mb-2">{Idata.title}</h3>
                  <p className="text-[#72718F] font-[Lato] text-sm md:text-md mb-4">{Idata.desc}</p>
                  <button className="text-[#1A0B5B] font-[Lato] text-sm md:text-md underline underline-offset-1 hover:text-pink-600 transition-colors">
                    <Link href="/Blog1">{Idata.button}</Link>
                  </button>
                </div>
            </div>
            ))}
            </div>
        </div>
    )
}