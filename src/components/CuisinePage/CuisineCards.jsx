import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Cuisinedishess = ({ data }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth <= 1024);
  const [visibleItems, setVisibleItems] = useState(3); // Show 3 items initially
  const [isExpanded, setIsExpanded] = useState(false);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth <= 768);
  };

  useEffect(() => {
    // Add event listener on mount
    window.addEventListener("resize", updateWindowWidth);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  // windowWidth && setVisibleItems(0);

  const handleToggleView = () => {
    if (isExpanded) {
      setVisibleItems(3);
    } else {
      setVisibleItems(data.length);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="max-w-7xl xl:mx-auto my-10">
        <div
          className={`${
            windowWidth
              ? "flex overflow-x-scroll gap-8 whitespace-nowrap mt-5 "
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 mx-auto mt-5"
          }  `}
        >
          {!windowWidth
            ? data.slice(0, visibleItems).map((dishes, index) => (
                <div key={index} className=" w-64 pb-1 md:pb-0 md:w-80 ">
                  <div className="flex h-56 overflow-hidden relative">
                    <img
                      className="h-full w-full object-cover aspect-[16/9] hover:scale-110 duration-700"
                      src="https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
                      alt={dishes.dishName}
                    />
                    <div
                      className={`font-semibold absolute top-0 left-0 ml-2 mt-2 text-white rounded-full flex items-center px-2 text-sm ${
                        dishes.type == "Veg" ? "bg-green-600" : "bg-red-500"
                      } `}
                    >
                      {dishes.type}
                    </div>
                  </div>
                  <div className="text-start mt-4">
                    <h2 className="text-xl font-bold">{dishes.dishName}</h2>
                    {/* <p className="line-clamp-2 text-slate-500 flex gap-2">{dishes.cityName} -<span>{dishes.duration}</span></p> */}
                    <div className="flex mt-4 h-[40px] ">
                      <div className="h-auto border-l-4 border-[#3B82F6]"></div>
                      <h5 className="text-sm pl-4 line-clamp-2 self-center">
                        {dishes.description}
                      </h5>
                    </div>
                    <div className="mt-4 justify-between flex items-center">
                      <Link
                        to={"cuisine-details"}
                        className="flex items-center text-blue-600 font-semibold group"
                      >
                        View More
                        <div className="pl-2 group-hover:translate-x-1 transition-transform duration-300">
                          <IoMdArrowRoundForward />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            : data.map((dishes, index) => (
                <div
                  key={index}
                  className=" w-64 pb-1 md:pb-0 md:w-80 relative"
                >
                  <div className="flex h-56 overflow-hidden">
                    <img
                      className="h-full w-full object-cover aspect-[16/9] hover:scale-200 duration-1000"
                      src="https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
                      alt={dishes.packageDestination}
                    />
                    <div
                      className={`font-semibold absolute top-0 left-0 ml-2 mt-2 text-white rounded-full flex items-center px-2 text-sm ${
                        dishes.type == "Veg" ? "bg-green-600" : "bg-red-500"
                      } `}
                    >
                      {dishes.type}
                    </div>
                  </div>
                  <div className="text-start mt-4">
                    <h2 className="text-xl font-bold">{dishes.dishName}</h2>
                    {/* <p className="line-clamp-2 text-slate-500 flex gap-2">{dishes.cityName} -<span>{dishes.duration}</span></p> */}
                    <div className="flex mt-4 h-[40px] ">
                      <div className="h-auto border-l-4 border-[#3B82F6]"></div>
                      <h5 className="text-sm pl-4 line-clamp-2 self-center">
                        {dishes.description}
                      </h5>
                    </div>
                    <div className="mt-8 justify-between flex items-center">
                      <Link
                        to={"culture-details"}
                        className="flex items-center text-blue-500 group"
                      >
                        View More
                        <div className="pl-2 group-hover:translate-x-1 transition-transform duration-300">
                          <IoMdArrowRoundForward />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        {!windowWidth && (
          <div className="flex justify-center mt-10">
            <a
              className="font-semibold text-lg cursor-pointer group relative transition-all duration-500 ease-in-out"
              onClick={handleToggleView}
            >
              {isExpanded ? "View Less" : "View More"}
              <div className="absolute left-0 right-0 bottom-0 h-[2px] rounded bg-blue-500 w-0 group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>
        )}
      </div>
    </>
  );
};

Cuisinedishess.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Cuisinedishess;
