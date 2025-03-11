import Image from "next/image"
import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdOutlineAccountBox } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { HiOutlineMagnifyingGlass} from "react-icons/hi2";
export default function Blog1 () {
    
  return (
    <header>
        <div className="w-full bg-[#F2F0FF] px-4 sm:px-6 lg:px-20 py-8 sm:py-10">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold">Single Blog</h1>
          <ul className="flex gap-2 text-sm sm:text-base mt-2">
            <li>Home_</li>
            <li>Pages_</li>
            <li className="text-pink-600">Single Blog</li>
          </ul>
        </div>
      <div className="container mx-auto px-4 lg:px-20 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src="/images/blog1.png"
                    alt="blog image"
                    width={800}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-[#1A0B5B]">Mauris at orci non vulputate diam tincidunt nec.</h2>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">Praesent nonummy mi in odio. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum.</p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.</p>
                </div>
              </div>

              <div className="bg-[#FAFAFB] p-4 sm:p-6 rounded-lg">
                <p className="text-gray-600 text-sm sm:text-base italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat
                  toamk risusu.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="aspect-w-4 aspect-h-3">
                    <Image
                      src="/images/Group1.png"
                      alt="blog image"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="aspect-w-4 aspect-h-3">
                    <Image
                      src="/images/Group2.png"
                      alt="blog image"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra.
                </p>
              </div>

              {/* Related Products */}
              <div className="py-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-[#1A0B5B]">Related Products</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {title: "Quam sed", price:"$32.00" , delPrice:"$56.00", Image: "/images/Rectangle10.png" },
                    {title: "Tristique sed", price:"$32.00" , delPrice:"$56.00", Image: "/images/Rectangle9.png" },
                    {title: "A etiam", price:"$32.00" , delPrice:"$56.00", Image: "/images/Rectangle5.png" },
                    {title: "Mi nisi", price:"$32.00" , delPrice:"$56.00", Image: "/images/Rectangle11.png" },
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="aspect-w-1 aspect-h-1">
                        <Image
                          src={item.Image}
                          alt={item.title}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h4 className="text-[#1A0B5B] font-semibold mb-2">{item.title}</h4>
                        <p className="text-gray-600">
                          <span>{item.price}</span>
                          <span className="text-pink-600 ml-2 line-through">{item.delPrice}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Share */}
              <div className="flex justify-center space-x-4">
                <button className="p-2 text-blue-600 hover:text-blue-700 transition-colors">
                  <FaFacebook className="w-6 h-6" />
                </button>
                <button className="p-2 text-pink-600 hover:text-pink-700 transition-colors">
                  <SiInstagram className="w-6 h-6" />
                </button>
                <button className="p-2 text-blue-400 hover:text-blue-500 transition-colors">
                  <AiFillTwitterCircle className="w-6 h-6" />
                </button>
              </div>

              {/* Related Posts */}
              <div className="space-y-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 p-4">
                    <div className="w-24 h-24 flex-shrink-0">
                      <Image
                        src="/images/Rectangle8.png"
                        alt="Related post"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-[#1A0B5B] font-semibold mb-2">Sapien ac</h4>
                      <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 p-4">
                    <div className="w-24 h-24 flex-shrink-0">
                      <Image
                        src="/images/Rectangle9.png"
                        alt="Related post"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-[#1A0B5B] font-semibold mb-2">Sapien ac</h4>
                      <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment Form */}
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                <h3 className="text-xl font-semibold mb-6 text-[#1A0B5B]">Leave a Comment</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MdOutlineAccountBox className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MdOutlineMailOutline className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute top-3 left-3 text-gray-400">
                      <BiCommentDetail />
                    </div>
                    <textarea
                      placeholder="Write your comment"
                      rows={4}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    ></textarea>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="subscribe" className="rounded text-pink-600 focus:ring-pink-500" />
                    <label htmlFor="subscribe" className="text-sm text-gray-600">
                      Save my name, email, and website in this browser for the next time I comment.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Search */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <HiOutlineMagnifyingGlass className="text-gray-400" />
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-[#1A0B5B]">Categories</h3>
              <ul className="space-y-2">
                {["Women", "Men", "Accessories", "Kids"].map((category, index) => (
                  <li key={index}>
                    <button className="w-full text-left px-2 py-1.5 text-gray-600 hover:text-pink-600 transition-colors">
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-[#1A0B5B]">Recent Posts</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0">
                      <Image
                        src={`/images/blog${index + 1}.png`}
                        alt="Recent post"
                        width={80}
                        height={80}
                        className="w-20 h-20 object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-[#1A0B5B] line-clamp-2">
                        It is a long established fact
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">Aug 09 2020</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sale Banner */}
            <div className="bg-[#F2F0FF] p-4 rounded-lg text-center">
              <h3 className="text-xl font-bold text-[#1A0B5B] mb-4">Sale Product</h3>
              <div className="aspect-w-1 aspect-h-1">
                <Image
                  src="/images/blog2.png"
                  alt="Sale Product"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
}