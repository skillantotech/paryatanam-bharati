import { useState, useEffect } from 'react';
import { Rajastantravelcarddata } from "../../../Data/StateDetailsData/Rajastantravelcarddata";
import { Carousel } from "flowbite-react";

// This customTheme is for Flowbite
const customTheme = {
  root: {
    base: "relative h-[350px] w-full", // Adjusted height to match ExploreCard
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
    base: "inline-flex h-10 w-10 hover:bg-blue-500 transition-all duration-300 ease-in-out border border-blue-500 items-center justify-center rounded-full bg-white bg-opacity-30 group-focus:outline-none group-active:scale-95 ease duration-300 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-blue-500 dark:text-blue-800 hover:text-white sm:h-6 sm:w-6",
  },
};

// Function to chunk the array into groups
const chunkArray = (arr, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

const Rajastantravelcard = () => {
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

  const cardsPerGroup = windowWidth <= 460 ? 1 : windowWidth <= 1024 ? 3 : 5; // Adjust based on window width
  const groupedCards = chunkArray(Rajastantravelcarddata, cardsPerGroup);

  return (
    <div className="max-w-7xl mx-4 xl:mx-auto">
      <div>
        <h2 className="font-bold text-3xl text-center">Travel in Jodhpur</h2>
      </div>

      <div className="mt-10">
        <Carousel theme={customTheme} slideInterval={2000} pauseOnHover>
          {groupedCards.map((group, index) => (
            <div key={index} className="flex gap-5 h-full ">
              {group.map((card, cardIndex) => (
                <div key={cardIndex} className="relative w-full md:w-1/3 lg:w-1/5 group overflow-hidden ">
                  <img
                    src={card.thumbnail}
                    alt={card.headingname}
                    className="w-full h-[350px] rounded-lg object-cover transition-transform duration-500 group-hover:blur-[2px]"
                  />
                  <h3 className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl text-white font-bold">
                    {card.headingname}
                  </h3>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Rajastantravelcard;





