import { Jodhpurcarddata } from "../../../Data/StateDetailsData/Jodhpurcarddata";
import { Carousel } from "flowbite-react";
import { useState, useEffect } from "react";

// This customTheme is for Flowbite
const customTheme = {
  root: {
    base: "relative h-[300px] w-full", // Adjusted height
    leftControl:
      "absolute hidden md:flex left-4 top-1/2 transform -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white bg-opacity-30 border border-black hover:bg-blue-500 transition-all duration-300 ease-in-out",
    rightControl:
      "absolute hidden md:flex right-4 top-1/2 transform -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white bg-opacity-30 border border-black hover:bg-blue-500 transition-all duration-300 ease-in-out",
  },
  indicators: {
    active: {
      off: "bg-gray-500 hover:bg-gray-800 dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-black dark:bg-gray-800",
    },
    base: "h-3 w-3 rounded-full",
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

// Function to chunk the array into groups of a specified size
const chunkArray = (arr, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

const Jodhpurcard = () => {
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

  const jodhpurReview5 = chunkArray(Jodhpurcarddata, 5);
  const jodhpurReview3 = chunkArray(Jodhpurcarddata, 3);

  return (
    <div className="max-w-7xl mx-4 xl:mx-auto">
      <div>
        <h2 className="font-bold text-2xl text-left">Related Tour Packages</h2>
      </div>

      <div className="mt-5">
        <Carousel theme={customTheme} slideInterval={2000} pauseOnHover>
          {windowWidth <= 460
            ? chunkArray(Jodhpurcarddata, 1).map((group, index) => (
                <div
                  key={index}
                  className="flex justify-center gap-5 w-full h-96"
                >
                  {group.map((card, cardIndex) => (
                    <div key={cardIndex} className="rounded-md w-full mx-2 ">
                      <div className="card-container h-72 w-full shadow-md">
                        {" "}
                        {/* Adjusted height */}
                        <div className="img-container h-fit w-full">
                          <div className="relative group">
                            <img
                              src={card.thumbnail}
                              alt=""
                              className="h-full w-full m-auto hover:scale-110 transition-transform" // Adjusted height
                            />
                            <h2 className="absolute z-50 top-16 left-16 text-sm text-white font-bold">
                              <div className="p-2 rounded-2xl hover:bg-blue-700">
                                {card.contentname}
                              </div>
                            </h2>
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-1000"></div>
                          </div>
                          <div className="mt-1 text-sm font-bold text-gray-400">
                            {card.daysname}
                          </div>
                          <div className="mt-3 font-bold text-md pb-3">
                            {card.headingname}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            : windowWidth <= 1024
            ? jodhpurReview3.map((group, index) => (
                <div key={index} className="flex justify-center gap-5 h-auto">
                  {group.map((card, cardIndex) => (
                    <div key={cardIndex} className="rounded-md w-1/3 mx-2">
                      <div className="card-container h-72 w-full shadow-md">
                        {" "}
                        {/* Adjusted height */}
                        <div className="img-container h-fit w-full">
                          <div className="relative group">
                            <img
                              src={card.thumbnail}
                              alt=""
                              className="h-48 w-full m-auto hover:scale-110 transition-transform" // Adjusted height
                            />
                            <h2 className="absolute z-50 top-16 left-16 text-sm text-white font-bold">
                              <div className="p-2 rounded-2xl hover:bg-blue-700">
                                {card.contentname}
                              </div>
                            </h2>
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-1000"></div>
                          </div>
                          <div className="mt-3 text-sm font-bold text-gray-400">
                            {card.daysname}
                          </div>
                          <div className="mt-3 font-bold text-md">
                            {card.headingname}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            : jodhpurReview5.map((group, index) => (
                <div key={index} className="flex justify-center gap-5 h-auto">
                  {group.map((card, cardIndex) => (
                    <div key={cardIndex} className="rounded-md w-1/5 mx-2">
                      <div className="card-container h-72 w-full shadow-md">
                        {" "}
                        {/* Adjusted height */}
                        <div className="img-container h-fit w-full">
                          <div className="relative group">
                            <img
                              src={card.thumbnail}
                              alt=""
                              className="h-48 w-full m-auto hover:scale-110 transition-transform" // Adjusted height
                            />
                            <h2 className="absolute z-50 top-16 left-16 text-sm text-white font-bold">
                              <div className="p-2 rounded-2xl hover:bg-blue-700">
                                {card.contentname}
                              </div>
                            </h2>
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-1000"></div>
                          </div>
                          <div className="mt-3 text-sm font-bold text-gray-400">
                            {card.daysname}
                          </div>
                          <div className="mt-3 font-bold text-md">
                            {card.headingname}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Jodhpurcard;
