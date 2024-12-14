import { CiHeart } from "react-icons/ci";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import Link from "next/link"

export default function TopHeader () {
    return (
        <div className="w-full h-10 bg-violet-800 text-white items-center p-2">
            <div className="flex justify-center  gap-10  items-center ml-40">
                <div className="flex gap-6">
                    <p className="flex gap-2"><AiOutlineMail className="w-8 h-6" />mhhasanul@gmail.com</p>
                    <p className="flex gap-2"><FaPhoneVolume className="w-8 h-5"/>(12345)67890</p>
                </div>
                <div className="ml-[20%]">
                    <select name="Dropdown" className="bg-violet-800 hover:text-gray-300 ">
                       <option value="Language">English</option>
                       <option value="Language">Spanish</option>
                       <option value="Language">Italian</option>
                    </select>
                </div>
                <div>
                <select name="Dropdown" className="bg-violet-800 hover:text-gray-300">
                       <option value="Rupees">USD</option>
                       <option value="Rupees">PKR</option>
                       <option value="Rupees">INR</option>
                    </select>
                </div>
                <div>
                    <ul className="flex gap-5">
                       <Link href="/Login"><li className="flex">Login <RiAccountCircleLine className="w-8 h-6" /> </li></Link>
                       <li className="flex">Whislist <CiHeart className="w-8 h-6" /></li>
                       <li><MdOutlineLocalGroceryStore className="w-8 h-6"  /></li>
                    </ul>
                </div> 
            </div>
        </div>
    )
}