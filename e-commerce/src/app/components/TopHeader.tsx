import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="w-full bg-violet-800 text-white py-2 px-3 sm:px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 max-w-7xl mx-auto">
        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
          <p className="flex items-center gap-2 whitespace-nowrap">
            <AiOutlineMail className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">mhhasanul@gmail.com</span>
            <span className="sm:hidden">Email Us</span>
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneVolume className="w-4 h-4 sm:w-5 sm:h-5" />
            (12345)67890
          </p>
        </div>

        {/* Language, Currency, and User Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm sm:text-base">
          <div className="flex gap-2 sm:gap-4">
            <select
              name="language"
              className="bg-violet-800 text-white border-none outline-none hover:text-gray-300 text-sm sm:text-base py-1">
              <option value="Language">English</option>
              <option value="Language">Spanish</option>
              <option value="Language">Italian</option>
            </select>

            <select
              name="currency"
              className="bg-violet-800 text-white border-none outline-none hover:text-gray-300 text-sm sm:text-base py-1">
              <option value="Rupees">USD</option>
              <option value="Rupees">PKR</option>
              <option value="Rupees">INR</option>
            </select>
          </div>

          {/* User Actions */}
          <ul className="flex items-center gap-3 sm:gap-4">
            <li>
              <Link href="/Login" className="flex items-center gap-1 hover:text-gray-300 transition-colors">
                <span className="hidden sm:inline">Login</span>
                <FaRegUser className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link href="/Wishlist" className="flex items-center gap-1 hover:text-gray-300 transition-colors">
                <span className="hidden sm:inline">Wishlist</span>
                <FaRegHeart className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link href="/ShoppingCart" className="flex items-center gap-1 hover:text-gray-300 transition-colors">
                <span className="hidden sm:inline">Cart</span>
                <MdOutlineLocalGroceryStore className="w-4 h-4" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
