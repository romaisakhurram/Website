import Image from "next/image"
import Link from "next/link"
import { FaRegCircle } from "react-icons/fa";

export default function UniqueFeature () {
    return (
        <div className="w-full bg-[#F2F0FF] py-8 sm:py-12 md:py-16 mt-8 sm:mt-10">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                        <Image
                            src="/images/blueSofa.png"
                            alt="blueSofa"
                            width={500}
                            height={500}
                            className="w-full max-w-lg mx-auto h-auto object-contain"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
                        <h2 className="text-2xl sm:text-3xl md:text-[40px] text-[#1A0B5B] font-bold font-[JosefinSans] leading-tight">
                            Unique Feature Of Latest & Trending Products
                        </h2>

                        <div className="space-y-4">
                            <p className="flex items-start gap-3 text-base sm:text-lg text-gray-600">
                                <FaRegCircle className="w-4 h-4 mt-1.5 rounded-full bg-pink-600 text-pink-600 flex-shrink-0"/>
                                <span>All frames constructed with hardwood solids and laminates</span>
                            </p>

                            <p className="flex items-start gap-3 text-base sm:text-lg text-gray-600">
                                <FaRegCircle className="w-4 h-4 mt-1.5 rounded-full bg-[#5E37FF] text-[#5E37FF] flex-shrink-0"/>
                                <span>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</span>
                            </p>

                            <p className="flex items-start gap-3 text-base sm:text-lg text-gray-600">
                                <FaRegCircle className="w-4 h-4 mt-1.5 rounded-full bg-[#2BF5CC] text-[#2BF5CC] flex-shrink-0"/>
                                <span>Arms, backs and seats are structurally reinforced</span>
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-2">
                            <button className="w-full sm:w-auto px-6 py-2 bg-pink-600 hover:bg-pink-700 transition-colors text-white font-[JosefinSans] text-base rounded-sm">
                                <Link href="/ShoppingCart">Add to Cart</Link>
                            </button>
                            <div className="text-center sm:text-left">
                                <span className="font-medium">B&B Italian Sofa</span>
                                <span className="ml-2 text-pink-600 font-semibold">$32.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}