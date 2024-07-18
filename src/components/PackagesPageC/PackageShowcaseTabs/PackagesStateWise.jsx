import React from "react";
import { PackagesList } from "../../../Data/PackagesData/PackagesList";
import { VscChevronRight } from "react-icons/vsc";
import { Link } from "react-router-dom";

const PackagesStateWise = ({stateName}) => {

  const filterData = PackagesList[0].packageState.filter(
    (e) => e.stateName == stateName
  );

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 mx-auto mt-5  ">
      {filterData[0].packageCity.map((card, index) => (
        <div key={index} className=" md:w-80 ">
          <div className="flex h-56 overflow-hidden">
            <img
              className="h-full w-full object-cover aspect-[16/9] hover:scale-110 duration-300"
              src={card.destinationImage}
              alt={card.packageDestination}
            />

          </div>
          <div className="text-start mt-4">
            <h2 className="text-xl font-bold">{card.packageDestination}</h2>
            <p className="line-clamp-2 text-slate-500 flex gap-2">{card.cityName} -<span>{card.duration}</span></p>
            <div className="flex mt-4 h-[40px] ">
              <div className="h-auto border-l-4 border-[#3B82F6]"></div>
              <h5 className="text-sm pl-4 line-clamp-2 self-center">{card.headline}</h5>
            </div>
            <div className="mt-8 flex justify-between items-center">
              <Link className="font-semibold bg-[#3B82F6] text-white rounded-full flex  px-4 py-1 hover:bg-blue-700 transition-colors duration-300">
                ₹{card.packagePrice}
              </Link>
              <button className="flex items-center text-blue-500 group">
                View More
                <div className="pl-2 group-hover:translate-x-1 transition-transform duration-300">
                  <VscChevronRight className="size-5" />
                </div>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackagesStateWise;
