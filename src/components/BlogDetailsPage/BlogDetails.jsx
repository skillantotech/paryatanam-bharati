import { Link, useParams } from "react-router-dom";
import { BlogData } from "../../Data/BlogsData/BlogData";
import LatestArticle from "./LatestArticle";
import { useEffect } from "react";
import { HiHome } from "react-icons/hi";
import BlogCommentsSection from "./BlogCommentsSection";

const BlogDetails = () => {
  const { Title } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogtoshow = BlogData.filter((e) => e.BlogTitle === `${Title}`);
  // console.log(blogtoshow);
  return (
    <div className="max-w-7xl xl:mx-auto mx-4">
      <div className="overflow-hidden flex flex-col gap-4 lg:flex-row">
        {blogtoshow.map((blog, i) => (
          <div
            key={`Blogdetails - ${i}`}
            className="max-w-5xl flex flex-col gap-5 py-5"
          >
            {/* Breadcrumbs */}
            <div className="flex flex-row items-center justify-start gap-2 text-base font-semibold text-blue-500">
              <Link
                to={"/"}
                className="item flex items-center gap-2 text-gray-500 hover:text-gray-700 duration-150"
              >
                <HiHome />
                Home
              </Link>
              /
              <Link
                to={"/blogs"}
                className="item text-gray-500 hover:text-gray-700 duration-150"
              >
                Blogs
              </Link>
              /
              <div className="item text-gray-900">
                <i>{blog.BlogTitle}</i> - {blog.BlogAuthor}
              </div>
            </div>
            {/* Breadcrumb Ends */}

            <div className="max-h-[700px] w-full rounded-md overflow-hidden">
              <img
                src={blog.BlogImage}
                alt=""
                className="w-full object-cover "
              />
            </div>
            <div className="text-2xl uppercase text-blue-600">
              {blog.BlogCategory}
            </div>

            <div className="flex flex-row items-center gap-2">
              <h6 className="flex gap-2 items-center ">
                <span className="text-xl">
                  <img
                    src={blog.BlogAuthorImage}
                    alt=""
                    className="h-10 w-10 object-cover rounded-full"
                  />
                </span>
                <span className="font-semibold text-lg">{blog.BlogAuthor}</span>
              </h6>
              &bull;
              <h6 className="text-sm">{blog.BlogDate}</h6>
            </div>

            <h2 className="text-3xl">{blog.BlogTitle}</h2>
            <p className="text-lg text-gray-700">{blog.BlogDescription}</p>
          </div>
        ))}
        <div>
          {blogtoshow.length > 0 && <LatestArticle data={blogtoshow} />}
        </div>
      </div>

      <BlogCommentsSection/>
    </div>
  );
};

export default BlogDetails;
