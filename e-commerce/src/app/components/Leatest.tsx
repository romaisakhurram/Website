import { CiHeart } from "react-icons/ci";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaSearchPlus } from "react-icons/fa";
import Image from "next/image"

export default function Leatest () {
    const data = [ 
    {
        id:1,
        title :"Comfort Handy Craft",
        price:"$42.00",
        delPrice:"$65.00",
        Image: "/images/browSofa.png"
    },
    {
        id:2,
        title :"Comfort Handy Craft",
        price:"$42.00",
        delPrice:"$65.00",
        Image : "/images/chairYellow.png"
    },
    {
        id:3,
        title :"Comfort Handy Craft",
        price:"$42.00",
        delPrice:"$65.00",
        Image : "/images/chairWhite.png"
    },
    {
        id:4,
        title :"Comfort Handy Craft",
        price:"$42.00",
        delPrice:"$65.00",
       Image : "/images/whiteSofa.png"
    },
    {
        id:5,
        title :"Comfort Handy Craft",
        price:"$42.00",
        delPrice:"$65.00",
       Image : "/images/blackSofa.png"
    },
    {
        id:6,
        title :"Comfort Handy Craft",
        price:"$42.00",
        delPrice:"$65.00",
       Image : "/images/chair.png"
    },
    ]

    return (
        <div className="w-full py-10 md:py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl md:text-[40px] font-[Josefin Sans] font-bold text-[#1A0B5B] text-center mb-6 md:mb-8">
                    Latest Products
                </h1>

                {/* Navigation Pills */}
                <div className="overflow-x-auto">
                    <ul className="flex justify-center text-[#1A0B5B] text-sm md:text-lg gap-4 md:gap-10 whitespace-nowrap mb-8 md:mb-12">
                        <li className="hover:text-pink-600 hover:underline hover:underline-offset-2 cursor-pointer">New Arrival</li>
                        <li className="hover:text-pink-600 hover:underline hover:underline-offset-2 cursor-pointer">Best Seller</li>
                        <li className="hover:text-pink-600 hover:underline hover:underline-offset-2 cursor-pointer">Featured</li>
                        <li className="hover:text-pink-600 hover:underline hover:underline-offset-2 cursor-pointer">Special Offer</li>
                    </ul>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {data.map((Idata, index) => (
                        <div key={index} className="relative group">
                            {/* Product Card */}
                            <div className="bg-[#F2F0FF] rounded-lg shadow-lg overflow-hidden">
                                {/* Image Container */}
                                <div className="relative aspect-square p-4 md:p-6">
                                    <Image 
                                        src={Idata.Image} 
                                        alt={Idata.title} 
                                        width={150} 
                                        height={100} 
                                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                    
                                    {/* Sale Badge */}
                                    <div className="absolute top-4 left-4">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button className="px-3 py-1 bg-[#1A0B5B] text-white text-sm font-medium rounded-sm">
                                                Sale
                                            </button>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                        <div className="flex flex-col gap-3">
                                            <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-md">
                                                <CiHeart className="w-5 h-5 text-[#1A0B5B]"/>
                                            </button>
                                            <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-md">
                                                <MdOutlineLocalGroceryStore className="w-5 h-5 text-[#1A0B5B]"/>
                                            </button>
                                            <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-md">
                                                <FaSearchPlus className="w-5 h-5 text-[#1A0B5B]"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="p-4 bg-white">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                        <h2 className="text-[#1A0B5B] text-base md:text-lg font-medium">{Idata.title}</h2>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#1A0B5B] text-base md:text-lg">{Idata.price}</span>
                                            <del className="text-pink-600 text-sm">{Idata.delPrice}</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}