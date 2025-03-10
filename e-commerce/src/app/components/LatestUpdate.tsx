import Image from "next/image"
import Link from "next/link"

export default function LatestUpdate () {
    return (
        <div className="w-full h-full">
            <div className="w-full min-h-[250px] sm:min-h-[300px] md:h-[330px] p-4 sm:p-6 bg-no-repeat bg-cover bg-center bg-[url('/images/Latest1.png')]">
                <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-[Josefin Sans] font-bold text-[#151875] mt-12 sm:mt-16 md:mt-20 px-4">
                        Get Latest Update By Subscribe 
                        <span className="block mt-2">Our News Letter</span>
                    </h1>
                    <button className="w-32 sm:w-36 md:w-40 h-10 font-[Josefin Sans] bg-pink-600 hover:bg-pink-700 transition-colors text-white p-2 mt-4 sm:mt-5">
                        <Link href="/ShopGrid/page">Shop Now</Link>
                    </button>
                </div>
            </div>
            <div className="w-full px-4 sm:px-0 mt-8 sm:mt-10">
                <div className="max-w-[600px] mx-auto">
                    <Image
                        src="/images/Signatures.png"
                        alt="Signature Image"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    )
} 