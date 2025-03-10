"use client"
import {useState} from "react"
import Link from "next/link"
import { HiOutlineMagnifyingGlass} from "react-icons/hi2";

export default  function Header () {
    const [isDropdownOpen , setIsDropdownOpen] = useState(false)
    return (
        <div className="w-full h-auto sm:h-16 md:h-20 px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5">
            <div className="flex flex-col sm:flex-row md:justify-center md:gap-10">
                <div className="flex justify-between items-center">
                    <h1 className="text-black font-bold text-xl sm:text-2xl md:text-[30px]">Hekto</h1>
                    {/* Mobile Menu Button */}
                    <button className="sm:hidden text-black text-2xl" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        ☰
                    </button>
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden sm:block">
                    <ul className="flex justify-center font-[Lato] text-sm sm:text-base text-[#0D0E43] gap-2 sm:gap-4 lg:gap-8 mt-3">
                       <li className="text-pink-600"><Link href="/">Home</Link></li>
                       <li className="relative">
                            <button className="hover:text-pink-600 focus:outline-none"onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                              Pages
                            </button>
                            {isDropdownOpen && (
                            <div className="absolute bg-white shadow-md mt-2 w-40 z-50">
                                <ul>
                                    <li className="hover:bg-gray-100 hover:text-pink-600 px-4 py-2"><Link href="/ShopGrid">ShopGrid</Link></li>
                                    <li className="hover:bg-gray-100 hover:text-pink-600 px-4 py-2"><Link href="/ShoppingCart">ShoppingCart</Link></li>
                                    <li className="hover:bg-gray-100 hover:text-pink-600 px-4 py-2"><Link href="/ShopLeftSide">ShopLeftSide</Link></li>
                                    <li className="hover:bg-gray-100 hover:text-pink-600 px-4 py-2"><Link href="/About">About</Link></li>
                                    <li className="hover:bg-gray-100 hover:text-pink-600 px-4 py-2"><Link href="/FAQ">FAQ</Link></li>
                                </ul>
                            </div>
                            )}
                        </li>
                        <li className="hover:text-pink-600"> <Link href="/Product">Product</Link></li>
                        <li className="hover:text-pink-600"><Link href="/Blog">Blog</Link></li>
                        <li className="hover:text-pink-600"><Link href="/Shop">Shop</Link></li>
                        <li className="hover:text-pink-600"><Link href="/Contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="hidden sm:block">
                    <div className="flex border border-gray-300 mt-3 hover:outline-none">
                        <input type="search" name="Search" className="w-full sm:w-auto px-2 py-1" placeholder="Search..." />
                        <button className="bg-pink-500 px-3 py-1">
                            <HiOutlineMagnifyingGlass className="w-5 h-5 text-white" />
                        </button>
                    </div>
                </div>
            </div>
           
            {/* Mobile Dropdown Menu */}
            {isDropdownOpen && (
                <div className="sm:hidden bg-white shadow-md text-[#0D0E43] mt-4 w-full">
                    <ul className="flex flex-col touch-pan-y">
                        <li className="py-3 px-4 border-b hover:bg-gray-50"><Link href="/">Home</Link></li>
                        <li className="py-3 px-4 border-b hover:bg-gray-50"><Link href="/Pages">Pages</Link></li>
                        <li className="py-3 px-4 border-b hover:bg-gray-50"><Link href="/Product">Product</Link></li>
                        <li className="py-3 px-4 border-b hover:bg-gray-50"><Link href="/Blog">Blog</Link></li>
                        <li className="py-3 px-4 border-b hover:bg-gray-50"><Link href="/Shop">Shop</Link></li>
                        <li className="py-3 px-4 hover:bg-gray-50"><Link href="/Contact">Contact</Link></li>
                    </ul>
                    {/* Mobile Search */}
                    <div className="p-4 border-t">
                        <div className="flex border border-gray-300">
                            <input type="search" name="Search" className="flex-1 px-2 py-1" placeholder="Search..." />
                            <button className="bg-pink-500 px-3 py-1">
                                <HiOutlineMagnifyingGlass className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}