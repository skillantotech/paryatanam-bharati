import { useState, useEffect } from 'react';
import { Jodhpurothercarddata } from "../../../Data/StateDetailsData/Jodhpurothercarddata";
import { Carousel } from "flowbite-react";

const customTheme = {
  root: {
    base: "relative h-[300px] w-full", // Adjusted height
    leftControl:
      "absolute hidden md:flex left-4 top-[40%] transform -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white bg-opacity-30 border border-blue-500 hover:bg-blue-500 transition-all duration-300 ease-in-out",
    rightControl:
      "absolute hidden md:flex right-4 top-[40%] transform -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white bg-opacity-30 border border-blue-500 hover:bg-blue-500 transition-all duration-300 ease-in-out",
  },
  indicators: {
    active: {
      off: "bg-gray-500 hover:bg-gray-800 dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-black dark:bg-gray-800",
    },
    base: "h-3 w-3 rounded-full",
    wrapper:
      "absolute flex justify-center bottom-[5px] left-1/2 transform -translate-x-1/2 space-x-3 w-full",
  },
  item: {
    base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ease-in-out",
    wrapper: {
      off: "w-full flex-shrink-0 transform cursor-default snap-center",
      on: "w-full flex-shrink-0 transform cursor-grab snap-center",
    },
  },
  control: {
    base: "inline-flex h-10 w-10 hover:bg-blue-500 transition-all duration-300 ease-in-out border border-blue-500 items-center justify-center rounded-full bg-white bg-opacity-30 group-focus:outline-none group-active:scale-95 ease duration-300 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-blue-500 dark:text-blue-800 hover:text-white sm:h-6 sm:w-6",
  },
};

const OtherTravelPackages = () => {
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

  const chunkArray = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const cardsPerGroup = windowWidth <= 768 ? 1 : 4; // Adjust based on window width

  const groupedCards = chunkArray(Jodhpurothercarddata, cardsPerGroup);

  return (
    <div className="max-w-7xl mx-4 xl:mx-auto mt-6">
      <div>
        <h2 className="font-bold text-3xl text-left">
          Other Attractions in Jodhpur
        </h2>
      </div>

      <div className="">
        <Carousel theme={customTheme} slideInterval={2000} pauseOnHover>
          {groupedCards.map((group, index) => (
            <div key={index} className="flex justify-center gap-5 h-auto">
              {group.map((card, cardIndex) => (
                <div key={cardIndex} className="rounded-md w-80">
                  <div className="card-container h-72 w-full"> {/* Adjusted height */}
                    <div className="img-container">
                      <div className="relative group h-52 w-full">
                        <img
                          src={card.thumbnail}
                          alt=""
                          className="h-full w-full m-auto pt-2 shadow-2xl object-cover"
                        />
                      </div>
                      <div className="mt-3 font-bold text-md pb-3 text-left">
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

export default OtherTravelPackages;

