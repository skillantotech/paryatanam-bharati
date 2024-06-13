"use client";

import { FaLocationDot } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
// import { FaQuoteLeft } from "react-icons/fa6";
import ProfileLogo from './../../assets/pexels-rahul-dogra-1439977-2779325.jpg'

import { Carousel } from "flowbite-react";

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

const CustomerData = [
  {
    id: 1,
    name: "John Doe",
    location: "New York, USA",
    rating: 5,
    comment:
      "Amazing experience with Paryatanam Bharti! Their attention to detail and personalized service made my trip unforgettable. Highly recommended!",
    date: "2024-05-20",
    url: "./../../assets/young-bearded-man-with-striped-shirt.jpg",
  },
  {
    id: 2,
    name: "Emily Smith",
    location: "London, UK",
    rating: 4,
    comment:
      "Had a great time exploring with Paryatanam Bharti. Loved the local insights they provided. Will definitely book with them again!",
    date: "2024-06-05",
    url: "https://dummyimage.com/200x200/000000/ffffff&text=User+2",
  },
  {
    id: 3,
    name: "Carlos Rodriguez",
    location: "Madrid, Spain",
    rating: 5,
    comment:
      "Outstanding service from start to finish. Paryatanam Bharti exceeded my expectations. Can't wait for my next adventure with them!",
    date: "2024-04-15",
    url: "https://dummyimage.com/200x200/000000/ffffff&text=User+3",
  },
  {
    id: 4,
    name: "Sophia Johnson",
    location: "Sydney, Australia",
    rating: 5,
    comment:
      "Had an amazing trip organized by Paryatanam Bharti. The itinerary was well-planned, and the guides were knowledgeable. Would definitely recommend!",
    date: "2024-03-10",
    url: "https://dummyimage.com/200x200/000000/ffffff&text=User+4",
  },
  {
    id: 5,
    name: "Mohammed Bin Salman",
    location: "Dubai, UAE",
    rating: 4,
    comment:
      "Great experience overall. Paryatanam Bharti provided excellent service and made sure every aspect of the trip was taken care of. Will consider booking with them again.",
    date: "2024-02-18",
    url: "https://dummyimage.com/200x200/000000/ffffff&text=User+5",
  },
  {
    id: 6,
    name: "Anna Nguyen",
    location: "Hanoi, Vietnam",
    rating: 5,
    comment:
      "Highly impressed by Paryatanam Bharti's attention to detail and professionalism. They made my vacation in Vietnam unforgettable. Thank you!",
    date: "2024-01-05",
    url: "https://dummyimage.com/200x200/000000/ffffff&text=User+6",
  },
  {
    id: 7,
    name: "David Lee",
    location: "Toronto, Canada",
    rating: 4,
    comment:
      "Had a wonderful experience traveling with Paryatanam Bharti. The guides were knowledgeable and friendly, and the itinerary was well-paced. Would recommend!",
    date: "2024-07-12",
    url: "https://dummyimage.com/200x200/000000/ffffff&text=User+7",
  },
  {
    id: 8,
    name: "Luisa Martinez",
    location: "Mexico City, Mexico",
    rating: 5,
    comment:
      "Fantastic trip organized by Paryatanam Bharti. Everything went smoothly, and their local insights really enhanced the experience. Can't wait for my next adventure!",
    date: "2024-08-29",
    url: "https://dummyimage.com/200x200/000000/ffffff&text=User+8",
  },
  {
    id: 8,
    name: "Luisa Martinez",
    location: "Mexico City, Mexico",
    rating: 5,
    comment:
      "Fantastic trip organized by Paryatanam Bharti. Everything went smoothly, and their local insights really enhanced the experience. Can't wait for my next adventure!",
    date: "2024-08-29",
    url: "https://dummyimage.com/200x200/000000/ffffff&text=User+8",
  },
  {
    id: 8,
    name: "Banda Martinez",
    location: "Mexico City, Mexico",
    rating: 5,
    comment:
      "Fantastic trip organized by Paryatanam Bharti. Everything went smoothly, and their local insights really enhanced the experience. Can't wait for my next adventure!",
    date: "2024-08-29",
    url: "https://dummyimage.com/200x200/000000/ffffff&text=User+8",
  },
];

// Function to chunk the array into groups of two objects
const chunkArray = (arr, chunkSize) => {
  const customerReview = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    customerReview.push(arr.slice(i, i + chunkSize));
  }
  // console.log(customerReview);
  return customerReview;
};

// Chunk the CustomerData array into groups of two objects each

export function CarouselHome() {
  const customerReview = chunkArray(CustomerData, 2);

  return (
    <div className="">
      <div className=" mt-10 h-56 sm:h-64 xl:h-80 2xl:h-80 max-w-7xl mx-auto ">
        <Carousel theme={customTheme} slideInterval={3000} pauseOnHover>
          {customerReview.map((element, index) => (
            <div key={index} className="flex gap-5 h-full">
              {element.map((obj, i) => (
                <div
                  key={`Review-${i}`}
                  className="flex flex-col p-6 w-[600px] h-full border justify-between relative"
                >
                  <div className="absolute h-12 w-12 rounded-full overflow-hidden border-2 border-gray-300 left-5 bottom-6">
                    <img src={ProfileLogo} alt="" className=""/>
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
    </div>
  );
}
