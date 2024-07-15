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
      <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start mb-5">
          <h2 className="text-2xl font-bold">
            Best Selling Rajasthan Tour Packages
          </h2>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-y-7 gap-x-10 place-items-center transition-all duration-500">
          {PackagesData.slice(0, visibleItems).map((sell, index) => (
            <div key={index} className="w-72">
              <div className="h-48 overflow-hidden">
                <img className="h-full w-full object-cover hover:scale-110 duration-300" src={sell.thumbnail} alt={sell.name} />
              </div>
              <div className="text-start mt-4">
                <h3 className="text-gray-500 font-bold">{sell.days}</h3>
                <div className="flex mt-4">
                  <div className="h-auto border-l-4 border-[#3B82F6]"></div>
                  <p className="pl-4">{sell.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <a
            className="font-bold text-lg cursor-pointer group relative transition-all duration-500 ease-in-out"
            onClick={handleToggleView}
          >
            {isExpanded ? "View Less" : "View More"}
            <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#3B82F6] w-0 group-hover:w-full transition-all duration-300"></div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Packages;



