import BlogDetails from "../components/BlogPage/BlogDetails";
import BlogHeader from "../components/BlogPage/BlogHeader";
import BlogShowcase from "../components/BlogPage/BlogShowcase";

const Blogs = () => {
  return (
    <>
     <BlogHeader />
     <BlogShowcase/>
     <div className="mt-10">
        <BlogDetails/>
     </div>
    </>
  );
};

export default Blogs;
