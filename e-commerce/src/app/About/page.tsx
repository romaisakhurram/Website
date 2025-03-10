import Image from "next/image"
import Link from "next/link"

export default function About () {
        const data = [ 
    {
        id:1,
        title :"Free Delivery",
        desc :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
       Image:  "/images/offer2.png"
    },
    {
        id:2,
        title :"100% Cash Back",
        desc :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
       Image :  "/images/offer3.png"
    },
    {
        id:3,
        title :"Quality Product",
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
        <header className="min-h-screen">
            <div className="w-full bg-[#F2F0FF] px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-10">
               <h1 className="text-2xl sm:text-3xl md:text-4xl font-[JosefinSans] font-bold text-[#1A0B5B]">About</h1>
                <ul className="flex gap-2 text-sm sm:text-base mt-2 text-gray-600">
                   <li>Home_</li>
                   <li>Pages_</li>
                   <li className="text-pink-600">About</li>
                </ul>
            </div>

            <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
                    <div className="w-full lg:w-1/2">
                      <Image
                        src="/images/AboutImage.png"
                        alt="About image"
                        width={850}
                        height={650}
                        className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
                        <h1 className="font-[JosefinSans] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#1A0B5B] leading-tight">Know About Our Ecomerce Business, History</h1>
                        <p className="font-[Lato] text-gray-600 text-sm sm:text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                        <button className="w-full sm:w-auto px-8 h-12 text-white bg-pink-600 hover:bg-pink-700 active:bg-pink-800 transition-colors rounded-md">
                            <Link href="/FAQ" className="inline-block w-full h-full leading-[48px]">Contact Us</Link>
                        </button>
                    </div>
                </div>

                <div className="mt-16 sm:mt-20 md:mt-24 mb-12">
                    <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-[JosefinSans] font-bold text-[#1A0B5B] text-center mb-8 sm:mb-12">Our Features</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
                        {data.map((Idata,index) => (
                            <div key={index} className="bg-white p-6 sm:p-8 border border-gray-200 shadow-lg rounded-xl hover:shadow-2xl hover:border-pink-100 transition-all duration-300">
                                <div className="flex justify-center">
                                    <Image 
                                      src={Idata.Image} 
                                      alt={Idata.title} 
                                      width={100} 
                                      height={100}
                                      className="w-16 sm:w-20 h-16 sm:h-20 object-contain transform hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="mt-6 text-center">
                                    <h2 className="text-[#1A0B5B] text-lg sm:text-xl font-bold font-[JosefinSans] mb-3">{Idata.title}</h2>
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{Idata.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-[#FBFBFF] py-12 sm:py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="text-center space-y-6 sm:space-y-8">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-[JosefinSans] font-bold text-[#1A0B5B]">Our Client Say!</h1>
                        <div className="flex justify-center">
                            <Image
                                src="/images/Group 200.png"
                                alt="client images"
                                height={80}
                                width={150}
                                className="w-32 sm:w-40 md:w-48 h-auto rounded-lg shadow-md"
                            />
                        </div>
                        <div className="space-y-2 sm:space-y-3">
                            <h4 className="font-[Lato] text-xl sm:text-2xl text-[#1A0B5B]">Selina Gomez</h4>
                            <p className="text-xs sm:text-sm text-[#8A8FB9] font-medium">Ceo At Webecy Digital</p>
                        </div>
                        <p className="text-sm sm:text-base text-[#8A8FB9] font-medium max-w-2xl mx-auto leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin
                            aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor
                            aliquam lacus volutpat praesent.
                        </p>
                        <ul className="flex justify-center items-center gap-2">
                            <li className="bg-pink-400 w-6 h-1.5 rounded-full"></li>
                            <li className="bg-pink-600 w-8 h-1.5 rounded-full"></li>
                            <li className="bg-pink-400 w-6 h-1.5 rounded-full"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}