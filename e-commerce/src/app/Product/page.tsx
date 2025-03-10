import Image from "next/image"
import { CiHeart } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

export default function Product () {
    const data = [ 
        {
            id:1,
            title :"Mens Fashion Wear",
            price:"$45.00",
           Image:  "/images/cartpic1.png"
        },
        {
            id:2,
            title :"Women’s Fashion",
            price:"$67.00",
           Image :  "/images/cartpic2.png"
        },
        {
            id:3,
            title :"Wolx Dummy Fashion",
            price:"$67.00",
           Image :  "/images/cartpic3.png"
        },
        {
            id:4,
            title :"Top Wall Digital Clock",
            price:"$51.00",
           Image : "/images/cartpic4.png"
        },
        ]

    return(
    <header className="min-h-screen bg-gray-50">
        <div className="w-full bg-[#F2F0FF] px-4 sm:px-6 lg:px-20 py-8 sm:py-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold">Product Details</h1>
            <ul className="flex gap-2 text-sm sm:text-base mt-2">
              <li>Home_</li>
              <li>Pages_</li>
              <li className="text-pink-600">Product Details</li>
            </ul>
        </div>

        <div className="container mx-auto px-4 py-8">
            {/* Product Details Card */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
                    {/* Thumbnail Images */}
                    <div className="flex md:flex-col gap-2 order-2 md:order-1">
                        <div className="w-20 sm:w-24 lg:w-32">
                           <Image
                           src="/images/Product1.png"
                           alt="bag image"
                           width={120}
                           height={80}
                           className="w-full h-auto rounded-lg hover:opacity-75 transition-opacity cursor-pointer"
                           />
                        </div>

                        <div className="w-20 sm:w-24 lg:w-32">
                           <Image
                           src="/images/Product2.png"
                           alt="bag image"
                           width={140}
                           height={80}
                           className="w-full h-auto rounded-lg hover:opacity-75 transition-opacity cursor-pointer"
                           />
                        </div>

                        <div className="w-20 sm:w-24 lg:w-32">
                           <Image
                           src="/images/Product3.png"
                           alt="bag image"
                           width={140}
                           height={80}
                           className="w-full h-auto rounded-lg hover:opacity-75 transition-opacity cursor-pointer"
                           />
                        </div>
                    </div>

                    {/* Main Product Image */}
                    <div className="order-1 md:order-2 flex-shrink-0">
                        <Image
                        src="/images/Product4.png"
                        alt="bag image"
                        width={350}
                        height={250}
                        className="w-full max-w-md mx-auto rounded-lg"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="order-3 space-y-4">
                        <h2 className="text-xl sm:text-2xl font-serif">Play Wood arm chair</h2>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-900 text-lg sm:text-xl font-medium">$32.00</span>
                            <del className="text-pink-600 text-sm sm:text-base">$32.00</del>
                        </div>
                        
                        <div>
                            <h3 className="font-bold mb-2">Color</h3>
                            <p className="text-gray-600 text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mouris tellus parttitor purus at volpat sit.</p>
                        </div>

                        <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                            Add to cart
                            <CiHeart className="w-5 h-5"/>
                        </button>

                        <div className="space-y-2">
                            <p className="font-bold font-serif">Categories:</p>
                            <p className="font-bold font-serif">Tags:</p>
                            <div className="flex items-center gap-2">
                                <span className="font-bold font-serif">Share</span>
                                <div className="flex gap-2">
                                    <CiTwitter className="w-6 h-6 text-blue-950 hover:opacity-75 cursor-pointer"/>
                                    <CiInstagram className="w-6 h-6 text-pink-600 hover:opacity-75 cursor-pointer"/>
                                    <CiFacebook className="w-6 h-6 text-blue-950 hover:opacity-75 cursor-pointer"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Description */}
            <div className="bg-[#F2F0FF] mt-8 sm:mt-12 rounded-lg">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-wrap gap-4 sm:gap-8 text-[#151875] font-serif text-sm sm:text-base mb-8">
                        <button className="hover:underline hover:underline-offset-1">Description</button>
                        <button className="hover:underline hover:underline-offset-1">Additional Info</button>
                        <button className="hover:underline hover:underline-offset-1">Reviews</button>
                        <button className="hover:underline hover:underline-offset-1">Video</button>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-xl sm:text-2xl text-[#151875] font-serif font-semibold mb-4">Varius tempor.</h2>
                            <p className="text-gray-600 text-sm sm:text-base">Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet.</p>
                        </div>

                        <div>
                            <h2 className="text-xl sm:text-2xl text-[#151875] font-serif font-semibold mb-4">More details</h2>
                            <div className="space-y-3">
                                {[1, 2, 3, 4].map((_, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <FaArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-pink-600"/>
                                        <p className="text-gray-600 text-sm sm:text-base">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Latest Products */}
            <div className="py-12">
                <h2 className="text-2xl sm:text-3xl text-[#151875] font-serif font-semibold mb-8 text-center">Latest Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.map((item, index) => (
                        <div key={index} className="group">
                            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                                <Image 
                                    src={item.Image}
                                    alt={item.title}
                                    width={180}
                                    height={180}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-serif font-bold">{item.title}</h3>
                                <p className="text-gray-900 font-medium">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Signature */}
            <div className="flex justify-center py-8">
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