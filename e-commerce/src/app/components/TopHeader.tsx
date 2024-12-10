import { CiHeart } from "react-icons/ci";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

export default function TopHeader () {
    return (
        <div className="flex justify-center w-full h-20 bg-violet-800">
            <div>
                <div>
                    <p><AiOutlineMail />mhhasanul@gmail.com</p>
                    <p><FaPhoneVolume />(12345)67890</p>
                </div>
                <div>
                    <select name="Dropdown">
                       <option value="Language">English</option>
                       <option value="Language">Spanish</option>
                       <option value="Language">Italian</option>
                    </select>
                </div>
                <div>
                <select name="Dropdown">
                       <option value="Rupees">USD</option>
                       <option value="Rupees">PKR</option>
                       <option value="Rupees">INR</option>
                    </select>
                </div>
                <div>
                    <p>Whislist</p>
                </div>
                <div>
                <CiHeart />
                <MdOutlineLocalGroceryStore />
                </div>
            </div>
        </div>
    )
}