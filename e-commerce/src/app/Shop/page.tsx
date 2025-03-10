import Image from "next/image"
import { FaSearchPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

export default function Shop () {
    const data = [ 
    {
        id:1,
        title :"Accumsan tincidunt",
        price:"$26.00",
        delPrice:"$42.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image: "/images/shopPic1.png"
    },
    {
        id:2,
        title :"In nulla",
        price:"$26.00",
        delPrice:"$42.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/shopPic2.png"
    },
    {
        id:3,
        title :"Vel sem",
        price:"$26.00",
        delPrice:"$42.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/shopPic3.png"
    },
    {
        id:4,
        title :"Porttitor cum",
        price:"$26.00",
        delPrice:"$42.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/shopPic4.png"
    },
    {
        id:5,
        title :"Nunc in",
        price:"$26.00",
        delPrice:"$42.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/shopPic5.png"
    },
    {
        id:6,
        title :"Vitae facilisis",
        price:"$26.00",
        delPrice:"$42.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/shopPic6.png"
    },
    {
        id:7,
        title :"Curabitur lectus",
        price:"$26.00",
        delPrice:"$42.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/shopPic7.png"
    },
    ]

    return (
        <header className="min-h-screen bg-gray-50">
           <div className="w-full bg-[#F2F0FF] px-4 sm:px-6 lg:px-20 py-8 sm:py-10">
               <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#101750] font-[JosefinSans] font-bold">Shop Lists</h1>
                <ul className="flex gap-2 text-sm sm:text-base mt-2">
                  <li>Home_</li>
                  <li>Pages_</li>
                  <li className="text-pink-600">Shop List</li>
                </ul>
            </div>

           <div className="container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="space-y-6 sm:space-y-8 lg:space-y-0 lg:flex lg:justify-between lg:items-center mb-8 sm:mb-12">
                    <div>
                       <h1 className="text-2xl sm:text-3xl text-[#151875] font-bold font-serif mb-2">Ecommerce Accessories & Fashion Item</h1>
                        <p className="text-sm text-[#8A8FB9]">About 9,620 results (0.62 seconds)</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-[#3F509E]">
                       <div className="flex items-center gap-2">
                           <label htmlFor="perPage" className="whitespace-nowrap">Per Page:</label>
                           <input 
                               type="number" 
                               id="perPage"
                               className="w-20 h-10 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" 
                           />
                       </div>

                       <div className="flex items-center gap-2">
                           <label htmlFor="sortBy" className="whitespace-nowrap">Sort By:</label>
                           <input 
                               type="text" 
                               id="sortBy"
                               placeholder="Best Watch"
                               className="w-32 h-10 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" 
                           />
                       </div>

                       <div className="flex items-center gap-2">
                           <label htmlFor="views" className="whitespace-nowrap">Views:</label>
                           <input 
                               type="number" 
                               id="views"
                               className="w-20 h-10 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" 
                           />
                       </div>
                    </div>
                </div>
                
                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {data.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                <Image 
                                    src={item.Image} 
                                    alt={item.title} 
                                    width={400} 
                                    height={300}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {/* Quick Action Buttons */}
                                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                                        <FaSearchPlus className="w-5 h-5 text-gray-700"/>
                                    </button>
                                    <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                                        <FaRegHeart className="w-5 h-5 text-gray-700"/>
                                    </button>
                                    <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                                        <MdOutlineLocalGroceryStore className="w-5 h-5 text-gray-700"/>
                                    </button>
                                </div>
                            </div>

                            <div className="p-4 sm:p-6">
                                <h2 className="text-lg font-bold text-[#111C85] font-[JosefinSans] mb-2">{item.title}</h2>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-[#111C85] font-medium">{item.price}</span>
                                    <del className="text-[#FF2AAA] text-sm">{item.delPrice}</del>
                                </div>
                                <p className="text-[#9295AA] text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Signature */}
                <div className="flex justify-center py-12">
                    <Image
                       src="/images/Signatures.png"
                       alt="Signature"
                       width={300}
                       height={120}
                       className="w-48 sm:w-64 lg:w-80 h-auto"
                    />
                </div>
            </div>    
        </header>  
    )
}
