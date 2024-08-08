import { useEffect } from "react";
import BlogsHeader from "../../components/BlogsPage/BlogsHeader";
import BlogsShowcase from "../../components/BlogsPage/BlogsShowcase";
// import BlogsDetails from "../../components/BlogsPage/BlogsDetails";

const BlogsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BlogsHeader />
      <BlogsShowcase />
      {/* <BlogsDetails /> */}
    </>
  );
};

export default BlogsPage;
