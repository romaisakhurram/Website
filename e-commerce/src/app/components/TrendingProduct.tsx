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
        <div className="w-full mt-12 sm:mt-16 md:mt-20 px-4 sm:px-5">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] font-serif font-bold text-[#1A0B5B] text-center mb-6 sm:mb-8">Trending Products</h1>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-7xl mx-auto">
           {data.map((Idata,index) => (
            <div key={index} className="bg-white shadow-lg border border-gray-300 rounded-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#F2F0FF] rounded-lg p-4 aspect-square flex items-center justify-center">
                  <Image 
                    src={Idata.Image} 
                    alt={Idata.title} 
                    width={180} 
                    height={150}
                    className="w-4/5 h-4/5 object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-[#1A0B5B] text-base sm:text-lg font-bold font-[Lato] mb-2">{Idata.title}</h2>
                  <p className="text-[#1A0B5B] font-[JosefinSans]">
                    <span className="font-medium">{Idata.price}</span>
                    <del className="text-gray-400 ml-2">{Idata.delprice}</del>
                  </p>
                </div>
            </div>
           ))}
          </div>

          {/* Promotional Section */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* First Promo Card */}
            <div className="bg-pink-100 border border-gray-300 p-4 sm:p-6 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-bold font-[Josefin Sans] text-[#1A0B5B]">23% off in all Products</h2>
                  <span className="text-pink-600 underline underline-offset-3 cursor-pointer">Shop Now</span>
                </div>
                <Image
                  src="/images/voucher1.png"
                  alt="voucher"
                  height={100}
                  width={100}
                  className="w-20 sm:w-24 h-20 sm:h-24 object-contain"
                />
              </div>
            </div>

            {/* Second Promo Card */}
            <div className="bg-[#F2F0FF] border border-gray-300 p-4 sm:p-6 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-bold font-[JosefinSans] text-[#1A0B5B]">23% off in all Products</h2>
                  <span className="text-pink-600 underline underline-offset-3 cursor-pointer">Shop Now</span>
                </div>
                <Image
                  src="/images/voucher2.png"
                  alt="voucher"
                  height={100}
                  width={100}
                  className="w-20 sm:w-24 h-20 sm:h-24 object-contain"
                />
              </div>
            </div>

            {/* Featured Product Card */}
            <div className="hidden lg:block">
              <div className="border border-gray-400 rounded-lg p-3 flex items-center gap-4">
                <div className="bg-[#F2F0FF] rounded-lg p-2 flex-shrink-0">
                  <Image
                    src="/images/chair1.png"
                    alt="chair"
                    height={40}
                    width={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="flex flex-col text-[#1A0B5B]">
                  <span className="font-medium">Executive seats chair</span>
                  <span className="text-sm">$22.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}