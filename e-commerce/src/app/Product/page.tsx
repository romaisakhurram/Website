import Image from "next/image"
import { CiHeart } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

export default function Product () {
    const data = [ 
        {
            id:1,
            title :"Mens Fashion Wear",
            price:"$45.00",
           Image:  "/images/cartpic1.png"
        },
        {
            id:2,
            title :"Women’s Fashion",
            price:"$67.00",
           Image :  "/images/cartpic2.png"
        },
        {
            id:3,
            title :"Wolx Dummy Fashion",
            price:"$67.00",
           Image :  "/images/cartpic3.png"
        },
        {
            id:4,
            title :"Top Wall Digital Clock",
            price:"$51.00",
           Image : "/images/cartpic4.png"
        },
        ]

    return(
        <div className="w-full h-[800]">
           <div className="w-full h-[150px] bg-[#F2F0FF] px-20 pt-10 mb-5">
               <h1 className="text-[30px] font-serif font-bold">Product Details</h1>
                <ul className="flex gap-2 text-sm">
                  <li>Home_</li>
                  <li>Pages_</li>
                  <li className="text-pink-600">Product Details</li>
                </ul>
            </div>
            <div className="flex justify-center items-center border border-white shadow-lg w-[60%] h-[300px] p-3 mt-10 ml-[25%] gap-5">
                <div>
                    <div>
                       <Image
                       src="/images/product1.png"
                       alt="bag image"
                       width={120}
                       height={80}
                       className="mb-2 mt-2"
                       ></Image>
                    </div>

                    <div>
                       <Image
                       src="/images/product2.png"
                       alt="bag image"
                       width={140}
                       height={80}
                       className="mb-2"
                       ></Image>
                    </div>

                    <div>
                       <Image
                       src="/images/product3.png"
                       alt="bag image"
                       width={140}
                       height={80}
                       className="mb-2"
                       ></Image>
                    </div>

                </div>
                <div>
                    <Image
                    src="/images/product4.png"
                    alt="bag image"
                    width={350}
                    height={250}
                    ></Image>
                </div>
                <div className="pt-10 pb-10">
                    <h2 className="text-2xl font-serif">Play Wood arm chair</h2>
                    <p className="text-gray-400 text-md">$32.00 <del className="text-pink-600 text-md">$32.00</del></p>
                    <p className="font-bold">Color</p>
                    <p className="text-gray-400 text-md font-semibold mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mouris tellus parttitor purus at volpat sit. </p>
                    <button className="w-40 h-8 p-1 border border-gray-100 text-sm mb-2 flex justify-center ">Add to cart <CiHeart className="w-8 h-6"/> </button>
                    <p className="font-bold font-serif mb-2 ">Categories:</p>
                    <p className="font-bold font-serif mb-2">Tags:</p>
                    <p className="font-bold font-serif flex gap-2">Share <CiTwitter className="w-8 h-6 text-blue-950"/>  <CiInstagram className="w-8 h-6 text-pink-600"/>  <CiFacebook className="w-8 h-6 text-blue-950"/> </p>
                </div>
            </div>

            <div className=" w-full h-[430px] bg-[#F2F0FF] px-20 pt-10 mt-10">
                <div >
                    <ul className="flex text-[#151875] ml-10 font-serif text-lg gap-20 ">
                        <li className="hover:underline hover:underline-offset-1">Description</li>
                        <li className="hover:underline hover:underline-offset-1">Additional Info</li>
                        <li className="hover:underline hover:underline-offset-1">Reviews</li>
                        <li className="hover:underline hover:underline-offset-1">Video</li>
                    </ul>
                </div>
                <div className=" m-10">
                    <h1 className="text-md text-[#151875] font-serif text-2xl font-semibold mb-2">Varius tempor.</h1>
                    <p className=" text-gray-400 font-serif text-sm">Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                </div>
                <div className=" m-10">
                    <h1 className="text-[#151875] font-serif font-semibold text-2xl mb-2">More details</h1>
                    <p className="flex   text-gray-400 text-sm font-serif"> <FaArrowRight className="w-8 h-6"/> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                    <p className="flex  text-gray-400 text-sm font-serif"> <FaArrowRight className="w-8 h-6"/> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                    <p className="flex  text-gray-400 text-sm font-serif"> <FaArrowRight className="w-8 h-6"/> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                    <p className="flex  text-gray-400 text-sm font-serif"> <FaArrowRight className="w-8 h-6"/> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                </div>
            </div>
            
            <h1 className="text-md text-[#151875] font-serif text-3xl font-semibold  mt-20 ml-20 ">Latest Product</h1>
            <div className="w-full h-[500] flex justify-center gap-10 mt-5">

                {data.map ((Idata) => (
                    <div className=" mt-1 w-[500] h-[200] ">
                        <div className="flex w-[300] h-[300] ">
                            <Image src={Idata.Image} 
                              alt={Idata.title} 
                              width={180} 
                              height={180}
                              className="w-60 h-80 "
                            ></Image>
                        </div>
                        <div className=" text-md font-serif font-bold">
                              <h2>{Idata.title}</h2>
                              <p>{Idata.price}</p>
                         </div>
                    </div>
                ))}
            </div>
            <div>
                <Image
                 src="/images/Signatures.png"
                 alt="Signature"
                 width={500}
                 height={500}
                 className="m-10 ml-[35%]"
                ></Image>
            </div>

        </div>
    )
}