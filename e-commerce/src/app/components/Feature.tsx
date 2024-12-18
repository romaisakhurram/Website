import Image from "next/image"

export default function Feature () {
    const data = [ 
    {
        id:1,
        title :"Cantilever chair",
        Code:"Code-Y252301 ",
        price:"$42.00",
       Image:  "/images/chairWhite.png"
    },
    {
        id:2,
        title :"Cantilever chair",
        Code:"Code-Y252301 ",
        price:"$42.00",
       Image :  "/images/Feature2.png"
    },
    {
        id:3,
        title :"Cantilever chair",
        Code:"Code-Y252301 ",
        price:"$42.00",
       Image :  "/images/blueChair.png"
    },
    {
        id:4,
        title :"Cantilever chair",
        Code:"Code-Y252301 ",
        price:"$42.00",
       Image : "/images/chair.png"
    },
    ]

    return (
        <div className="w-full h-[800] mt-20 p-5">
          <h1 className="text-[40px] font-serif font-bold text-[#1A0B5B] text-center">Feature Product</h1>
          <div className="flex justify-center gap-10">
           {data.map ((Idata,index) => (
            <div key={index} className=" mt-20 bg-white w-[500] h-[200] shadow-lg border border-gray-300 rounded-xl">
                <div className="flex bg-[#F2F0FF] w-[300] h-[300] rounded-xl">
                  <Image src={Idata.Image} 
                  alt={Idata.title} 
                  width={220} 
                  height={220}
                  className="w-60 h-60 p-10"
                   ></Image>
                </div>
                <div className="p-2 text-center hover:bg-blue-800">
                  <h2 className="text-pink-600 text-[20px]">{Idata.title}</h2>
                  <p>{Idata.Code}</p>
                  <p className="text-gray-400">{Idata.price}</p>
                </div>
            </div>
            ))}
            </div>
  
        </div>
    )
}