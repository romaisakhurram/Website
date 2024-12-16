
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
                  width={100}
                  height={100}
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
           <aside>
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Search  </h3>
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
              <h3 className="text-lg font-semibold font-serif mb-3">Recent Post</h3>
              <ul className=" space-y-2">
                {[
                  {title:"It is long established fact" , Date:"Aug 09 2020" , Image:"/images/blog10.png"},
                  {title:"It is long established fact", Date:"Aug 09 2020" , Image:"/images/blog4.png"},
                  {title:"It is long established fact", Date:"Aug 09 2020" , Image:"/images/blog5.png"},
                  {title:"It is long established fact", Date:"Aug 09 2020" , Image:"/images/blog6.png"},
                ].map((post, index) => (
                  <li key={index} className="flex gap-5">
                   <Image
                   src={post.Image}
                   alt={post.title}
                   width={100}
                   height={100}
                   ></Image>
                  <div className="mt-2 font-serif">
                    <p className="text-blue-950">{post.title}</p>
                    <p className="text-gray-400">{post.Date}</p>
                  </div>
                </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold font-serif mb-3">Sale Product</h3>
              <ul className="space-y-2">
                {[
                  {title:"Elit ornare in enim mauris." , Date:"Aug 09 2020" , Image:"/images/blog7.png"},
                  {title:"Viverra pulvinar et enim.", Date:"Aug 09 2020" , Image:"/images/blog8.png"},
                  {title:"Mattis varius donec fdsfd", Date:"Aug 09 2020" , Image:"/images/blog9.png"},
                ].map((post, index) => (
                  <li key={index} className="flex gap-5">
                   <Image
                   src={post.Image}
                   alt={post.title}
                   width={100}
                   height={100}
                   ></Image>
                   <div className="mt-2 font-serif">
                      <p className="text-blue-950">{post.title}</p>
                      <p className="text-gray-400">{post.Date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
  
            <div className="mb-8">
              <h3 className="text-lg font-semibold font-serif mb-3">Offer Product</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {title:"Duis lectus est.", price:"$12.00 - $15.00" , Image:"/images/blog13.png"}, 
                  {title:"Sed placerat." , price:"$12.00 - $15.00" , Image:"/images/product1.png"},
                  {title:"Netus Proin", price:"$12.00 - $15.00"  , Image:"/images/blog11.png"},
                  {title:"Platea in.", price:"$12.00 - $15.00" , Image:"/images/blog12.png"},
                ].map(
                  (src, index) => (
                   <div>
                      <Image
                      key={index}
                      src={src.Image}
                      alt="Product"
                      width={80}
                      height={80}
                      className="w-20 h-20 object-cover rounded"
                      ></Image>
                      <p className="text-md text-blue-950 font-serif">{src.title}</p>
                      <p className="text-gray-400 text-sm font-serif">{src.price}</p>
                    </div>
                  ))}
              </div>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["General", "Insas", "Atsanil", "Bibsaas", "Nulla"].map((tag) => (
                  <span
                    key={tag}
                    className="text-blue-950 px-2 py-1 text-lg underline underline-offset-1 rounded cursor-pointer hover:text-pink-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  }
  