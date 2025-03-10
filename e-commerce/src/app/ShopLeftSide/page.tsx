import Image from "next/image"
import { FaSearchPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";
import { HiOutlineMagnifyingGlass} from "react-icons/hi2";

export default function ShopLeftSide () {
    const data = [ 
    {
        id:1,
        title :"Dictum morbi",
        price:"$26.00",
        delPrice:"$52.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image: "/images/Rectangle 38.png"
    },
    {
        id:2,
        title :"Sodales sit",
        price:"$26.00",
        delPrice:"$52.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/Rectangle 32.png"
    },
    {
        id:3,
        title :"Nibh varius",
        price:"$26.00",
        delPrice:"$52.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/Rectangle 33.png"
    },
    {
        id:4,
        title :"Mauris quis",
        price:"$26.00",
        delPrice:"$52.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/Rectangle 36.png"
    },
    {
        id:5,
        title :"Morbi sagittis",
        price:"$26.00",
        delPrice:"$52.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/Rectangle 37.png"
    },
    {
        id:6,
        title :"Ultricies venenatis",
        price:"$26.00",
        delPrice:"$52.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/Rectangle 34.png"
    },
    {
        id:7,
        title :"Scelerisque dignissim",
        price:"$26.00",
        delPrice:"$52.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/Rectangle 35.png"
    },
    ]

    return (
        <header className="min-h-screen bg-gray-50">
           <div className="w-full bg-[#F2F0FF] px-4 sm:px-6 lg:px-20 py-8 sm:py-10">
               <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#101750] font-[JosefinSans] font-bold">Shop Left Side</h1>
                <ul className="flex gap-2 text-sm sm:text-base mt-2">
                  <li>Home_</li>
                  <li>Pages_</li>
                  <li className="text-pink-600">Shop Left Side</li>
                </ul>
            </div>

           <div className="container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="space-y-6 sm:space-y-8 lg:space-y-0 lg:flex lg:justify-between lg:items-center mb-8 sm:mb-12">
                    <div>
                       <h1 className="text-2xl sm:text-3xl text-[#151875] font-bold font-serif mb-2">Ecommerce Accessories & Fashion Item</h1>
                        <p className="text-sm text-[#8A8FB9]">About 9,620 results (0.62 seconds)</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
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

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Sidebar */}
                    <div className="w-full lg:w-64 space-y-8">
                        {/* Product Brand */}
                        <div className="space-y-3">
                            <h2 className="font-bold text-lg text-[#151875] font-[JosefinSans] border-b pb-2">Product Brand</h2>
                            {['Coaster Furniture', 'Fusion Dot High Fashion', 'Unique Furnitture Restor', 'Dream Furnitture Flipping', 'Young Repurposed', 'Green DIY furniture'].map((brand) => (
                                <div key={brand} className="flex items-center gap-2">
                                    <input type="checkbox" className="rounded text-pink-500 focus:ring-pink-500"/>
                                    <label className="text-sm text-[#7E81A2] font-[Lato]">{brand}</label>
                                </div>
                            ))}
                        </div>

                        {/* Discount Offer */}
                        <div className="space-y-3">
                            <h2 className="font-bold text-lg text-[#151875] font-[JosefinSans] border-b pb-2">Discount Offer</h2>
                            {['20% Cashback', '5% Cashback Offer', '25% Discount Offer'].map((offer) => (
                                <div key={offer} className="flex items-center gap-2">
                                    <input type="checkbox" className="rounded text-pink-500 focus:ring-pink-500"/>
                                    <label className="text-sm text-[#7E81A2] font-[Lato]">{offer}</label>
                                </div>
                            ))}
                        </div>

                        {/* Categories */}
                        <div className="space-y-3">
                            <h2 className="font-bold text-lg text-[#151875] font-[JosefinSans] border-b pb-2">Categories</h2>
                            {['Prestashop', 'Magento', 'Bigcommerce', 'OsCommerce', '3dcart', 'Bags', 'Accessories', 'Jewellery', 'Watches'].map((category) => (
                                <div key={category} className="flex items-center gap-2">
                                    <input type="checkbox" className="rounded text-pink-500 focus:ring-pink-500"/>
                                    <label className="text-sm text-[#7E81A2] font-[Lato]">{category}</label>
                                </div>
                            ))}
                        </div>

                        {/* Price Filter */}
                        <div className="space-y-3">
                            <h2 className="font-bold text-lg text-[#151875] font-[JosefinSans] border-b pb-2">Price Filter</h2>
                            {['$0.00 - $150.00', '$150.00 - $350.00', '$150.00 - $504.00', '$450.000 +'].map((range) => (
                                <div key={range} className="flex items-center gap-2">
                                    <input type="checkbox" className="rounded text-pink-500 focus:ring-pink-500"/>
                                    <label className="text-sm text-[#7E81A2] font-[Lato]">{range}</label>
                                </div>
                            ))}
                            <div className="relative mt-4">
                                <input 
                                    type="search" 
                                    placeholder="$10.0 - $20.0" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                <HiOutlineMagnifyingGlass className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"/>
                            </div>
                        </div>

                        {/* Color Filter */}
                        <div className="space-y-3">
                            <h2 className="font-bold text-lg text-[#151875] font-[JosefinSans] border-b pb-2">Filter By Color</h2>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { color: '#5E37FF', name: 'Blue' },
                                    { color: '#33D221', name: 'Green' },
                                    { color: '#FF9437', name: 'Orange' },
                                    { color: '#E248FF', name: 'Purple' },
                                    { color: '#FFBF95', name: 'Brown' },
                                    { color: '#26CBFF', name: 'Sky' }
                                ].map((item) => (
                                    <div key={item.name} className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                                        <span className="text-sm text-gray-600">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {data.map((item, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
                                    <div className="relative aspect-[4/3] bg-gray-100">
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
                                                <CiHeart className="w-5 h-5 text-gray-700"/>
                                            </button>
                                            <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                                                <MdOutlineLocalGroceryStore className="w-5 h-5 text-gray-700"/>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <h2 className="text-lg font-bold text-[#111C85] font-[JosefinSans] mb-2">{item.title}</h2>
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-[#111C85]">{item.price}</span>
                                            <del className="text-[#FF2AAA] text-sm">{item.delPrice}</del>
                                        </div>
                                        <p className="text-[#9295AA] text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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
