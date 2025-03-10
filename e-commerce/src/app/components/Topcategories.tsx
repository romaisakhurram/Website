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
        <div className="w-full py-10 md:py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl md:text-[40px] font-[Josefin Sans] font-bold text-[#1A0B5B] text-center mb-8 md:mb-12">
                    Top Categories
                </h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {data.map((Idata, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {/* Circular Image Container */}
                            <div className="relative w-full max-w-[250px] aspect-square">
                                <div className="absolute inset-0 bg-[#F2F0FF] rounded-full transition-all duration-300 hover:border-s-4 hover:border-[#1A0B5B] group">
                                    <div className="relative w-full h-full flex items-center justify-center p-8">
                                        <Image 
                                            src={Idata.Image} 
                                            alt={Idata.title} 
                                            width={100} 
                                            height={80}
                                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Product Info */}
                            <div className="mt-4 text-center">
                                <h2 className="text-[#1A0B5B] text-lg md:text-xl font-[Josefin Sans] mb-1">
                                    {Idata.title}
                                </h2>
                                <p className="text-[#1A0B5B] text-base md:text-md font-[Josefin Sans]">
                                    {Idata.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}