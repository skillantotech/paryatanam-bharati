const BlogSection = () => {
  const blogs = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1590602391165-edb096edb9de?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "January 30, 2024",
      title: "Top 10 Best Snow Destinations to Enjoy in Kashmir",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/23228024/pexels-photo-23228024/free-photo-of-photo-of-a-sailboat-on-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "November 3, 2023",
      title: "12 Top Tourist Destinations in Jammu and Kashmir",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/26926258/pexels-photo-26926258/free-photo-of-dubai-cityscape-behind-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "January 9, 2023",
      title:
        "Kashmir Witnesses Fresh Snowfall in Several Areas including Sonmarg, Gulmarg and Gurez Valley",
    },
  ];

  return (
    <div className="max-w-7xl mx-4 xl:mx-auto mt-12 mb-4">
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-2xl font-bold">
          Our Latest Informative Travel Blogs
        </h2>
        <button className="text-black hover:text-blue-600 font-bold text-lg cursor-pointer relative group transition-all duration-500 ease-in-out">
          View All Blog
          <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-blue-500 w-0 group-hover:w-full transition-all duration-300"></div>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className=" bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <div>
              <img
                src={blog.imgSrc}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-gray-500 text-lg">{blog.date}</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mt-2 hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
