import Image from "next/image"
import Link from "next/link"
import { TiTick } from "react-icons/ti"

export default function OrderCompleted() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="w-full bg-[#F2F0FF] px-4 sm:px-6 lg:px-20 py-8 sm:py-10">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#101750] font-[JosefinSans] font-bold">Order Completed</h1>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-6 sm:py-8">
                <div className="mb-8">
                    <h2 className="text-xl text-[#101750] font-[JosefinSans] font-bold mb-2">Order Completed</h2>
                    <ul className="flex gap-2 text-sm">
                        <li className="text-gray-400">Home_</li>
                        <li className="text-gray-400">Pages_</li>
                        <li className="text-pink-600">Order Completed</li>
                    </ul>
                </div>

                <div className="max-w-4xl mx-auto relative py-8 sm:py-12">
                    {/* Left Image */}
                    <div className="absolute left-4 sm:left-8 top-0 hidden sm:block">
                        <Image
                            src="/images/clock 1.png"
                            alt="clock"
                            height={100}
                            width={100}
                            className="w-16 sm:w-20 h-16 sm:h-20 object-contain"
                        />
                    </div>

                    {/* Main Content */}
                    <div className="text-center px-4">
                        <div className="inline-flex justify-center items-center mb-6">
                            <div className="relative">
                                <TiTick className="w-16 h-16 sm:w-20 sm:h-20 text-pink-600" />
                                <div className="absolute inset-0 border-8 border-gray-200 rounded-full"></div>
                            </div>
                        </div>

                        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#101750] font-[JosefinSans] font-bold mb-4">
                            Your Order is Completed!
                        </h1>

                        <p className="text-[#8D92A7] font-[Lato] text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                            Thank you for your order! Your order is being processed and will be completed within 3-6 hours.
                            You will receive an email confirmation when your order is completed.
                        </p>

                        <button className="bg-pink-600 hover:bg-pink-700 transition-colors px-6 py-3 text-white font-semibold rounded-md">
                            <Link href="/">Continue Shopping</Link>
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="absolute right-4 sm:right-8 top-0 hidden sm:block">
                        <Image
                            src="/images/Group.png"
                            alt="Notebook"
                            height={100}
                            width={100}
                            className="w-16 sm:w-20 h-16 sm:h-20 object-contain"
                        />
                    </div>
                </div>

                {/* Signature */}
                <div className="flex justify-center mt-8 sm:mt-12">
                    <Image
                        src="/images/Signatures.png"
                        alt="Signature"
                        height={200}
                        width={400}
                        className="w-48 sm:w-64 lg:w-80 h-auto"
                    />
                </div>
            </div>
        </div>
    )
}