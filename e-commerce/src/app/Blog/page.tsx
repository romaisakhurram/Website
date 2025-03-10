import { HiOutlineMagnifyingGlass} from "react-icons/hi2";
import Image from "next/image"
import Link from "next/link"

export default function Blog() {
    const posts = [
      {
        id: 1,
        title: "Mauris at orci non vulputate diam tincidunt nec.",
        desc:
          "Praesent nonummy mi in odio. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum.",
        image: "/images/blog1.png",
       
      },
      {
        id: 2,
        title: "Aenean vitae in aliquam ultricies lectus. Etiam.",
        desc:
          "Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu.",
        image: "/images/blog2.png",
        
      },
      {
        id: 3,
        title: "Sit nam congue feugiat nisl, mauris amet nisi.",
        desc:
          "Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur blandit mollis lacus. Nam quam nunc, blandit vel.",
        image: "/images/blog3.png",
        
      },
    ];
  
    return (
      <header>
        <div className="w-full bg-[#F2F0FF] px-4 sm:px-6 lg:px-20 py-8 sm:py-10">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold">Blog</h1>
          <ul className="flex gap-2 text-sm sm:text-base mt-2">
            <li>Home_</li>
            <li>Pages_</li>
            <li className="text-pink-600">Blog</li>
          </ul>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              {posts.map((post,index) => (
                <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="aspect-w-16 aspect-h-9">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={300}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-semibold mb-3 text-[#1A0B5B]">{post.title}</h2>
                    <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">{post.desc}</p>
                    <Link
                      href="/Blog1"
                      className="inline-flex items-center text-pink-600 font-medium hover:text-pink-700 transition-colors"
                    >
                      Read More 
                      <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
    
            {/* Sidebar */}
            <aside className="mt-8 lg:mt-0">
              <div className="space-y-8">
                {/* Search */}
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4 text-[#1A0B5B]">Search</h3>
                  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                    <input 
                      type="text"
                      placeholder="Search..."
                      className="w-full p-2 sm:p-3 outline-none text-sm sm:text-base"
                    />
                    <button className="px-4 py-2 bg-pink-600 hover:bg-pink-700 transition-colors">
                      <HiOutlineMagnifyingGlass className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
    
                {/* Categories */}
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4 text-[#1A0B5B]">Categories</h3>
                  <ul className="space-y-2">
                    {["Women", "Women", "Women", "Women"].map((category, index) => (
                      <li key={index}>
                        <button className="w-full text-left px-2 py-1.5 text-gray-600 hover:text-pink-600 transition-colors text-sm sm:text-base">
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
    
                {/* Recent Posts */}
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold font-serif mb-4 text-[#1A0B5B]">Recent Posts</h3>
                  <ul className="space-y-4">
                    {[
                      {
                        title: "It is a long established fact",
                        image: "/images/blog1.png",
                        date: "Aug 09 2020"
                      },
                      {
                        title: "It is a long established fact",
                        image: "/images/blog2.png",
                        date: "Aug 09 2020"
                      },
                      {
                        title: "It is a long established fact",
                        image: "/images/blog3.png",
                        date: "Aug 09 2020"
                      }
                    ].map((post, index) => (
                      <li key={index} className="flex gap-3">
                        <div className="flex-shrink-0">
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={80}
                            height={80}
                            className="w-16 sm:w-20 h-16 sm:h-20 object-cover rounded"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-medium text-[#1A0B5B] line-clamp-2">{post.title}</h4>
                          <p className="text-xs sm:text-sm text-gray-500 mt-1">{post.date}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
    
                {/* Sale Banner */}
                <div className="bg-[#F2F0FF] p-4 sm:p-6 rounded-lg text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A0B5B] mb-2">Sale Product</h3>
                  <div className="aspect-w-1 aspect-h-1 my-4">
                    <Image
                      src="/images/blog2.png"
                      alt="Sale Product"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </header>
    );
}