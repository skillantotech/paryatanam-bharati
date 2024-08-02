import { useState } from "react";
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
      <div className="flex justify-start max-w-7xl xl:mx-auto mx-4 mt-20">
        <h2 className="font-bold text-2xl">
          Best Places to Visit in Rajasthan
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-y-7 gap-x-10 place-items-center mt-5 sm:px-8 md:px-10 lg:px-10">
        {Data.slice(0, visibleItems).map((card, index) => (
          <div key={index} className="h-96 w-80 group">
            <div className="h-56 overflow-hidden">
              <img
                className="h-full w-full object-cover group-hover:scale-105 duration-300"
                src={card.thumbnail}
                alt={card.name}
              />
            </div>
            <div className="text-start mt-4">
              <h2 className="text-xl font-bold">{card.name}</h2>
              <div className="flex mt-4">
                <div className="h-auto border-l-4 border-blue-500"></div>
                <h5 className="text-sm pl-4 line-clamp-2">{card.desc}</h5>
              </div>
              <div className="mt-8 flex justify-between items-center">
                <h3 className="font-semibold bg-blue-500 text-sm text-white rounded-2xl text-center px-4 py-1 hover:bg-blue-600 transition-colors duration-300">
                  {card.about}
                </h3>
                <button className="flex items-center font-semibold text-blue-500 group">
                  Explore
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
          className="font-semibold text-lg cursor-pointer group relative transition-all duration-500 ease-in-out"
          onClick={handleToggleView}
        >
          {isExpanded ? "View Less" : "View More"}
          <div className="absolute left-0 right-0 bottom-0 h-[2px] rounded bg-blue-500 w-0 group-hover:w-full transition-all duration-300"></div>
        </a>
      </div>
    </>
  );
};

export default CardSection;
