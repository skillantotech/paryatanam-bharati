import { VscArrowRight } from "react-icons/vsc";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const blogs = [
    {
      link: "",
      imgSrc:
        "https://images.unsplash.com/photo-1590602391165-edb096edb9de?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "January 30, 2024",
      title: "Top 10 Best Snow Destinations to Enjoy in Kashmir",
    },
    {
      link: "",
      imgSrc:
        "https://images.pexels.com/photos/23228024/pexels-photo-23228024/free-photo-of-photo-of-a-sailboat-on-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "November 3, 2023",
      title: "12 Top Tourist Destinations in Jammu and Kashmir",
    },
    {
      link: "",
      imgSrc:
        "https://images.pexels.com/photos/26926258/pexels-photo-26926258/free-photo-of-dubai-cityscape-behind-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "January 9, 2023",
      title:
        "Kashmir Witnesses Fresh Snowfall in Several Areas including Sonmarg, Gulmarg and Gurez Valley",
    },
  ];

  return (
    <div className="max-w-7xl mx-4 xl:mx-auto p-4 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">
            Our Latest Informative Travel Blogs
          </h2>
          <div className="view-tours">
            <button className="text-black hover:text-blue-600 font-bold text-lg cursor-pointer relative group transition-all duration-500 ease-in-out">
              View All Blog
              <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-blue-500 w-0 group-hover:w-full transition-all duration-300"></div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="blog-box bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <a href={blog.link}>
                <figure>
                  <img
                    src={blog.imgSrc}
                    alt="itinerary"
                    className="w-full h-48 object-cover"
                  />
                </figure>
              </a>
              <div className="p-4">
                <span className="text-gray-500 text-lg">{blog.date}</span>
                <a href={blog.link}>
                  <h3 className="text-xl font-semibold text-gray-800 mt-2 hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-8">
        <Link
          to="/blogs"
          onClick={() => window.scrollTo(0, 0)}
          className="group flex items-center font-semibold"
        >
          View More
          <div className="ps-2 group-hover:translate-x-2 transition-all duration-300 ease-out">
            <VscArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
