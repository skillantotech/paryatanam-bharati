import { useState, useEffect } from 'react';

// Define the images array for carousel
const images = [
  {
    url: "https://images.pexels.com/photos/1588032/pexels-photo-1588032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Mehrangarh Fort Jodhpur"
  },
  {
    url: "https://images.pexels.com/photos/3974152/pexels-photo-3974152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Mehrangarh Fort, Jodhpur"
  },
  {
    url: "https://images.pexels.com/photos/2284750/pexels-photo-2284750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Mehrangarh Fort, Rajasthan"
  },
  {
    url: "https://images.pexels.com/photos/9179927/pexels-photo-9179927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Mehrangarh Fort Jodhpur, Rajasthan"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Set initial active slide index

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Use useEffect to create an auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentSlide]);

  return (
    <div className="max-w-7xl mx-4 xl:mx-auto mb-5">
      <div className="container mx-auto lg:mx-auto">
        <h1 className="text-3xl text-center font-bold p-2 mb-4">
          Mehrangarh Fort<span className="text-blue-600"> Jodhpur</span>
        </h1>
        <div className="flex flex-wrap">
          {/* Left side with image carousel */}
          <div className="w-full lg:w-1/2 relative mt-2">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg mx-auto">
              <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {images.map((image, index) => (
                  <div key={index} className="flex-shrink-0 h-[400px] w-full">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="block h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Slider controls */}
            <button
              type="button"
              className="absolute top-1/2 left-2 z-30 flex items-center justify-center h-10 w-10 transform -translate-y-1/2 cursor-pointer group focus:outline-none"
              onClick={prevSlide}
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 hover:text-blue-600 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-1/2 right-2 z-30 flex items-center justify-center h-10 w-10 transform -translate-y-1/2 cursor-pointer group focus:outline-none"
              onClick={nextSlide}
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 hover:text-blue-600 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
          {/* Right side with content */}
          <div className="w-full lg:w-1/2">
            <div className="px-0 py-6 lg:px-6 lg:py-0 text-gray-600 text-left">
              <p className="mb-4 text-lg">
                Mehrangarh Fort holds the pride of place in Jodhpur because of its splendid architecture and the diverse history associated with it. Considered as one of the most formidable and magnificent forts of Rajasthan, Mehrangarh fort was built by Rao Jodha in the year 1459. The fort is spread over an area of 5 km and is built on 125 m high hill in the outskirts of Jodhpur city.
              </p>
              <p className="mb-4 text-lg">
                There are seven gates, which can be used to enter the Mehrangarh fort. These 7 gates are made by different rulers, and are built in honour of victory over Bikaner and Jaipur armies.
              </p>
              <h5 className="text-xl font-bold mt-6">Address</h5>
              <p className="mb-4 text-lg">Sodagaran Mohalla, Jodhpur, Rajasthan-342006, India</p>
              <h5 className="text-xl font-bold">Timings</h5>
              <p>9:00 AM to 5:00 PM, Open on all days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;