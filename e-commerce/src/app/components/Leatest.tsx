import { CiHeart } from "react-icons/ci";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaSearchPlus } from "react-icons/fa";
import Image from "next/image"

export default function Leatest () {
    const data = [ 
    {
        id:1,
        title :"Comfort Handy Craft",
        price:"$42.00",
        delPrice:"$65.00",
        Image: "/images/browSofa.png"
    },
    {
        id:2,
        title :"Comfort Handy Craft",
        price:"$42.00",
        delPrice:"$65.00",
        Image : "/images/chairYellow.png"
    },
    {
        id:3,
        title :"Comfort Handy Craft",
        price:"$42.00",
        delPrice:"$65.00",
        Image : "/images/chairWhite.png"
    },
    {
        id:4,
        title :"Comfort Handy Craft",
        price:"$42.00",
        delPrice:"$65.00",
       Image : "/images/whiteSofa.png"
    },
    {
        id:5,
        title :"Comfort Handy Craft",
        price:"$42.00",
        delPrice:"$65.00",
       Image : "/images/blackSofa.png"
    },
    {
        id:6,
        title :"Comfort Handy Craft",
        price:"$42.00",
        delPrice:"$65.00",
       Image : "/images/chair.png"
    },
    ]

    return (
        <div className="w-full h-full flex justify-center flex-wrap mt-15 p-5">
          <h1 className="text-[40px] font-serif ml-[30%] mr-[30%] mt-[5%] font-bold text-[#1A0B5B] text-center duration-75">Leatest Product</h1>
           <ul className="flex justify-center text-[#1A0B5B] text-[18px] gap-10 ml-[30%] mr-[30%] mt-[2%] ">
               <li className="hover:text-pink-600 hover:underline hover:hover:underline-offset-2">New Arrival</li>
               <li className="hover:text-pink-600 hover:underline hover:hover:underline-offset-2">Best Seller</li>
               <li className="hover:text-pink-600 hover:underline hover:hover:underline-offset-2">Featured</li>
               <li className="hover:text-pink-600 hover:underline hover:hover:underline-offset-2">Special Offer</li>
           </ul>
         
           {data.map ((Idata,index) => (
            <div key={index} className="w-[350px] h-[350px] relative group overflow-hidden m-[30px] p-[10px] gap-5">
                <div className="bg-[#F2F0FF] items-center shadow-lg border border-gray-300 w-[300] h-[300] ">
                  <Image src={Idata.Image} 
                  alt={Idata.title} 
                  width={150} 
                  height={100} 
                  className="w-40 h-60 ml-20 "
                  ></Image>
                </div>
                <div className="p-2 flex justify-between font-serif text-center">
                  <h2 className="text-pink-600 text-[18px]">{Idata.title}</h2>
                  <p className="text-gray-400 text-[18px]">{Idata.price}<del className="text-pink-600">{Idata.delPrice}</del></p>
                </div>
                
                <div className="absolute inset-5 bg-opacity-100 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="space-x-0 mr-60 text-blue-950">
                       <CiHeart className="w-8 h-6 mb-1 text-blue-950"/>
                       <MdOutlineLocalGroceryStore className="w-8 h-6 mb-1 text-blue-950"/> 
                       <FaSearchPlus className="w-8 h-4 text-blue-950"/>
                   </div>
                </div>
                <div className="mr-60 absolute inset-2 bg-opacity-100 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="px-2 py-2 mt-2 ml-2 bg-blue-950 text-white text-sm font-medium hover:bg-blue-800 rounded-sm">
                        Sale
                    </button>
                </div>
            </div>
            ))}
        </div>
    )
}