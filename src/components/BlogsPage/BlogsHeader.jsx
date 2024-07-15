import { Carousel } from "flowbite-react";
import { BlogData } from "../../Data/BlogsData/BlogData";
import { PiCalendarDots } from "react-icons/pi";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";

const customTheme = {
  root: {
    base: "relative h-full w-full",
    leftControl:
      "absolute hidden left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl:
      "absolute hidden right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
  },
  indicators: {
    active: {
      off: "bg-white/30 hover:bg-white ",
      on: "bg-white ",
    },
    base: "hidden sm:block h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  item: {
    base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: {
      off: "w-full flex-shrink-0 transform cursor-default snap-center",
      on: "w-full flex-shrink-0 transform cursor-grab snap-center",
    },
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x",
  },
};

const BlogsHeader = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap mx-auto lg:flex-nowrap max-w-7xl justify-evenly items-center gap-4 lg:px-2 ">
        <div className="flex flex-col text-center px-4 lg:px-0 justify-center gap-4 py-5">
          {/* Breadcrumbs */}
          <div className="flex flex-row items-center justify-start gap-2 text-base font-semibold text-blue-500">
            <Link to={"/"} className="item flex items-center gap-2 text-gray-500 hover:text-gray-700 duration-150">
              <HiHome />
              Home
            </Link>/
            <div className="item text-gray-900">Blogs</div>
          </div>
          {/* Breadcrumb Ends */}
          <h2 className="text-3xl sm:text-5xl font-semibold sm:font-bold">Read Exciting Articles</h2>
          <p className="lg:w-2/3 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            iusto ad dolor quisquam voluptatem voluptate aut possimus fuga atque
            eaque hic ipsum facilis illum necessitatibus.
          </p>
        </div>
        <div className="w-screen sm:max-w-screen-xl px-4 h-auto sm:h-[700px] mb-10">
          <Carousel
            theme={customTheme}
            slideInterval={2000}
            pauseOnHover
            className="shadow-lg sm:shadow-none"
          >
            {BlogData.map((e, i) => (
              <Link
                to={`/blogDetails/${e.BlogTitle}`}
                key={`Blog - ${i}`}
                className="flex flex-col sm:flex-row h-full w-full pb-1 border-black sm:text-white md:flex-row relative md:justify-center items-center"
              >
                <div className="h-[22.5rem] sm:h-full w-full overflow-hidden">
                  <img
                    src={e.BlogImage}
                    alt=""
                    className=" object-cover min-h-full sm:h-full sm:w-full"
                  />
                </div>
                <div className="sm:absolute flex flex-col sm:bg-black-tobottom gap-4 px-4 md:px-8 h-fit sm:h-full w-full sm:justify-end py-5 sm:py-10 ">
                  <h2 className="font-semibold text-2xl md:text-3xl line-clamp-2">
                    {e.BlogTitle}
                  </h2>
                  <p className="line-clamp-3 sm:line-clamp-1 text-lg ">
                    {e.BlogDescription}
                  </p>
                  <div className="flex flex-col-reverse sm:flex-row gap-4 justify-between sm:items-center">
                    {/* <button className=" shadow-md border backdrop-blur-sm sm:border-white p-3 sm:hover:bg-white sm:hover:text-black ease-linear duration-150">
                      Read More
                    </button> */}
                    <div className="flex flex-row sm:flex-col-reverse md:flex-row gap-x-4 gap-y-2">
                      <h6 className=" flex gap-2 items-center ">
                        <span className="text-xl">
                          <img
                            src={e.BlogAuthorImage}
                            alt=""
                            className="h-10 w-10 object-cover rounded-full"
                          />
                        </span>{" "}
                        {e.BlogAuthor}
                      </h6>
                      <h6 className=" flex gap-2 items-center ">
                        <span className="text-4xl">
                          <PiCalendarDots />
                        </span>{" "}
                        {e.BlogDate}
                      </h6>
                    </div>
                    <div className="flex flex-row gap-2 flex-wrap">
                      {e.BlogKeywords.map((tags, index) => {
                        return (
                          <div
                            key={`${e.BlogAuthor}-tag-${index}`}
                            className="text-sm text-white bg-blue-600 sm:bg-transparent sm:border-white border py-1 px-3 rounded-full"
                          >
                            {tags}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default BlogsHeader;
