import { useState } from "react";
import { placeList1, placeList2 } from "../../../Data/HeroBestPlaces";
import { Link } from "react-router-dom";

const MarqueeSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <div className="scrollbar-section w-full mt-4 flex flex-col gap-4">
      {/* Scrollbar 1 */}
      <div className="scrollbar-wrapper w-full flex flex-row justify-end flex-nowrap">
        {/* Original Scrollbar */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ animationPlayState: isHovered ? "paused" : "running" }}
          className="scrollbar flex items-center justify-center md:justify-end [&_a]:mx-6 animate-scrollX"
        >
          {placeList1.map((place, index) => (
            <Link
              to={"place-details"}
              key={index}
              className="scrollbar-image-container group relative h-24 lg:h-28 w-32 lg:w-36 transition-all duration-300 hover:scale-105 shadow-md shadow-slate-500 border-2 rounded-sm overflow-hidden"
            >
              <img
                className="w-full h-full object-cover aspect-[16/9] rounded-sm"
                src={place.src}
                alt="image"
              />
              <div className="visible group-hover:absolute inset-0 group-hover:bg-black/50 h-full text-white flex items-center justify-center">
                <div className={place.placeName.length > 20 ? "text-sm px-1" : "text-base"}>{place.placeName}</div>
              </div>
            </Link>
          ))}
        </div>
        {/* Duplicate Scrollbar */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ animationPlayState: isHovered ? "paused" : "running" }}
          className="scrollbar flex items-center justify-center md:justify-end [&_a]:mx-6 animate-scrollX"
        >
          {placeList1.map((place, index) => (
            <Link
              to={"place-details"}
              key={index}
              className="scrollbar-image-container group relative h-24 lg:h-28 w-32 lg:w-36 transition-all duration-300 hover:scale-105 shadow-md shadow-slate-500 border-2 rounded-sm overflow-hidden"
            >
              <img
                className="w-full h-full object-cover aspect-[16/9] rounded-sm"
                src={place.src}
                alt="image"
              />
              <div className="visible group-hover:absolute inset-0 group-hover:bg-black/50 h-full text-white flex items-center justify-center">
                <div className={place.placeName.length > 20 ? "text-sm px-1" : "text-base"}>{place.placeName}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Scrollbar2 */}
      <div className="scrollbar-wrapper w-full flex flex-row justify-start flex-nowrap">
        {/* Original Scrollbar */}
        <div
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          style={{ animationPlayState: isHovered2 ? "paused" : "running" }}
          className="scrollbar flex items-center justify-center md:justify-start [&_a]:mx-6 animate-reverseScrollX"
        >
          {placeList2.map((place, index) => (
            <Link
              to={"place-details"}
              key={index}
              className="scrollbar-image-container group relative h-24 lg:h-28 w-32 lg:w-36 transition-all duration-300 hover:scale-105 shadow-md shadow-slate-500 border-2 rounded-sm overflow-hidden"
            >
              <img
                className="w-full h-full object-cover aspect-[16/9] rounded-sm"
                src={place.src}
                alt="image"
              />
              <div className="visible group-hover:absolute inset-0 group-hover:bg-black/50 h-full text-white flex items-center justify-center">
                <div className={place.placeName.length > 20 ? "text-sm px-1" : "text-base"}>{place.placeName}</div>
              </div>
            </Link>
          ))}
        </div>
        {/* Duplicate Scrollbar */}
        <div
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          style={{ animationPlayState: isHovered2 ? "paused" : "running" }}
          className="scrollbar flex items-center justify-center md:justify-start [&_a]:mx-6 animate-reverseScrollX"
        >
          {placeList2.map((place, index) => (
            <Link
              to={"place-details"}
              key={index}
              className="scrollbar-image-container group relative h-24 lg:h-28 w-32 lg:w-36 transition-all duration-300 hover:scale-105 shadow-md shadow-slate-500 border-2 rounded-sm overflow-hidden"
            >
              <img
                className="w-full h-full object-cover aspect-[16/9] rounded-sm"
                src={place.src}
                alt="image"
              />
              <div className="visible group-hover:absolute inset-0 group-hover:bg-black/50 h-full text-white flex items-center justify-center">
                <div className={place.placeName.length > 20 ? "text-sm px-1" : "text-base"}>{place.placeName}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
