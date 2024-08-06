import PropTypes from "prop-types";
import { PackagesList } from "../../../Data/PackagesData/PackagesList";
// import { VscChevronRight } from "react-icons/vsc";
import { Link } from "react-router-dom";

const PackagesStateWise = ({ stateName }) => {
  const filterData = PackagesList[0].packageState.filter(
    (e) => e.stateName == stateName
  );

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-x-8 gap-y-10 mx-auto mt-5">
      {filterData[0].packageCity.map((card, index) => (
        <Link
          to={"package-details"}
          key={index}
          className="grid md:w-80 overflow-hidden group"
        >
          <div className="flex h-56 overflow-hidden">
            <img
              className="h-full w-full object-cover aspect-[16/9] group-hover:scale-105 duration-500 ease-in-out"
              src={card.destinationImage}
              alt={card.packageDestination}
            />
          </div>
          <div className="text-start mt-4">
            <h2 className="text-xl font-bold">{card.packageDestination}</h2>
            <p className="line-clamp-2 text-slate-500 flex gap-2">
              {card.cityName} -<span>{card.duration}</span>
            </p>
            <div className="flex mt-4 h-[40px] ">
              <div className="h-auto border-l-4 border-[#3B82F6]"></div>
              <h5 className="text-sm pl-4 line-clamp-2 self-center">
                {card.headline}
              </h5>
            </div>
            {/* <div className="flex mt-8 justify-between items-center">
              <Link className="font-semibold  bg-[#3B82F6] text-white rounded-full flex px-4 py-1 hover:bg-blue-700 transition-colors duration-300">
                ₹{card.packagePrice}
              </Link>
              <button className="flex items-center text-blue-500 group">
                View More
                <div className="pl-2 group-hover:translate-x-1 transition-transform duration-300">
                  <VscChevronRight className="size-5" />
                </div>
              </button>
            </div> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

PackagesStateWise.propTypes = {
  stateName: PropTypes.string,
};

export default PackagesStateWise;
