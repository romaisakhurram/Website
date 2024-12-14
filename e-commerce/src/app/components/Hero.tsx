"use client"

import Image from "next/image"
export default function Hero () {
    return (
        <div className="w-full h-[500px] bg-[#F2F0FF]">
            <div className="flex justify center">
                <div>
                    <Image
                      src="/images/Lamp.png"
                      alt="Lamp"
                      width={387}
                      height={387}
                      >
                    </Image>
                </div>
                <div className=" mt-20">
                    <p className="text-pink-600">Best Furniture For Your Castle....</p>
                    <h1 className="text-[40px] font-bold font-serif">New Furniture Collection trend in 2020</h1><br />
                    <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                    in phasellus non in justo.</p> <br />
                    <button className="w-40 h-10 bg-pink-600 text-white p-2">Shop Now</button>
                </div>
                <div className="mt-12 rounded-full bg-pink-100">
                    <Image
                      src="/images/PinkSofa.png"
                      alt="Sofa"
                      width={500}
                      height={400}
                      >
                    </Image>
                    
                </div>
            </div>
        </div>
    )
}