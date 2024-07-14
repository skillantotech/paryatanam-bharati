import PropTypes from "prop-types";
import { BlogData } from "../../Data/BlogsData/BlogData";

const Article = ({ data }) => {
  return (
    <>
      <div className=" flex flex-col gap-4 lg:w-80 shadow-2xl p-4 lg:h-fit lg:my-6 rounded-xl">
        <h2 className="text-2xl font-medium">Latest Article</h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:flex flex-col gap-4">
          {BlogData.filter((e, i) => {
            return i < 5;
          }).map((blog, index) => (
            <div key={index} className="flex h-fit">
              <div className="min-w-fit  ">
                <img
                  className=" h-16 w-16 rounded-lg object-cover"
                  src={blog.BlogImage}
                  alt=""
                />
              </div>

              <div className="pl-4">
                <h1 className="font-semibold text-base ">{blog.BlogTitle}</h1>
                <p className="text-xs mt-2 ">{blog.BlogDate}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h4 className="text-2xl font-semibold">Tags</h4>
          <div className="flex flex-wrap gap-2 mt-4">
            {data[0].BlogKeywords.map((e, i) => (
              <button
                key={i}
                className="flex bg-blue-800 text-white p-2 px-4 rounded-full gap-2"
              >
                {e}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Article.propTypes = {
  data: PropTypes.array,
};

export default Article;
