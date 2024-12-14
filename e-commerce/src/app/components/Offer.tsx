import Image from "next/image"

export default function Feature () {
    const data = [ 
    {
        id:1,
        title :"24/7 Support",
        desc :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
       Image:  "/images/offer2.png"
    },
    {
        id:2,
        title :"24/7 Support",
        desc :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
       Image :  "/images/offer3.png"
    },
    {
        id:3,
        title :"24/7 Support",
        desc :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
       Image :  "/images/offer4.png"
    },
    {
        id:4,
        title :"24/7 Support",
        desc :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
       Image : "/images/offer1.png"
    },
    ]

    return (
        <div className="w-full h-[800] mt-10 p-5">
          <h1 className="text-[40px] font-serif font-bold text-[#1A0B5B] text-center">What Shopex Offer!</h1>
          <div className="flex justify-center gap-10">
           {data.map ((Idata) => (
            <div className=" mt-10 bg-white w-[250px] h-[250px] border border-gray-300 rounded-xl">
                <div className="flex rounded-xl">
                  <Image src={Idata.Image} 
                  alt={Idata.title} 
                  width={100} 
                  height={100}
                  className="w-30 h-30 p-2 ml-[30%]"
                   ></Image>
                </div>
                <div className="p-3 text-center">
                  <h2 className="text-black text-[25px] font-bold font-serif">{Idata.title}</h2>
                  <p className="text-gray-300 text-[18px]">{Idata.desc}</p>
                </div>
            </div>
            ))}
            </div>
  
        </div>
    )
}