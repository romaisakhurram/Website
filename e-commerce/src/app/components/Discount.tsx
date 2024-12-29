import Image from "next/image"
import { TiTick } from "react-icons/ti";
import Link from "next/link"

export default function Discount () {
    return (
        <div className=" w-full h-[500] items-center mt-10">
            <h1 className="text-[40px] text-blue-900 font-bold font-serif text-center">Discount Items</h1>
            <ul className="flex justify-center ml-50 gap-10 mt-5">
                <li className="text-blue-900 hover:text-pink-600">Wood Chair</li>
                <li className="text-blue-900 hover:text-pink-600">Plastic Chair</li>
                <li className="text-blue-900 hover:text-pink-600">Sofa collection</li>
            </ul>
            <div className=" w-[80%] h-[500px] flex justify-center ml-40">
                <div className="mt-20 ">
                    <h2 className="text-[35px] font-bold font-serif text-blue-900">20% off Discount of all Products</h2><br />
                    <p className="text-[20px] text-pink-600">Eams Sofa Compact</p><br />
                    <p className="text-[20px] text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p><br />
                    <p className="text-[18px] text-gray-400 flex "><TiTick />Material expose like metals &nbsp; &nbsp;<TiTick />Clear lines and geomatric figures</p><br />
                    <p className="text-[18px] text-gray-400 flex"><TiTick />Simple neutral colours. &nbsp; &nbsp; <TiTick />Material expose like metals</p><br />
                    <button className="w-40 h-[40px] bg-pink-600 text-white text-[15px]"><Link href="/ShopLeftSide">Shop Now</Link></button>
                </div>
                <div className=" mt-20 bg-pink-100 rounded-full">
                  <Image
                  src="/images/brownSofa.png"
                  alt="blueSofa"
                  width={600}
                  height={500}
                  ></Image>
                </div>
            </div>
        </div>
    )
}