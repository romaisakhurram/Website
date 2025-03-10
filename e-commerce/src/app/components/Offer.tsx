import Image from "next/image"

export default function Offer () {
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
        <div className="w-full mt-8 sm:mt-10 px-4 sm:px-5 pb-8">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] font-[JosefinSans] font-bold text-[#1A0B5B] text-center mb-6 sm:mb-8">What Shopex Offer!</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
           {data.map ((Idata,index) => (
            <div key={index} className="bg-white p-4 sm:p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center">
                  <Image 
                    src={Idata.Image} 
                    alt={Idata.title} 
                    width={100} 
                    height={100}
                    className="w-16 sm:w-20 h-16 sm:h-20 object-contain"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h2 className="text-[#1A0B5B] text-lg sm:text-[22px] font-semibold font-serif mb-2">{Idata.title}</h2>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{Idata.desc}</p>
                </div>
            </div>
            ))}
          </div>
        </div>
    )
}