import Link from "next/link"
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

export default function Footer() {
    return (
      <footer className="bg-gray-100 text-gray-700 mt-8 sm:mt-10">
        <div className="container mx-auto px-4 sm:px-5 py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6">
          {/* Branding Section */}
          <div className="space-y-4 sm:space-y-3">
            <h2 className="font-bold text-lg sm:text-xl text-black">Hekto</h2>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="p-2 w-full sm:w-[65%] border border-gray-300 rounded-sm"
              />
              <button className="w-full sm:w-auto bg-pink-500 text-white px-4 py-2 hover:bg-pink-600 transition-colors">
                Sign Up
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-sm">Contact Info</p>
              <p className="text-sm leading-relaxed">17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
          </div>
  
          {/* Categories Section */}
          <div className="space-y-4 sm:space-y-3">
            <h3 className="font-bold text-lg text-black">Categories</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>
  
          {/* Customer Care Section */}
          <div className="space-y-4 sm:space-y-3">
            <h3 className="font-bold text-lg text-black">Customer Care</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>
  
          {/* Pages Section */}
          <div className="space-y-4 sm:space-y-3">
            <h3 className="font-bold text-lg text-black">Pages</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="bg-gray-200 py-4">
          <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <p className="text-sm text-gray-600 text-center sm:text-left">Webecy - All Rights Reserved.</p>
            <div className="flex items-center space-x-6">
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <CiFacebook className="w-6 h-6 bg-[#1A0B5B] text-white p-1 rounded-sm" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <CiInstagram className="w-6 h-6 bg-[#1A0B5B] text-white p-1 rounded-sm" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <CiTwitter className="w-6 h-6 bg-[#1A0B5B] text-white p-1 rounded-sm" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }