import Image from "next/image"
export default function Blog () {
  const blogs = [
    {
      title: "Design Trends 2024",
      code: "Blog - D2024",
      description: "Exploring the latest design trends for the upcoming year.",
      image: "/images/cart1.png", // Replace with actual image paths
    },
    {
      title: "Minimalist Interiors",
      code: "Blog - M2024",
      description: "Tips to achieve a clean and clutter-free home.",
      image: "/images/cart2.png",
    },
    {
      title: "Smart Home Gadgets",
      code: "Blog - S2024",
      description: "Top gadgets to upgrade your home automation.",
      image: "/images/cart3.png",
    },
  ];

  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Latest Blog
        </h2>
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ml-10 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition duration-300"
              style={{ height: "300px", width:"300px" }} // Optional height for consistent card size
            >
              <div className="w-[260px] h-40 flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={400}
                  className="object-contain w-[300px] h-[260px]"
                ></Image>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500">{blog.code}</p>
                <p className="text-sm text-gray-600 mt-2">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
