import { ImageData } from "../data/ImageData.js";
import { Carousel } from "flowbite-react";

// This customTheme is for Flowbite
const customTheme = {
  root: {
    base: "relative h-full w-full",
    leftControl:
      "absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center px-4 focus:outline-none",
    rightControl:
      "absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center px-4 focus:outline-none",
  },
  indicators: {
    active: {
      off: "bg-gray-500 hover:bg-gray-800 dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-black dark:bg-gray-800",
    },
    base: "h-3 w-3 rounded-full",
    wrapper:
      "absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 space-x-3",
  },
  item: {
    base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: {
      off: "w-full flex-shrink-0 transform cursor-default snap-center",
      on: "w-full flex-shrink-0 transform cursor-grab snap-center",
    },
  },
  control: {
    base: "inline-flex h-10 w-10 border border-black items-center justify-center rounded-full bg-white bg-opacity-30 group-focus:outline-none group-active:scale-95 ease duration-300 sm:h-10 sm:w-10",
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

const Slider = () => {
  const imageReview = chunkArray(ImageData, 5);

  return (
    <section className="relative mt-12 mb-24 max-w-7xl mx-4 xl:mx-auto">
      <header className="flex flex-col gap-2 mb-10">
        <h3 className="text-lg uppercase tracking-wider text-gray-600">
          Where To Go
        </h3>
        <h1 className="text-3xl font-bold text-gray-900 uppercase">
          Top Destination
        </h1>
      </header>
      <div className="slider relative w-full h-96 sm:h-120 overflow-hidden">
        <Carousel theme={customTheme} slideInterval={2000} pauseOnHover>
          {imageReview.map((group, index) => (
            <div key={index} className="flex gap-5 h-full">
              {group.map((item) => (
                <div key={item.id} className="flex-shrink-0 w-1/5 relative">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="overlay absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-between bg-gradient-to-t from-black via-black/60 to-transparent rounded-lg">
                    <button className="btn explore-now-btn px-4 py-2 bg-blue-600 text-white text-sm uppercase rounded-full hover:bg-green-700">
                      Explore Now
                    </button>
                    <div className="destination-desc text-left text-white">
                      <h3 className="text-2xl">{item.title}</h3>
                      <p className="text-sm">{item.location}</p>
                    </div>
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
export default Slider;
