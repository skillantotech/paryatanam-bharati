import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function BlogsShowcaseCards({ filteredPageData }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 mt-6 mx-4 ">
      {filteredPageData.map((blog, index) => (
        <Link
          to={`/blogDetails/${blog.BlogTitle}`}
          // to={`/blogDetails/${blog.BlogTitle.replace(/\s+/g, "-").replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`}
          key={`Blog-no-${index}`}
          className="max-w-sm shadow-xl  rounded-xl "
        >
          <div className=" rounded-2xl flex-grow">
            <img
              src={blog.BlogImage}
              alt=""
              className="h-60 w-full object-cover rounded-t-xl"
            />
          </div>

          <div>
            <h1 className="font-bold   p-4 pb-2">{blog.BlogTitle}</h1>
            <p className="pl-4 line-clamp-3 leading-6 pr-4">
              {blog.BlogDescription}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 m-4">
            <div className=" gap-2 items-center flex ">
              <img
                src={blog.BlogAuthorImage}
                alt=""
                className="h-11 w-11 object-cover rounded-full "
              />
              <div className="">
                <h1 className=" font-medium">{blog.BlogAuthor}</h1>
                <p>{blog.BlogDate}</p>
              </div>
            </div>

            <button className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded-full">
              Read More
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

BlogsShowcaseCards.propTypes = {
  filteredPageData: PropTypes.array,
};

export default BlogsShowcaseCards;
