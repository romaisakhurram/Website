import { FaRegHeart } from "react-icons/fa6";
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
        <div className="w-full py-10 md:py-20 px-4 md:px-5">
          <h1 className="text-2xl md:text-[40px] font-[Josefin Sans] font-bold text-[#1A0B5B] text-center">Feature Product</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 max-w-7xl mx-auto">
           {data.map ((Idata,index) => (
              <div key={index} className="mt-8 md:mt-20 bg-white w-full relative group overflow-hidden shadow-xl rounded-md">
                <div className="bg-[#F2F0FF] w-full aspect-square relative rounded-t-sm">
                  <Image 
                    src={Idata.Image} 
                    alt={Idata.title} 
                    width={220} 
                    height={220}
                    className="w-full h-full object-contain p-6 md:p-10"
                  />
                  {/* Hover Icons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                      <FaRegHeart className="w-5 h-5 text-[#1A0B5B]"/>
                    </button>
                    <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                      <MdOutlineLocalGroceryStore className="w-5 h-5 text-[#1A0B5B]"/>
                    </button>
                    <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                      <FaSearchPlus className="w-5 h-5 text-[#1A0B5B]"/>
                    </button>
                  </div>
                  {/* View Details Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-32 h-10 bg-green-400 text-white text-sm font-medium hover:bg-green-600 rounded-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      View details
                    </button>
                  </div>
                </div>
                <div className="p-4 text-center hover:bg-blue-600 hover:text-white transition-colors">
                  <h2 className="text-pink-600 group-hover:text-white text-lg font-[Lato]">{Idata.title}</h2>
                  <p className="text-sm text-[#151875] group-hover:text-white font-[JosefinSans]">{Idata.Code}</p>
                  <p className="text-sm text-[#151875] group-hover:text-white font-[Lato]">{Idata.price}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 md:mt-10 gap-1">
            <div className="bg-pink-600 w-4 h-1 rounded-md"></div>
            <div className="bg-pink-400 w-4 h-1 rounded-md"></div>
            <div className="bg-pink-400 w-4 h-1 rounded-md"></div>
            <div className="bg-pink-400 w-4 h-1 rounded-md"></div>
          </div>
        </div>
    )
}