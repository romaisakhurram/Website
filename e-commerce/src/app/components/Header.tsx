import { CiSearch } from "react-icons/ci";
import Link from "next/link"

export default function Header() {
    return (
        <div>
            {/* Navbar Container */}
            <div className="w-full h-[60px] bg-white flex items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
                {/* Hekto Logo */}
                <div className="text-[#0D0E43] font-[Josefin Sans] font-bold text-lg md:text-xl lg:text-2xl">
                    Hekto
                </div>

               {/* Navbar Links */}
               <div className="hidden sm:flex items-center space-x-5 ml-8 mt-2">
                 <span className="text-[#FB2E86] font-[Lato] text-sm md:text-base hover:text-[#e0336a] cursor-pointer">
                 <Link href="/">Home</Link></span>
                 <span className="text-[#0D0E43] font-[Lato] text-sm md:text-base hover:text-[#e03333] cursor-pointer">
                 <Link href="/Pages">Pages</Link>
                 </span>
                 <span className="text-[#0D0E43] font-[Lato] text-sm md:text-base hover:text-[#e03333] cursor-pointer">
                 <Link href="/Products">Products</Link>
                 </span>
                 <span className="text-[#0D0E43] font-[Lato] text-sm md:text-base hover:text-[#e03333] cursor-pointer">
                 <Link href="/Blog">Blog</Link>
                 </span>
                 <span className="text-[#0D0E43] font-[Lato] text-sm md:text-base hover:text-[#e03333] cursor-pointer">
                 <Link href="/Shop">Shop</Link>
                 </span>
                 <span className="text-[#0D0E43] font-[Lato] text-sm md:text-base hover:text-[#e03333] cursor-pointer">
                 <Link href="/Contact">Contact</Link>
                 </span>
                </div>


                {/* Search Bar */}
                <div className="flex items-center ml-auto">
                    <input
                        type="text"
                        placeholder="Search"
                        className="hidden md:inline-block w-[200px] lg:w-[300px] h-[40px] border border-[#aea6a6] px-4 text-sm md:text-base rounded-l"
                    />
                    <div className="w-[40px] h-[40px] bg-[#FB2E86] flex items-center justify-center rounded-r">
                        <CiSearch className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
}