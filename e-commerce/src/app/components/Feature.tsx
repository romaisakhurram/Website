import { CiHeart } from "react-icons/ci";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaSearchPlus } from "react-icons/fa";
import Image from "next/image"

export default function Feature () {
    const data = [ 
    {
        id:1,
        title :"Cantilever chair",
        Code:"Code-Y252301 ",
        price:"$42.00",
       Image:  "/images/chairWhite.png"
    },
    {
        id:2,
        title :"Cantilever chair",
        Code:"Code-Y252301 ",
        price:"$42.00",
       Image :  "/images/Feature2.png"
    },
    {
        id:3,
        title :"Cantilever chair",
        Code:"Code-Y252301 ",
        price:"$42.00",
       Image :  "/images/blueChair.png"
    },
    {
        id:4,
        title :"Cantilever chair",
        Code:"Code-Y252301 ",
        price:"$42.00",
       Image : "/images/chair.png"
    },
    ]

    return (
        <div className="w-full h-[800] mt-20 p-5">
          <h1 className="text-[40px] font-serif font-bold text-[#1A0B5B] text-center">Feature Product</h1>
          <div className="flex justify-center gap-10">
           {data.map ((Idata,index) => (
            <div key={index} className="mt-20 bg-white w-[300] h-[300] relative group overflow-hidden shadow-lg border border-gray-300 rounded-xl">
                <div className="flex bg-[#F2F0FF] w-[250] h-[400] rounded-xl">
                  <Image src={Idata.Image} 
                    alt={Idata.title} 
                    width={220} 
                    height={220}
                    className="w-60 h-60 mr-5 mt-5"
                   ></Image>
                </div>
                <div className="p-2 text-center hover:bg-blue-800 hover:text-white">
                  <h2 className="text-pink-600 text-lg hover:text-white">{Idata.title}</h2>
                  <p>{Idata.Code}</p>
                  <p className="text-gray-400 text-bold hover:text-white">{Idata.price}</p>
                </div>
                <div className="absolute inset-2 bg-opacity-100 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="space-x-2 flex">
                    <CiHeart className="w-8 h-6 mb-1 text-blue-950"/>
                    <MdOutlineLocalGroceryStore className="w-8 h-6 mb-1 text-blue-950"/> 
                    <FaSearchPlus className="w-8 h-4 mt-1 text-blue-950"/>
                  </div> 
                </div>
                <div className="absolute inset-20 bg-opacity-100 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="px-2 py-2 mt-10 bg-green-400 text-white text-sm font-medium hover:bg-green-600 rounded-sm">
                      View details
                  </button>
                </div>
            </div>
            ))}
            </div>
  
        </div>
    )
}