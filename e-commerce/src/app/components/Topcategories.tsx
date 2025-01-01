import Image from "next/image"

export default function Feature () {
    const data = [ 
    {
        id:1,
        title :"Mini LCW Chair",
        price:"$56.00",
       Image:  "/images/chairWhite.png"
    },
    {
        id:2,
        title :"Mini LCW Chair",
        price:"$56.00",
       Image :  "/images/chair.png"
    },
    {
        id:3,
        title :"Mini LCW Chair",
        price:"$56.00",
       Image :  "/images/grayChair.png"
    },
    {
        id:4,
        title :"Mini LCW Chair",
        price:"$56.00",
       Image : "/images/chairWhite.png"
    },
    ]

    return (
        <div className="w-full h-[800] mt-10 p-5">
          <h1 className="text-[40px] font-[Josefin Sans] font-bold text-[#1A0B5B] text-center">Top Categories</h1>
          <div className="flex justify-center gap-10">
           {data.map ((Idata,index) => (
            <div key={index} className="mt-20 bg-white w-[500] h-[200]">
                <div className="flex bg-[#F2F0FF] w-[250px] h-[250px] rounded-full  hover:border-s-4 hover:border-[#1A0B5B] hover:border-spacing-1.5">
                  <Image src={Idata.Image} 
                  alt={Idata.title} 
                  width={100} 
                  height={80}
                  className="w-40 h-40 m-12"
                   ></Image>
                </div>
                <div className="p-2 font-[Josefin Sans] text-center">
                  <h2 className="text-[#1A0B5B] text-xl">{Idata.title}</h2>
                  <p className="text-[#1A0B5B] text-md">{Idata.price}</p>
                </div>
            </div>
            ))}
            </div>
  
        </div>
    )
}