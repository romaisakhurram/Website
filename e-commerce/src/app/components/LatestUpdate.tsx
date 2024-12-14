import Image from "next/image"
export default function LatestUpdate () {
    return (
        <div className="w-full h-full">
            <div className=" w-full h-[330px] bg-no-repeat bg-cover bg-[url('/images/Latest1.png')]">
                <div className="text-center">
                    <h1 className="text-[35px] font-serif font-bold p-20 mt-8">Get Latest Update By Subscribe <br />Our News Letter</h1>
                    <button className="w-30 h-30 bg-pink-600 text-white p-2 ml-[2%] ">Shop Now</button>
                </div>
            </div>
            <div className="ml-[30%] mt-10">
                    <Image
                    src="/images/Signatures.png"
                    alt="Signature Image"
                    width={600}
                    height={400}
                    >
                    </Image>
            </div>
        </div>
        
    )
} 