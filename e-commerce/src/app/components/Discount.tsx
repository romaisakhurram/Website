import Image from "next/image"
import { TiTick } from "react-icons/ti";
import Link from "next/link"

export default function Discount () {
    return (
        <div className="w-full py-10 md:py-20 px-4 md:px-8">
            <h1 className="text-2xl md:text-3xl text-[#1A0B5B] font-bold font-[Josefin Sans] text-center">Discount Items</h1>
            
            {/* Navigation Pills */}
            <div className="flex justify-center mt-5 overflow-x-auto">
                <ul className="flex gap-4 md:gap-10 px-4">
                    <li className="text-[#1A0B5B] hover:text-pink-600 whitespace-nowrap cursor-pointer">Wood Chair</li>
                    <li className="text-[#1A0B5B] hover:text-pink-600 whitespace-nowrap cursor-pointer">Plastic Chair</li>
                    <li className="text-[#1A0B5B] hover:text-pink-600 whitespace-nowrap cursor-pointer">Sofa collection</li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto mt-8 md:mt-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
                        <h2 className="text-2xl md:text-[35px] font-bold font-[Josefin Sans] text-[#1A0B5B] leading-tight">
                            20% off Discount of all Products
                        </h2>
                        <p className="text-lg md:text-xl text-pink-600 font-[Josefin Sans]">
                            Eams Sofa Compact
                        </p>
                        <p className="text-base md:text-[17px] text-gray-400 font-[Lato]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
                        </p>
                        
                        {/* Feature List */}
                        <div className="space-y-3">
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
                                <p className="flex items-center text-base md:text-[17px] text-gray-400 font-[Lato]">
                                    <TiTick className="text-[#7569B2] mr-2" />
                                    Material expose like metals
                                </p>
                                <p className="flex items-center text-base md:text-[17px] text-gray-400 font-[Lato]">
                                    <TiTick className="text-[#7569B2] mr-2" />
                                    Clear lines and geomatric figures
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
                                <p className="flex items-center text-base md:text-[17px] text-gray-400 font-[Lato]">
                                    <TiTick className="text-[#7569B2] mr-2" />
                                    Simple neutral colours
                                </p>
                                <p className="flex items-center text-base md:text-[17px] text-gray-400 font-[Lato]">
                                    <TiTick className="text-[#7569B2] mr-2" />
                                    Material expose like metals
                                </p>
                            </div>
                        </div>

                        <button className="w-32 md:w-40 h-[40px] bg-pink-600 text-white text-base md:text-[17px] font-[Josefin Sans] hover:bg-pink-700 transition-colors">
                            <Link href="/ShopLeftSide">Shop Now</Link>
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative aspect-square bg-pink-100 rounded-full max-w-[520px] mx-auto">
                            <Image
                                src="/images/brownSofa.png"
                                alt="blueSofa"
                                width={520}
                                height={520}
                                className="w-full h-full object-contain p-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}