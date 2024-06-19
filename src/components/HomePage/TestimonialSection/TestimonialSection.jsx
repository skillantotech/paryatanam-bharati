import { FaQuoteLeft } from "react-icons/fa";
import ProfileLogo from "../../../assets/images/why-choose-us/pexels-rahul-dogra-1439977-2779325.jpg";
import { CustomerData } from "../../../Data/TestimonialData";
import { Carousel } from "flowbite-react";

// This customTheme is for flowbite
const customTheme = {
  root: {
    base: "relative h-full w-full",
    leftControl:
      "absolute right-24 bottom-[-200px] flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl:
      "absolute right-12 bottom-[-200px] flex h-full items-center justify-center px-4 focus:outline-none",
  },
  indicators: {
    active: {
      off: "bg-gray-500 hover:bg-gray-800 dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-black dark:bg-gray-800",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-[-40px] left-14 flex -translate-x-1/2 space-x-3",
  },
  item: {
    base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: {
      off: "w-full flex-shrink-0 transform cursor-default snap-center",
      on: "w-full flex-shrink-0 transform cursor-grab snap-center",
    },
  },
  control: {
    base: "inline-flex h-10 w-10 border border-black  items-center justify-center rounded-full bg-white/30 group-focus:outline-none group-active:scale-95 ease duration-300 sm:h-10 sm:w-10",
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

  return (
    <section className="relative mt-12 mb-24 max-w-7xl mx-4 xl:mx-auto">
      <div className="flex flex-col gap-2">
        <h2 className="font-medium uppercase tracking-wider">
          Customer Testimonials
        </h2>
        <p className="w-full bg-clip-text font-bold text-3xl sm:text-4xl">
          Read what our satisfied customers have to say
        </p>
      </div>

      <div className="mt-10 h-56 sm:h-64 xl:h-80 2xl:h-80">
        <Carousel theme={customTheme} slideInterval={3000} pauseOnHover>
          {customerReview.map((element, index) => (
            <div key={index} className="flex gap-5 h-full">
              {element.map((obj, i) => (
                <div
                  key={`Review-${i}`}
                  className="flex flex-col p-6 w-[600px] h-full border justify-between relative"
                >
                  <div className="absolute h-12 w-12 rounded-full overflow-hidden border-2 border-gray-300 left-5 bottom-6">
                    <img src={ProfileLogo} alt="" className="" />
                  </div>
                  <span className="absolute left-6 opacity-90 text-5xl">
                    <FaQuoteLeft />
                  </span>
                  <p className="text-2xl mt-14 ">{obj.comment}</p>
                  <div className="flex flex-col ml-14 ">
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
