import { useParams } from "react-router-dom";
import { BlogData } from "./BlogData";
import Article from "./Article";
import { useEffect } from "react";

const BlogDetails = () => {
  const { Title } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogtoshow = BlogData.filter((e) => e.BlogTitle == `${Title}`);
  // console.log(blogtoshow);
  return (
    <div className="max-w-7xl mx-auto overflow-hidden flex flex-col gap-4 lg:flex-row px-4">
      {blogtoshow.map((blog, i) => (
        <div
          key={`Blogdetails - ${i}`}
          className="max-w-5xl flex flex-col gap-5 py-5"
        >
          <div className="text-lg">Home / Blogs / {blog.BlogAuthor}</div>
          <div className="max-h-[700px] w-full rounded-md overflow-hidden">
            <img src={blog.BlogImage} alt="" className="w-full object-cover " />
          </div>
          <div className="text-2xl uppercase text-blue-800">
            {blog.BlogCategory}
          </div>
          <h2 className="text-3xl">{blog.BlogTitle}</h2>
          <p className="text-lg text-gray-700">{blog.BlogDescription}</p>
        </div>
      ))}
      <div>
        {blogtoshow.length>0 && <Article data={blogtoshow}/>}
      </div>
    </div>
  );
};

export default BlogDetails;
