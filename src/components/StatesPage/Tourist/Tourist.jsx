import { useState } from "react";
import { TouristData } from "../../../Data/StatesData/TouristData";
import { Link } from "react-router-dom";
// import { VscArrowRight } from "react-icons/vsc";

function Tourist() {
  const [visibleItems, setVisibleItems] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleView = () => {
    if (isExpanded) {
      setVisibleItems(3);
    } else {
      setVisibleItems(TouristData.length);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="max-w-7xl mx-4 xl:mx-auto mt-7">
        <h2 className="font-bold text-2xl text-left mx-4 xl:mx-auto">
          Popular Tourist Attractions in Rajasthan
        </h2>
      </div>
      <div className="max-w-7xl mx-4 xl:mx-auto mt-5 transition-all duration-500 ease-in-out">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {TouristData.slice(0, visibleItems).map((tour, index) => (
            <Link
              to={"place-details"}
              key={index}
              className="h-[400px] w-auto max-w-md mx-auto overflow-hidden transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <div className="relative h-60 w-auto overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-opacity duration-500 ease-in-out hover:opacity-90"
                  src={tour.thumbnail}
                  alt=""
                />
              </div>
              <div className="bg-white">
                <h3 className="text-xl font-bold py-4">{tour.placename}</h3>
                <div className="border-l-4 border-blue-500">
                  <p className="text-gray-700 px-3 py-2 line-clamp-3">{tour.desc}</p>
                </div>
                {/* <button className="flex items-center text-orange-600 font-bold hover:text-orange-900">
                  {tour.button}
                  <VscArrowRight className="ml-2" />
                </button> */}
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="font-semibold text-lg cursor-pointer group relative transition-all duration-500 ease-in-out"
            onClick={handleToggleView}
          >
            {isExpanded ? "View Less" : "View More"}
            <div className="absolute left-0 right-0 bottom-0 h-[2px] rounded bg-blue-500 w-0 group-hover:w-full transition-all duration-300"></div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Tourist;


