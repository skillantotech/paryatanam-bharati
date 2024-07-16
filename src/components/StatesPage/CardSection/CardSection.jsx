import React, { useState } from "react";
import { Data } from "../../../Data/StatesData/Data";
import { VscChevronRight } from "react-icons/vsc";

const CardSection = () => {
  const [visibleItems, setVisibleItems] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleView = () => {
    if (isExpanded) {
      setVisibleItems(3);
    } else {
      setVisibleItems(Data.length);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="flex justify-start max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold text-2xl pl-12">
          Best Places to Visit in Rajasthan
        </h2>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-y-7 gap-x-10 max-w-7xl place-items-center mx-auto mt-5 px-4 sm:px-8 md:px-10 lg:px-10">
        {Data.slice(0, visibleItems).map((card, index) => (
          <div key={index} className="h-96 w-72">
            <div className="h-56 overflow-hidden">
              <img
                className="h-full w-full object-cover hover:scale-110 duration-300"
                src={card.thumbnail}
                alt={card.name}
              />
            </div>
            <div className="text-start mt-4">
              <h2 className="text-xl font-bold">{card.name}</h2>
              <div className="flex mt-4">
                <div className="h-auto border-l-4 border-[#3B82F6]"></div>
                <h5 className="text-sm pl-4 line-clamp-2">{card.desc}</h5>
              </div>
              <div className="mt-8 flex justify-between items-center">
                <h3 className="font-semibold bg-[#3B82F6] text-white rounded-2xl text-center px-4 py-1 hover:bg-blue-700 transition-colors duration-300">
                  {card.about}
                </h3>
                <button className="flex items-center text-blue-500 group">
                  {card.learn}
                  <div className="pl-2 group-hover:translate-x-1 transition-transform duration-300">
                    <VscChevronRight className="size-5" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <a
          className="font-bold text-lg cursor-pointer group relative transition-all duration-500 ease-in-out"
          onClick={handleToggleView}
        >
          {isExpanded ? "View Less" : "View More"}
          <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#3B82F6] w-0 group-hover:w-full transition-all duration-300"></div>
        </a>
      </div>
    </>
  );
};

export default CardSection;
