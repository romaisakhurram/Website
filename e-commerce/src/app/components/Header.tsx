"use client"
import Link from "next/link"
import { HiOutlineMagnifyingGlass} from "react-icons/hi2";
export default  function Header () {
    return (
        <div className="w-full h-20 items-center p-5">
            <div className="flex justify-center gap-10">
                <h1 className="text-black font-bold text-[30px]">Hekto</h1>
                <div>
                    <ul className="flex justify-center font-sans gap-8 mt-3">
                    <Link href="/"><li className="text-pink-600">Home</li></Link>
                       <Link href="/Pages"><li className="hover:text-pink-600">Pages</li></Link>
                       <Link href="/Product"><li className="hover:text-pink-600">Product</li></Link>
                       <Link href="/Blog"><li className="hover:text-pink-600">Blog</li></Link>
                       <Link href="/Shop"><li className="hover:text-pink-600">Shop</li></Link>
                       <Link href="/Contact"><li className="hover:text-pink-600">Contact</li></Link>
                    </ul>
                </div>
                <div>
                  <button className="flex border border-gray-300 mt-3 hover:outline-none ml-5">
                  <input type="search" name="Search" /><HiOutlineMagnifyingGlass 
                  className="w-10 h-6 bg-pink-500 text-white" /></button>
                </div>
            </div>
        </div>
    )
}