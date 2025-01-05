import Image from "next/image"
import { FaSearchPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

export default function Shop () {
    const data = [ 
    {
        id:1,
        title :"Accumsan tincidunt",
        price:"$26.00",
        delPrice:"$42.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image: "/images/shopPic1.png"
    },
    {
        id:2,
        title :"In nulla",
        price:"$26.00",
        delPrice:"$42.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/shopPic2.png"
    },
    {
        id:3,
        title :"Vel sem",
        price:"$26.00",
        delPrice:"$42.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/shopPic3.png"
    },
    {
        id:4,
        title :"Porttitor cum",
        price:"$26.00",
        delPrice:"$42.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/shopPic4.png"
    },
    {
        id:5,
        title :"Nunc in",
        price:"$26.00",
        delPrice:"$42.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/shopPic5.png"
    },
    {
        id:6,
        title :"Vitae facilisis",
        price:"$26.00",
        delPrice:"$42.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/shopPic6.png"
    },
    {
        id:7,
        title :"Curabitur lectus",
        price:"$26.00",
        delPrice:"$42.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/shopPic7.png"
    },
    ]

    return (
        <header>
           <div className="w-full h-[150px] bg-[#F2F0FF] px-20 pt-10">
               <h1 className="text-[30px] text-[#101750] font-[JosefinSans] font-bold">Shop Lists</h1>
                <ul className="flex gap-2">
                  <li>Home_</li>
                  <li>Pages_</li>
                  <li className="text-pink-600">Shop List</li>
                </ul>
            </div>
           <div className="w-full h-[800] flex justify-center flex-wrap mt-15 p-5">
                <div className="flex justify-center p-5">
                    <div>
                       <h1 className="text-3xl text-[#151875] font-bold font-serif">Ecommerce Accessories & Fashion Item</h1>
                        <p className="text-sm text-[#8A8FB9]">About 9,620 results(0.62 seconds)</p>
                    </div>

                    <div className="flex justify-center text-[#3F509E] gap-5">
                       <label htmlFor="number">Per Page:</label>
                       <input type="number" name="number" 
                       className="w-[5%] h-8 border border-gray-400" />

                       <label htmlFor="text">Sort By:</label>
                       <input type="text" name="text" placeholder="Best Watch"
                       className=" w-[12%] h-8 border border-gray-400  text-sm" />

                       <label htmlFor="number">Views:</label>
                       <input type="number" name="number" 
                        className="w-[20%] h-8 border border-gray-400" />
                    </div>
                </div>
                
                {data.map ((Idata,index) => (
                     <div key={index} className=" mt-10 w-[200] h-[400] flex justify-center gap-5 shadow-lg ">
                        <div className="w-[300] h-[350] ">
                            <Image src={Idata.Image} 
                            alt={Idata.title} 
                            width={100} 
                            height={100}
                            className="w-60 h-40 "
                            ></Image>
                        </div>
                        <div className="font-bold mt-2 p-2">
                           <h2 className="text-[#111C85] font-[JosefinSans] text-lg">{Idata.title}</h2>
                           <p className="text-[#111C85] text-md">{Idata.price} <del className="text-[#FF2AAA]">{Idata.delPrice}</del></p>
                           <p className="text-[#9295AA] font[Lato] text-sm">{Idata.desc}</p>
                            <ul className="flex mt-2">
                                <li><FaSearchPlus className="w-6 h-5"/></li>
                                <li><FaRegHeart className="w-8 h-6 "/></li>
                                <li><MdOutlineLocalGroceryStore className="w-8 h-6"/></li>
                            </ul>
                        </div>
                    </div>
                ))}
                <div>
                    <Image
                       src="/images/Signatures.png"
                       alt="Signature"
                       width={500}
                       height={500}
                       className=" ml-[10%] mt-10"
                    ></Image>
                </div>
            </div>    
        </header>  
    )
}
