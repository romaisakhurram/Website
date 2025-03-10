"use client"
import Image from "next/image"
import Link from "next/link"

export default function Hero () {
    return (
        <div className="w-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] bg-[#F2F0FF] py-6 sm:py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8">
                    {/* Left Section with Lamp */}
                    <div className="hidden lg:block w-1/4">
                        <Image
                          src="/images/Lamp.png"
                          alt="Lamp"
                          width={387}
                          height={387}
                          className="w-full h-auto object-contain"
                        />
                    </div>
                    
                    {/* Center Content */}
                    <div className="w-full sm:w-3/5 md:w-1/2 text-center sm:text-left space-y-3 sm:space-y-4">
                        <p className="text-pink-600 text-sm sm:text-base">Best Furniture For Your Castle....</p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-[Josefin Sans] leading-tight">New Furniture Collection trend in 2024</h1>
                        <p className="text-[#8A8FB9] font-bold font-[Lato] text-xs sm:text-sm md:text-base max-w-lg mx-auto sm:mx-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                            in phasellus non in justo.
                        </p>
                        <button className="w-28 sm:w-32 md:w-40 h-9 sm:h-10 bg-pink-600 text-white p-2 hover:bg-pink-700 transition-colors">
                            <Link href="/Shop">Shop Now</Link>
                        </button>
                    </div>
                    
                    {/* Right Section with Sofa */}
                    <div className="w-full sm:w-2/5 md:w-1/3 mt-6 sm:mt-0">
                        <div className="relative aspect-[4/3] sm:aspect-square">
                            <div className="absolute inset-0 bg-pink-100 rounded-full transform scale-90"></div>
                            <Image
                              src="/images/PinkSofa.png"
                              alt="Sofa"
                              width={500}
                              height={400}
                              className="relative z-10 w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}