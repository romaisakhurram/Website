import Image from "next/image"

export default function ShopGrid () {
    const data = [ 
    {
        id:1,
        title :"Vel elit euismod",
        price:"$26.00",
        delPrice:"$42.00",
        Image: "/images/shop1.png"
    },
    {
        id:2,
        title :"Ultricies condimentum imperdiet",
        price:"$26.00",
        delPrice:"$42.00",
        Image : "/images/shop2.png"
    },
    {
        id:3,
        title :"Vitae suspendisse sed",
        price:"$26.00",
        delPrice:"$42.00",
        Image : "/images/shop3.png"
    },
    {
        id:4,
        title :"Sed at fermentum",
        price:"$26.00",
        delPrice:"$42.00",
       Image : "/images/shop4.png"
    },
    {
        id:5,
        title :"Fusce pellentesque at",
        price:"$26.00",
        delPrice:"$42.00",
       Image : "/images/shop5.png"
    },
    {
        id:6,
        title :"Vestibulum magna laoreet",
        price:"$26.00",
        delPrice:"$42.00",
       Image : "/images/shop6.png"
    },
    {
        id:7,
        title :"Sollicitudin amet orci",
        price:"$26.00",
        delPrice:"$42.00",
       Image : "/images/shop7.png"
    },
    {
        id:8,
        title :"Ultrices mauris sit",
        price:"$26.00",
        delPrice:"$42.00",
       Image : "/images/shop8.png"
    },
    {
        id:9,
        title :"Pellentesque condimentum",
        price:"$26.00",
        delPrice:"$42.00",
       Image : "/images/shop9.png"
    },
    {
        id:10,
        title :"Cras scelerisque velit",
        price:"$26.00",
        delPrice:"$42.00",
       Image : "/images/shop10.png"
    },
    {
        id:11,
        title :"Lectus vulputate faucibus",
        price:"$26.00",
        delPrice:"$42.00",
       Image : "/images/shop11.png"
    },
    {
        id:12,
        title :"Purus risus, ut",
        price:"$26.00",
        delPrice:"$42.00",
       Image : "/images/shop4.png"
    },
    ]

    return (
        <header className="min-h-screen bg-gray-50">
           <div className="w-full bg-[#F2F0FF] px-4 sm:px-6 lg:px-20 py-8 sm:py-10">
               <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold">Shop Grid Default</h1>
                <ul className="flex gap-2 text-sm sm:text-base mt-2">
                  <li>Home_</li>
                  <li>Pages_</li>
                  <li className="text-pink-600">ShopGridDefault</li>
                </ul>
            </div>

           <div className="container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="space-y-6 sm:space-y-8 lg:space-y-0 lg:flex lg:justify-between lg:items-center mb-8 sm:mb-12">
                    <div>
                       <h1 className="text-2xl sm:text-3xl font-bold font-serif mb-2">Ecommerce Accessories & Fashion Item</h1>
                        <p className="text-sm text-gray-500">About 9,620 results (0.62 seconds)</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                       <div className="flex items-center gap-2">
                           <label htmlFor="perPage" className="whitespace-nowrap">Per Page:</label>
                           <input 
                               type="number" 
                               id="perPage"
                               className="w-20 h-10 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" 
                           />
                       </div>

                       <div className="flex items-center gap-2">
                           <label htmlFor="sortBy" className="whitespace-nowrap">Sort By:</label>
                           <input 
                               type="text" 
                               id="sortBy"
                               placeholder="Best Watch"
                               className="w-32 h-10 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" 
                           />
                       </div>

                       <div className="flex items-center gap-2">
                           <label htmlFor="views" className="whitespace-nowrap">Views:</label>
                           <input 
                               type="number" 
                               id="views"
                               className="w-20 h-10 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" 
                           />
                       </div>
                    </div>
                </div>
                
                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                    {data.map((item, index) => (
                        <div key={index} className="group">
                            <div className="aspect-square bg-[#F2F0FF] rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                                <div className="relative w-full h-full p-4">
                                    <Image 
                                        src={item.Image} 
                                        alt={item.title} 
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <h2 className="text-blue-950 font-bold font-serif text-sm sm:text-base mb-1 line-clamp-1">{item.title}</h2>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-gray-600">{item.price}</span>
                                    <del className="text-pink-600 text-sm">{item.delPrice}</del>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Signature */}
                <div className="flex justify-center py-12">
                    <Image
                        src="/images/Signatures.png"
                        alt="Signature"
                        width={300}
                        height={120}
                        className="w-48 sm:w-64 lg:w-80 h-auto"
                    />
                </div>
            </div>    
        </header>  
    )
}
