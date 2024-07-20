import React, { useState } from "react";
import { PackagesData } from "../../../Data/StatesData/PackagesData";

function Packages() {
  const [visibleItems, setVisibleItems] = useState(4); // Show 4 items initially
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleView = () => {
    if (isExpanded) {
      setVisibleItems(4);
    } else {
      setVisibleItems(PackagesData.length);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto sm:px-10 ">
        <div className="flex justify-between items-center ">
          <h2 className="text-2xl font-bold text-center md:text-left">
            Best Selling Rajasthan Tour Packages
          </h2>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 sm:grid-cols-2 grid-cols-1 place-items-center transition-all duration-500">
          {PackagesData.slice(0, visibleItems).map((sell, index) => (
            <div key={index} className="h-48 w-60 mt-6">
              <div className="h-32 w-60">
                <img className="h-full w-full object-cover" src={sell.thumbnail} alt={sell.days} />
              </div>
              <h3 className="pt-4 text-gray-500 font-bold">{sell.days}</h3>
              <div className="flex mt-4">
                <div className="border-l-4 border-blue-500"></div>
                <p className="pt-2 ml-4">{sell.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-14">
          <button
            className="font-bold text-lg cursor-pointer relative transition-all duration-500 ease-in-out"
            onClick={handleToggleView}
          >
            {isExpanded ? "View Less" : "View More"}
            <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-blue-500 w-0 group-hover:w-full transition-all duration-300"></div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Packages;





