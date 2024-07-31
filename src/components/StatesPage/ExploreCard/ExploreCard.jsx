import { Explorecarddata } from "../../../Data/StatesData/Explorecarddata";
import { Carousel } from "flowbite-react";
import { useState, useEffect } from "react";

// This customTheme is for Flowbite
const customTheme = {
  root: {
    base: "relative h-[200px] w-full",
    leftControl:
      "absolute hidden md:flex right-24 top-[-150px] flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl:
      "absolute hidden md:flex right-12 top-[-150px] flex h-full items-center justify-center px-4 focus:outline-none",
  },
  indicators: {
    active: {
      off: "bg-gray-500 hover:bg-gray-800 dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-black dark:bg-gray-800",
    },
    base: " h-3 w-3 rounded-full",
    wrapper:
      "absolute flex justify-center bottom-[-40px] left-1/2 transform -translate-x-1/2 space-x-3 w-full",
  },
  item: {
    base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ease-in-out",
    wrapper: {
      off: "w-full flex-shrink-0 transform cursor-default snap-center",
      on: "w-full flex-shrink-0 transform cursor-grab snap-center",
    },
  },
  control: {
    base: "inline-flex h-10 w-10 hover:bg-blue-500 transition-all duration-300 ease-in-out border border-black items-center justify-center rounded-full bg-white bg-opacity-30 group-focus:outline-none group-active:scale-95 ease duration-300 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-black dark:text-gray-800 sm:h-6 sm:w-6",
  },
};

// Function to chunk the array into groups of five objects
const chunkArray = (arr, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

const ExploreCard = () => {
  const exploreReview5 = chunkArray(Explorecarddata, 5);
  const exploreReview3 = chunkArray(Explorecarddata, 3);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener on mount
    window.addEventListener("resize", updateWindowWidth);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <section className="relative mt-12 max-w-7xl mx-4 xl:mx-auto mb-20">
      <header className="flex flex-col gap-2 mb-10">
        <h1 className="text-2xl font-bold text-gray-900">
          Rajasthan Tour Packages by Interest
        </h1>
      </header>
      <div className="w-full">
        <Carousel theme={customTheme} slideInterval={2000} pauseOnHover>
          {windowWidth <= 460
            ? chunkArray(Explorecarddata, 1).map((group, index) => (
                <div key={index} className="flex gap-5 h-full">
                  {group.map((item) => (
                    <div
                      key={item.id}
                      className="w-full md:w-1/2 lg:w-1/5 relative"
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.tourname}
                        className="w-full h-[200px] object-cover rounded-lg"
                      />
                      <div className="absolute top-0 left-0 w-full h-[200px] flex items-center justify-center bg-transparent rounded-lg transition-colors duration-300 hover:bg-black/50">
                        <h3 className="text-2xl text-white font-bold text-center">
                          {item.tourname}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            : windowWidth <= 1024
              ? exploreReview3.map((group, index) => (
                <div key={index} className="flex gap-5 h-full">
                  {group.map((item) => (
                    <div
                      key={item.id}
                      className="w-full md:w-1/2 lg:w-1/5 relative"
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.tourname}
                        className="w-full h-[200px] object-cover rounded-lg"
                      />
                      <div className="absolute top-0 left-0 w-full h-[200px] flex items-center justify-center bg-transparent rounded-lg transition-colors duration-300 hover:bg-black/50">
                        <h3 className="text-2xl text-white font-bold text-center">
                          {item.tourname}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            : exploreReview5.map((group, index) => (
                <div key={index} className="flex gap-5 h-full">
                  {group.map((item) => (
                    <div
                      key={item.id}
                      className="w-full md:w-1/2 lg:w-1/5 relative"
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.tourname}
                        className="w-full h-[200px] object-cover rounded-lg"
                      />
                      <div className="absolute top-0 left-0 w-full h-[200px] flex items-center justify-center bg-transparent rounded-lg transition-colors duration-300 hover:bg-black/50">
                        <h3 className="text-2xl text-white font-bold text-center">
                          {item.tourname}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ExploreCard;
