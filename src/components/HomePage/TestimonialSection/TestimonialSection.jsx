import { FaQuoteLeft } from "react-icons/fa";
import ProfileLogo from "../../../assets/images/why-choose-us/pexels-rahul-dogra-1439977-2779325.jpg";
import { CustomerData } from "../../../Data/TestimonialData";
import { Carousel } from "flowbite-react";
import { useState, useEffect } from "react";

// This customTheme is for flowbite
const customTheme = {
  root: {
    base: "h-full relative w-full",
    leftControl:
      "absolute left-1/2 -translate-x-[65px] lg:left-[86.5%] lg:-translate-x-[0px] bottom-[-53px] flex items-center justify-center px-4 focus:outline-none",
    rightControl:
      "absolute right-1/2 translate-x-[65px] lg:left-[93%] lg:translate-x-[0px] bottom-[-53px] flex items-center justify-center px-4 focus:outline-none",
  },
  indicators: {
    active: {
      off: "bg-gray-500 hover:bg-gray-800 dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-black dark:bg-gray-800",
    },
    base: "h-3 w-3 rounded-full",
    wrapper:
      "hidden lg:flex absolute bottom-[5px] sm:bottom-[-40px] left-1/2 sm:left-14 flex -translate-x-1/2 space-x-3",
  },
  item: {
    base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: {
      off: "w-full flex-shrink-0 transform cursor-default snap-center",
      on: "w-full flex-shrink-0 transform cursor-grab snap-center",
    },
  },
  control: {
    base: "inline-flex h-10 w-10 border border-black items-center justify-center rounded-full bg-white/30 group-focus:outline-none group-active:scale-95 ease duration-300 sm:h-10 sm:w-10",
    icon: "h-5 w-10 text-black rounded-full dark:text-gray-800 sm:h-6 sm:w-6",
  },
};

// Function to chunk the array into groups of two objects
const chunkArray = (arr, chunkSize) => {
  const customerReview = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    customerReview.push(arr.slice(i, i + chunkSize));
  }
  // console.log(customerReview);
  return customerReview;
};

const TestimonialSection = () => {
  const customerReview = chunkArray(CustomerData, 2);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth <= 1024);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth <= 1024);
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
    <section className="relative mt-12 mb-24 max-w-7xl mx-4 xl:mx-auto">
      <div className="flex w-full items-center lg:items-start flex-col gap-2">
        <h2 className="font-medium uppercase tracking-wider">
          Customer Testimonials
        </h2>
        <p className=" text-center lg:text-left bg-clip-text inline-flex font-bold text-3xl sm:text-4xl">
          Read what our satisfied customers have to say
        </p>
      </div>

      <div className="relative ">
        <Carousel
          theme={customTheme}
          slideInterval={3000}
          pauseOnHover
          className="max-[440px]:h-[420px] h-[350px] mt-3 sm:h-80"
        >
          {windowWidth
            ? CustomerData.map((e, i) => (
                <div
                  key={`0${i}`}
                  className="flex gap-5 justify-center h-full p-2"
                >
                  <div
                    key={`Review-${i}`}
                    className="flex flex-col p-5 sm:p-6 max-w-[750px] h-full shadow-md rounded-lg justify-between relative"
                  >
                    <span className="absolute left-6 opacity-90 text-5xl">
                      <FaQuoteLeft />
                    </span>
                    <p className=" mt-16 overflow-hidden sm:h-auto text-lg sm:text-xl sm:mt-16 line-clamp-[7] sm:line-clamp-none">
                      {e.comment}
                    </p>
                    <div className="flex flex-col ml-14 mt-3 relative">
                      <div className="absolute h-12 w-12 rounded-full overflow-hidden border-2 border-gray-300 -left-[57px]">
                        <img src={ProfileLogo} alt="" className="" />
                      </div>
                      <h2 className="text-lg font-semibold">{e.name}</h2>
                      <div className="mb-0 relative">
                        {e.location}
                        {/* <span className="absolute left-0 bottom-1">
                      <FaLocationDot />
                    </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : customerReview.map((element, index) => (
                <div key={index} className="flex gap-5">
                  {element.map((obj, i) => (
                    <div
                      key={`Review-${i}`}
                      className="flex flex-col p-6 w-[600px] border justify-between relative"
                    >
                      <div className="absolute h-12 w-12 rounded-full overflow-hidden border-2 border-gray-300 left-6 bottom-7">
                        <img src={ProfileLogo} alt="" className="" />
                      </div>
                      <span className="absolute left-6 opacity-90 sm:text-5xl">
                        <FaQuoteLeft />
                      </span>
                      <p className=" text-xl mt-14 ">{obj.comment}</p>
                      <div className="flex flex-col ml-14 mt-5">
                        <h2 className="text-xl">{obj.name}</h2>
                        <div className="relative ">
                          {obj.location}
                          {/* <span className="absolute left-0 bottom-1">
                      <FaLocationDot />
                    </span> */}
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

export default TestimonialSection;
