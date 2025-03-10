import Image from "next/image"

export default function FAQ () {  
    return (
        <header className="min-h-screen bg-gray-50">
            <div className="w-full bg-[#F2F0FF] px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-10">
               <h1 className="text-2xl sm:text-3xl md:text-4xl font-[JosefinSans] font-bold text-[#1D3178]">FAQ</h1>
                <ul className="flex gap-2 text-sm sm:text-base mt-2 text-gray-600">
                   <li>Home_</li>
                   <li>Pages_</li>
                   <li className="text-pink-600">FAQ</li>
                </ul>
            </div>
            <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16">
                <div className="flex flex-col lg:flex-row gap-8 xl:gap-16">
                    <div className="w-full lg:w-3/5">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-[JosefinSans] font-bold text-[#1D3178] mb-8">General Information</h1>
                        <ul className="space-y-6 sm:space-y-8">
                            {[
                                {
                                    ques : "Eu dictumst cum at sed euismood condimentum?",
                                    desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis."
                                },
                                {
                                    ques: "Magna bibendum est fermentum eros.",
                                    desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
                                },
                                {
                                    ques: "Odio muskana hak eris conseekin sceleton?",
                                    desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
                                },
                                {
                                    ques: "Elit id blandit sabara boi velit gua mara?",
                                    desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
                                }
                            ].map((data, index) => (
                                <li key={index} className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                                    <h3 className="text-lg sm:text-xl font-[JosefinSans] font-bold text-[#1D3178] mb-3">{data.ques}</h3>
                                    <p className="text-sm sm:text-base text-[#A1ABCC] leading-relaxed">{data.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <aside className="w-full lg:w-2/5 lg:sticky lg:top-8">
                        <div className="bg-[#F2F0FF] rounded-xl p-6 sm:p-8 shadow-lg">
                            <form className="space-y-6">
                                <h2 className="text-xl sm:text-2xl font-[JosefinSans] font-bold text-[#1D3178]">Ask a Question</h2>
                                <div className="space-y-4">
                                    <input 
                                        type="text" 
                                        placeholder="Your Name*"
                                        className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm sm:text-base transition-all" 
                                    />
                                    <input 
                                        type="email" 
                                        placeholder="Subject*"
                                        className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm sm:text-base transition-all" 
                                    />
                                    <textarea 
                                        placeholder="Type your message*" 
                                        rows={5} 
                                        className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm sm:text-base resize-none transition-all"
                                    ></textarea>
                                </div>
                                <button className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 active:bg-pink-800 transition-colors text-sm sm:text-base font-medium">
                                    Send Mail
                                </button>
                            </form>
                        </div>
                        <div className="mt-8 flex justify-center lg:justify-start">
                            <Image
                                src="/images/Signatures.png"
                                alt="signature image"
                                width={200}
                                height={80}
                                className="h-auto w-40 sm:w-48 md:w-56 hover:opacity-90 transition-opacity"
                            />
                        </div>
                    </aside>
                </div>
            </div>
        </header>
    )
}