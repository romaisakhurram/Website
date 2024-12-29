import Image from "next/image";
import Link from "next/link"

export default function ShoppingCart() {
    return (
    <header>
        <div className="w-full h-[150px] bg-[#F2F0FF] px-20 pt-10">
          <h1 className="text-[30px] text-[#101750] font-[JosefinSans] font-bold">Shopping Cart</h1>
          <ul className="flex gap-2">
            <li>Home_</li>
            <li>Pages_</li>
            <li className="text-pink-600">ShoppingCart</li>
          </ul>
        </div>
      <div className="min-h-screen py-10 px-6">  
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <table className="w-full text-left font-bold border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 py-4">Product</th>
                  <th className="border-b-2 py-4">Price</th>
                  <th className="border-b-2 py-4">Quantity</th>
                  <th className="border-b-2 py-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: 1,
                    Image: "/images/shoppingCart1.png",
                    name: "Urna duis consequat",
                    price: "$32.00",
                    quantity: 1,
                    total: "$32.00",
                  },
                  {
                    id: 2,
                    Image: "/images/shoppingCart2.png",
                    name: "Vel faucibus posuere",
                    price: "$32.00",
                    quantity: 1,
                    total: "$32.00",
                  },
                  {
                    id: 3,
                    Image: "/images/shoppingCart3.png",
                    name: "Ac vitae vestibulum",
                    price: "$32.00",
                    quantity: 1,
                    total: "$32.00",
                  },
                  {
                    id: 4,
                    Image: "/images/shoppingCart4.png",
                    name: "Elit massa diam",
                    price: "$32.00",
                    quantity: 1,
                    total: "$32.00",
                  },
                  {
                    id: 5,
                    Image: "/images/shoppingCart5.png",
                    name: "Praesent pharetra",
                    price: "$32.00",
                    quantity: 1,
                    total: "$32.00",
                  },
                ].map((item) => (
                  <tr key={item.id}>
                    <td className="py-4">
                      <div className="flex items-center gap-4">
                        <Image
                          src={item.Image}
                          alt={item.name}
                          width={100}
                          height={100}
                          className="w-16 h-16 rounded-md object-cover"
                        ></Image>
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-gray-500">Color: Brown</p>
                          <p className="text-sm text-gray-500">Size: XL</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">{item.price}</td>
                    <td className="py-4">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        className="w-16 border border-gray-400 rounded-md text-center"
                      />
                    </td>
                    <td className="py-4">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between mt-6">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-violet-700">
                Update Cart
              </button>
              <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-500">
                Clear Cart
              </button>
            </div>
          </div>
  
          {/* Cart Totals */}
          <div className="p-6">
            <h2 className="text-lg text-[#101750] font-bold mb-4">Cart Totals</h2>
            <div className="border-b border bg-[#F2F0FF] rounded-md border-gray-400 p-10">
              <div className="flex justify-between mb-2">
                <span className="text-gray-500">Subtotal:</span>
                <span className="font-semibold">£219.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Total:</span>
                <span className="font-semibold">£325.00</span>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * Shipping & taxes calculated at checkout
              </p>
              <button className="bg-green-500 text-white w-full py-2 rounded-md mt-4 hover:bg-green-600">
                <Link href="/Pages"> Proceed to Checkout</Link>
              </button>
            </div>

            {/* Calculator Section */}
            <div className="mt-6">
              <h2 className="text-lg text-[#101750] font-bold mb-4">Calculate Shopping</h2>
              <form className="space-y-4 bg-[#F2F0FF] rounded-md p-10 border border-gray-400">
                <input
                  type="text"
                  placeholder="Bangladesh"
                  className="w-full border border-gray-400 rounded-md px-4 py-2"
                />

                <input
                  type="text"
                  placeholder="Mirpur Dhaka - 1000"
                  className="w-full border border-gray-400 rounded-md px-4 py-2"
                />

                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full border border-gray-400 rounded-md px-4 py-2"
                />

                <button
                  type="submit"
                  className="bg-pink-600 text-white w-full py-2 rounded-md hover:bg-violet-700">
                  Calculate Shipping
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
  