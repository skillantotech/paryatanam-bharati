import React,{useState} from "react";
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
      <div className="  max-w-7xl  mx-auto ">
        <div className="flex justify-between items-center place-items-center group p-2">
          <h2 className="text-2xl font-bold text-center md:text-left ">
            Best Selling Rajasthan Tour Packages
          </h2>
        </div>
        <div className="grid md:grid-cols-4 pt-5 gap-20 sm:grid-cols-2 grid-cols-1 place-items-center transition-all duration-500">
          {PackagesData.slice(0, visibleItems).map((sell, index) => (
            <div key={index} className="h-48 w-60">
              <div className="h-32 w-60">
                <img className="h-full w-full object-cover" src={sell.thumbnail} alt="" />
              </div>
              <h3 className="pt-4 text-gray-500 font-bold">{sell.days}</h3>
              <div className="flex mt-4">
                <div className="h-auto border-l-4 border-[#3B82F6]"></div>
                <p className="pt-2 ml-4">{sell.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-14">
          <a
            className="font-bold text-lg cursor-pointer group relative  transition-all duration-500 ease-in-out"
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
