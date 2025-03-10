import Image from 'next/image';
import { FaRegCircle } from "react-icons/fa";

export default function Contact () {
  return (
    <div className="w-full min-h-screen bg-gray-50">
        <div className="w-full bg-[#F2F0FF] px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-[JosefinSans] font-bold text-[#151875]">My Contact</h1>
            <ul className="flex gap-2 text-sm sm:text-base mt-2 text-gray-600">
                <li>Home_</li>
                <li>Pages_</li>
                <li className="text-pink-600">My Contact</li>
            </ul>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 p-4 sm:p-8 md:p-12 lg:p-20">
          <div className="lg:w-1/2">
            <h2 className="text-xl sm:text-2xl text-[#151875] font-[JosefinSans] font-bold mb-4 sm:mb-6">Information About Us</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
            <div className="flex items-center mt-6 space-x-4">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500 hover:scale-110 transition-transform"></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-500 hover:scale-110 transition-transform"></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-yellow-500 hover:scale-110 transition-transform"></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-500 hover:scale-110 transition-transform"></div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h2 className="text-xl sm:text-2xl text-[#151875] font-[JosefinSans] font-bold mb-6 sm:mb-8">Contact Way</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4">
                  <FaRegCircle className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 text-blue-500" />
                  <div className="space-y-1">
                    <p className="text-sm sm:text-base text-gray-800">Tel: 877-67-88-99</p>
                    <p className="text-sm sm:text-base text-gray-800">E-Mail: shop@store.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaRegCircle className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 text-yellow-500" />
                  <p className="text-sm sm:text-base text-gray-800">20 Margaret st. London</p>
                </div>
              </div>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4">
                  <FaRegCircle className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 text-pink-500" />
                  <div className="space-y-1">
                    <p className="text-sm sm:text-base text-gray-800">Great britain,</p>
                    <p className="text-sm sm:text-base text-gray-800">3NM98-LK</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaRegCircle className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 text-green-500" />
                  <div className="space-y-1">
                    <p className="text-sm sm:text-base text-gray-800">Free standard shipping</p>
                    <p className="text-sm sm:text-base text-gray-800">on all orders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 p-4 sm:p-8 md:p-12 lg:p-20 bg-white">
          <div className="lg:w-1/2">
            <h2 className="text-xl sm:text-2xl text-[#151875] font-[JosefinSans] font-bold mb-4 sm:mb-6">Get In Touch</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 sm:p-4 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" 
                />
                <input 
                  type="email"  
                  placeholder="Your Email" 
                  className="w-full p-3 sm:p-4 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" 
                />
              </div>
              <input 
                type="text"   
                placeholder="Subject" 
                className="w-full p-3 sm:p-4 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" 
              />
              <textarea   
                placeholder="Type your message" 
                rows={4} 
                className="w-full p-3 sm:p-4 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none transition-all"
              ></textarea>
              <button 
                type="submit" 
                className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white text-sm sm:text-base font-medium rounded-lg transition-colors"
              >
                Send Mail
              </button>
            </form>
          </div>

          <div className="lg:w-1/2">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/contact-image.png" 
                alt="Contact Us" 
                fill
                className="object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
    </div>
  );
}