import Image from "next/image"

export default function UniqueFeature () {
    return (
        <div className=" w-full h-[500px] bg-[#F2F0FF] items-center mt-10">
            <div className=" w-full h-[500px] flex justify-center">
                <div>
                  <Image
                  src="/images/blueSofa.png"
                  alt="blueSofa"
                  width={500}
                  height={500}
                  className="w-400 h-300 mt-10"
                  ></Image>
                </div>
                <div className="mt-20 ">
                    <span className="text-[40px] font-bold font-serif">Unique Feature Of Leatest & Trending product</span><br />
                    <p className="text-[20px] text-gray-400">All frames constructed with hardwood solids and laminates</p><br />
                    <p className="text-[20px] text-gray-400">Reinforced with double wood dowels, glue, screw - nails corner 
                    blocks and machine nails</p><br />
                    <p className="text-[20px] text-gray-400">Arms, backs and seats are structurally reinforced</p><br />
                    <div>
                      <button className="w-40 h-[35px] bg-pink-600 text-white text-[15px]">Add to Cart</button>
                      <span className="text-[15px]">B&B Italian Sofa</span>&nbsp;
                      <span className="text-[15px]">$32.00</span>
                    </div>
                
                </div>
            </div>
        </div>
    )
}