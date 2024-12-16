import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import Image from "next/image"
import Link from "next/link"
export default function Blog() {
    const posts = [
      {
        id: 1,
        title: "Mauris at orci non vulputate diam tincidunt nec.",
        excerpt:
          "Praesent nonummy mi in odio. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum.",
        image: "/images/blog1.png",
      },
      {
        id: 2,
        title: "Aenean vitae in aliquam ultricies lectus. Etiam.",
        excerpt:
          "Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu.",
        image: "/images/blog2.png",
      },
      {
        id: 3,
        title: "Sit nam congue feugiat nisl, mauris amet nisi.",
        excerpt:
          "Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur blandit mollis lacus. Nam quam nunc, blandit vel.",
        image: "/images/blog3.png",
      },
    ];
  
    return (
      <div className="container mx-auto px-4 lg:px-20 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {posts.map((post) => (
              <div key={post.id} className="mb-10 bg-white shadow rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href="#"
                    className="text-blue-600 font-medium hover:underline"
                   >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
  
          {/* Sidebar */}
         
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Search <HiOutlineMagnifyingGlass/> </h3>
              <input
                type="text"
                placeholder="Search..."
                className="w-full border rounded p-2"
              />
            </div>
  
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Categories</h3>
              <ul className="text-gray-600 space-y-2">
                {["Design", "Development", "Lifestyle", "Travel"].map(
                  (category, index) => (
                    <li key={index}>
                     <Link
                        href="#"
                        className="hover:text-blue-600 hover:underline"
                      >
                        {category}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
  
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
              <ul className="text-gray-600 space-y-2">
                {[
                  {title:"How to Use Tailwind CSS" , Image:"/images/blog4.png"},
                  {title:"Next.js vs React", Image:"/images/blog4.png"},
                  {title:"Design Inspirations for 2024", Image:"/images/blog4.png"},
                ].map((post, index) => (
                  <li key={index}>
                   <p>{post.title}</p>
                   <Image
                   src={post.Image}
                   alt={post.title}
                   width={100}
                   height={100}
                   ></Image>
                  </li>
                ))}
              </ul>
            </div>
  
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Sale Product</h3>
              <div className="grid grid-cols-2 gap-4">
                {["/images/blog10.png", "/images/blog9.png"].map(
                  (src, index) => (
                    <Image
                      key={index}
                      src={src}
                      alt="Product"
                      width={50}
                      height={50}
                      className="w-full h-20 object-cover rounded"
                    ></Image>
                  )
                )}
              </div>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "CSS", "Tailwind", "UI/UX"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 px-2 py-1 text-sm rounded cursor-pointer hover:bg-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
        </div>
      </div>
    );
  }
  