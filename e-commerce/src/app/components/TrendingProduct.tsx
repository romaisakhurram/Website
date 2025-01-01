import Image from "next/image"

export default function TrendingProduct () {
    const data = [ 
    {
        id:1,
        title :"Cantilever chair",
        price:"$26.00",
        delprice:"$42.00",
       Image:  "/images/grayChair.png"
    },
    {
        id:2,
        title :"Cantilever chair",
        price:"$26.00",
        delprice:"$42.00",
       Image :  "/images/redChair.png"
    },
    {
        id:3,
        title :"Cantilever chair",
        price:"$26.00",
        delprice:"$42.00",
       Image :  "/images/SofaWhite.png"
    },
    {
        id:4,
        title :"Cantilever chair",
        price:"$26.00",
        delprice:"$42.00",
       Image : "/images/blackSofa.png"
    },
    ]

    return (
        <div className="w-full h-[800] mt-20 p-5">
          <h1 className="text-[40px] font-serif font-bold text-[#1A0B5B] text-center">Trending Product</h1>
          <div className="flex justify-center gap-5">
           {data.map ((Idata,index) => (
            <div key={index} className=" mt-10 w-[500] h-[150] shadow-lg border border-gray-300 rounded-lg ">
                <div className="flex m-2 bg-[#F2F0FF] w-[218px] h-[182px] rounded-lg ">
                  <Image src={Idata.Image} 
                  alt={Idata.title} 
                  width={180} 
                  height={150}
                  className="w-30 h-30 ml-5 p-5"
                   ></Image>
                </div>
                <div className="p-2 text-center">
                  <h2 className="text-[#1A0B5B] text-md font-bold text-[Lato]">{Idata.title}</h2>
                  <p className="text-[#1A0B5B] text-[JosefinSans] font-sm">{Idata.price} <del className="text-gray-400">{Idata.delprice}</del></p>
                </div>
            </div>
            ))}
            </div>
            <div className="w-full h-[500] flex justify-center mt-5 gap-4">
                <div className="w-[200] h-[150] bg-pink-100 border border-gray-300 p-10">
                    <div>
                      <h1 className="text-[26px] font-bold font-[Josefin Sans] text-[#1A0B5B]">23% off in all Products</h1>
                      <span className="text-md text-pink-600 underline underline-offset-3">Shop Now</span>
                    </div>
                   <div>
                      <Image
                       src="/images/voucher1.png"
                       alt="voucher"
                       height={100}
                       width={100}
                       className="ml-40 w-[60] h-[60] "
                       ></Image>
                    </div>
                </div>
                <div className="w-[400] h-[200] bg-[#F2F0FF] border border-gray-300 p-10">
                    <div>
                        <h1 className="text-[26px] font-bold font-[JosefinSans] text-[#1A0B5B]">23% off in all Products</h1>
                        <span className="text-md text-pink-600 underline underline-offset-3">Shop Now</span>
                    </div>
                    <div>
                     <Image
                     src="/images/voucher2.png"
                     alt="voucher"
                     height={100}
                     width={100}
                     className="ml-40 mt-10 w-[60] h-[60] "
                     ></Image>
                    </div>
                </div>
                <div className="w-[100] h-[60]">
                    <div className=" flex justify-center border border-gray-400 rounded-lg">
                        <div className="bg-[#F2F0FF] rounded-s-lg">
                        <Image
                        src="/images/chair1.png"
                        alt="chair"
                        height={30}
                        width={40}
                        className=" w-30 h-10 mt-3 p-2"
                        ></Image>
                        </div>
                        <div className="text-md text-[#1A0B5B] p-5">
                           <span>Excecutive seats chair</span>
                           <span>$22.00</span>
                        </div>
                    </div>
                    <br/>
                    <div className=" flex justify-center border border-gray-400 rounded-lg">
                       <div className="bg-[#F2F0FF] rounded-s-lg">
                       <Image
                        src="/images/chair2.png"
                        alt="chair"
                        height={30}
                        width={40}
                        className="w-30 h-10 mt-3 p-2"
                        ></Image>
                        </div>
                        <div className="text-md text-[#1A0B5B]p-5">
                           <span>Excecutive seats chair</span>
                           <span>$22.00</span>
                        </div>
                    </div>
                    <br/>
                    <div className=" flex justify-center border border-gray-400 rounded-lg">
                        <div className="bg-[#F2F0FF] rounded-s-lg">
                        <Image
                        src="/images/chair3.png"
                        alt="chair"
                        height={30}
                        width={40}
                        className="w-30 h-10 mt-3 p-2"
                        ></Image>
                        </div>
                        <div className="text-md text-[#1A0B5B] p-5">
                           <span>Excecutive seats chair</span>
                           <span>$22.00</span>
                        </div>
                    </div>
                    
                </div>
                
            </div>
  
        </div>
    )
}