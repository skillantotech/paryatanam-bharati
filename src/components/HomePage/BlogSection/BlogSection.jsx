import { VscArrowRight } from "react-icons/vsc";
import { LatestBlogs } from "../../../Data/LatestBlogs";
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <div className="max-w-7xl mx-4 xl:mx-auto mt-12">
      <h5 className="pb-2 font-medium uppercase tracking-wider">
        Travel Insights
      </h5>
      <h2 className="text-3xl font-bold pb-4">
        Discover the wonders of India through our blog posts
      </h2>
      <h5 className="mb-10">
        Explore captivating stories and tips from around the world
      </h5>

      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-10 sm:gap-y-14">
        {LatestBlogs.map((blog, index) => (
          <div
            key={index}
            className="blogItem flex flex-col sm:flex-row items-center gap-4"
          >
            <div className="h-60 aspect-[3/4] bg-slate-300 rounded">
              <img
                className="h-full w-full object-cover rounded"
                src={blog.thumbnail}
                alt="thumbnail"
              />
            </div>
            <div className="text-center sm:text-left flex flex-col gap-2 sm:gap-4">
              <h5 className="text-base">{blog.blogType}</h5>
              <h2 className="text-xl sm:text-3xl font-bold">
                {blog.headline}
              </h2>
              <h5>{blog.desc}</h5>
              <div className="flex justify-center sm:justify-start">
                <img
                  className="h-12 w-12 rounded-full"
                  src={blog.authorPhoto}
                  alt=""
                />
                <div className="pl-3 text-left">
                  <h5>{blog.authorName}</h5>
                  <h5>
                    {blog.timeStamp} &bull; {blog.readTime}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

        <div className="flex justify-center items-center mt-8">
        <Link to="/blogs" className="group flex items-center font-semibold">
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
