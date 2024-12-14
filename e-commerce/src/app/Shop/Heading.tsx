export default function Heading () {
    return (
        <div className="w-full h-[300px]">
           <div className="w-full h-[150px] bg-[#F2F0FF] px-20 pt-10 mb-5">
              <h1 className="text-[30px] font-serif font-bold">Grid Default</h1>
                <ul className="flex gap-2">
                  <li>Home_</li>
                  <li>Pages_</li>
                  <li className="text-pink-600">MyAccount</li>
                </ul>
            </div>
            <div className="flex justify-center p-5">
                <div>
                 <h1 className="text-3xl font-bold font-serif">Ecommerce Accessories & Fashion Item</h1>
                 <p className="text-sm text-gray-400">About 9,620 results(0.62 seconds)</p>
                </div>

                <div className="flex justify-center gap-5">
                    <label htmlFor="number">Per Page:</label>
                    <input type="number" name="number" 
                    className="w-[5%] h-8 border border-gray-400" />

                    <label htmlFor="text">Sort By:</label>
                    <input type="text" name="number" placeholder="Best Watch"
                    className=" w-[10%] h-8 border border-gray-400 text-md" />

                    <label htmlFor="number">Views:</label>
                    <input type="number" name="number" 
                    className="w-[20%] h-8 border border-gray-400" />
                </div>
            </div>
        </div>
    )
}