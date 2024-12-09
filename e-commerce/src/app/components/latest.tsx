import Image from "next/image"

export default function Latest() {
    return (
      <div
        className="container mx-auto px-4 py-20"
        style={{ backgroundColor: "white" }}
      >
        <h1 className="text-3xl font-bold text-center mb-2">Latest Products</h1>
  
        {/* Static Navigation */}
        <div className="flex justify-center space-x-8 text-[#151875]">
          <a href="#" className="text-[#FB4997] font-semibold">
            New Arrival
          </a>
          <a href="#" className="hover:text-[#FB4997]">Best Seller</a>
          <a href="#" className="hover:text-[#FB4997]">Featured</a>
          <a href="#" className="hover:text-[#FB4997]">Special Offer</a>
        </div>
  
        {/* Static Grid with 6 Cards */}
        <div className="w-100 h-200 grid grid-cols-1 sm:grid-cols-2 ml-16 md:grid-cols-3 gap-20 mt-10">
          {/* Card 1 */}
          <div className=" w-[250px] h-[200px] border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
            <div className="mx-auto">
              <Image
                src="/images/browSofa.png"
                alt="Comfort Handy Craft"
                className="object-cover rounded-t-lg mb-4"
                width={180}
                height={100}
                ></Image>
            </div>
              <div className="p-15 rounded-b-lg">
                <h2 className="text-15 font-semibold mb-2">Comfort Handy Craft</h2>
                <div className="flex items-center">
                  <span className="text-pink-500 font-bold mr-1">$42.00</span>
                  <span className="text-gray-400 line-through">$65.00</span>
                </div>
              </div>
            </div>
  
          {/* Card 2 */}
          <div className=" w-[250px] h-[200px] border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
            <div className="mx-auto">
              <Image
                src="/images/chairYellow.png"
                alt="Comfort Handy Craft"
                className="object-cover bg-[#f7f7f7]  bg-rounded-t-lg mb-4"
                width={180}
                height={100}
              ></Image>
            </div>
            <div className="p-15 rounded-b-lg">
              <h2 className="text-lg font-semibold mb-2">Comfort Handy Craft</h2>
              <div className="flex items-center">
                <span className="text-pink-500 font-bold mr-2">$42.00</span>
                <span className="text-gray-400 line-through">$65.00</span>
              </div>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className=" w-[250px] h-[200px] border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
            <div className="mx-auto">
              <Image
                src="/images/chairWhite.png"
                alt="Comfort Handy Craft"
                className=" object-cover rounded-t-lg mb-4"
                width={180}
                height={100}
              ></Image>
               <div className="p-15 rounded-b-lg">
                   <h2 className="text-lg font-semibold mb-2">Comfort Handy Craft</h2>
                   <div className="flex items-center">
                     <span className="text-pink-500 font-bold mr-2">$77.00</span>
                     <span className="text-gray-400 line-through">$65.00</span>
                   </div>
                </div>
            </div>
          </div>
  
          {/* Card 4 */}
          <div className="w-[250px] h-[200px] border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
            <div className=" mx-auto">
              <Image
                src="/images/whiteSofa.png"
                alt="Comfort Handy Craft"
                className="object-cover rounded-t-lg mb-4"
                width={180}
                height={100}
                ></Image>
            </div>
            <div className="p-15 rounded-b-lg">
              <h2 className="text-lg font-semibold mb-2">Comfort Handy Craft</h2>
              <div className="flex items-center">
                <span className="text-pink-500 font-bold mr-2">$42.00</span>
                <span className="text-gray-400 line-through">$65.00</span>
              </div>
            </div>
          </div>
  
          {/* Card 5 */}
          <div className=" w-[250px] h-[200px] border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
            <div className="mx-auto">
              <Image
                src="/images/blackSofa.png"
                alt="Comfort Handy Craft"
                className=" object-cover rounded-t-lg mb-4"
                width={200}
                height={150}
                ></Image>
            </div>
            <div className="p-15 rounded-b-lg">
              <h2 className="text-lg font-semibold mb-2">Comfort Handy Craft</h2>
              <div className="flex items-center">
                <span className="text-pink-500 font-bold mr-2">$42.00</span>
                <span className="text-gray-400 line-through">$65.00</span>
              </div>
            </div>
          </div>
  
          {/* Card 6 */}
          <div className=" w-[260px] h-[200px] border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
            <div className="mx-auto">
              <Image
                src="/images/chair.png"
                alt="Comfort Handy Craft"
                className="object-cover rounded-t-lg mb-4"
                width={250}
                height={150}
                ></Image>
            </div>
            <div className="p-15 rounded-b-lg">
              <h2 className="text-lg font-semibold mb-2">Comfort Handy Craft</h2>
              <div className="flex items-center">
                <span className="text-pink-500 font-bold mr-2">$42.00</span>
                <span className="text-gray-400 line-through">$65.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
  