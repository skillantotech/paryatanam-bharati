const BrandFeatures = [
  {
    id: 1,
    title: "Seamless Experience",
    backgroundImage:
      'url("../src/assets/images/why-choose-us/pexels-rahul-dogra-1439977-2779325.jpg")',
    description:
      "Sit back, relax, and let us handle the details. From transportation arrangements to activity bookings, we take care of all the logistics so you can focus on making memories. Enjoy a hassle-free experience from start to finish.",
  },
  {
    id: 2,
    title: "Local Insights",
    backgroundImage:
      'url("../src/assets/images/why-choose-us/pexels-parv-choudhary-724334-2870167.jpg")',
    description:
      "Experience destinations like a local with our insider insights. From hidden gems to off-the-beaten-path attractions, delve into each location's culture and heritage. Discover landmark stories for a richer travel experience.",
  },
  {
    id: 3,
    title: "Sustainability",
    backgroundImage:
      'url("../src/assets/images/why-choose-us/pexels-agnieszka-palmowska-23342-631909.jpg")',
    description:
      "We believe that travel should be a sustainable and eco-friendly experience. With our eco-friendly initiatives, we strive to reduce our carbon footprint and contribute to a greener future.",
  },
];

const WhyChooseUs2 = () => {
  return (
    <section
      id="features"
      className="relative block py-10 md:py-8 max-w-7xl mx-4 xl:mx-auto"
    >
      <div className="text-center">
        <span className="my-3 flex items-center justify-center font-medium uppercase tracking-wider">
          Why choose us
        </span>
        <h2 className="block w-full bg-clip-text font-bold text-3xl sm:text-4xl">
          Your Satisfaction, Our Priority
        </h2>
        <p className="mx-auto my-4 w-full max-w-7xl bg-transparent text-center font-medium leading-relaxed tracking-wide ">
          At Paryatanam Bharati, your satisfaction is paramount. Our commitment
          to excellence ensures that every aspect of your trip exceeds
          expectations. From the moment you book until you return home, our team
          is dedicated to delivering an unparalleled travel experience.
        </p>
      </div>

          <div className="flex flex-wrap items-center justify-center xl:justify-between mt-10 ">
              
              {BrandFeatures.map((feature, i) => (
                  <div key={i} className="py-4 px-2 sm:p-4 w-80 sm:w-96 h-[400px] sm:h-[430px] cursor-pointer">
                  <div
                    className="object-cover flex rounded-lg h-full p-8 flex-col relative group overflow-hidden"
                    style={{
                      background:
                        feature.backgroundImage,
                      backgroundSize: "100% 120%",
                    }}
                  >
                    <div
                      className="absolute left-0 top-[82%] flex h-full flex-col p-8 max-w-sm group-hover:top-14 ease-linear duration-200"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent 0%, black 100%)",
                      }}
                    >
                      <div className="flex items-center justify-center mb-5">
                        {/* <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                          </svg>
                        </div> */}
                        <h2 className="text-white text-xl sm:text-2xl font-medium">
                          {feature.title}
                        </h2>
                      </div>
                      <div className="flex flex-col justify-between flex-grow">
                        <p className="leading-relaxed text-base text-white line-clamp-[8] sm:line-clamp-none">
                          {feature.description}
                        </p>
                        {/* <a
                          href="#"
                          className="mt-3 text-gray-300 hover:text-white inline-flex items-center"
                        >
                          Learn More
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          

        {/* <div className="py-4 px-2 sm:p-4 w-80 sm:w-96 h-[400px] sm:h-[430px] ">
          <div
            className="flex rounded-lg h-full p-8 flex-col relative group overflow-hidden"
            style={{
              background:
                'url("../src/assets/images/why-choose-us/pexels-rahul-dogra-1439977-2779325.jpg")',
              backgroundSize: "100% 120%",
            }}
          >
            <div
              className="absolute left-0 top-[82%] flex h-full flex-col z-5 p-8 max-w-sm group-hover:top-0 ease-linear duration-200"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, black 100%)",
              }}
            >
              <div className="flex items-center mb-3 ">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div> 
                <h2 className="text-white text-lg sm:text-xl font-medium">
                  Seamless Experience
                </h2>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-base text-white line-clamp-[8] sm:line-clamp-none">
                  Sit back, relax, and let us handle the details. From
                  transportation arrangements to activity bookings, we take care
                  of all the logistics so you can focus on making memories.
                  Enjoy a hassle-free experience from start to finish.
                </p>
                <a
                  href="#"
                  className="mt-3 text-gray-300 hover:text-white inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="py-4 px-2 sm:p-4 w-80 sm:w-96 h-[400px] sm:h-[430px]">
          <div
            className="flex rounded-lg h-full dark:bg-gray-800 p-8 flex-col relative group overflow-hidden"
            style={{
              background:
                'url("../src/assets/images/why-choose-us/pexels-parv-choudhary-724334-2870167.jpg")',
              backgroundSize: "100% 110%",
            }}
          >
            <div
              className="absolute left-0 top-[82%] flex h-full flex-col z-5 p-8 max-w-sm group-hover:top-0 ease-linear duration-200"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, black 100%)",
              }}
            >
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-white text-lg sm:text-xl font-medium ">
                  Local Insights
                </h2>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-base text-white line-clamp-[8] sm:line-clamp-none">
                  Experience destinations like a local with our insider
                  insights. From hidden gems to off-the-beaten-path attractions,
                  delve into each location&apos;s culture and heritage. Discover
                  landmark stories for a richer travel experience.
                </p>
                <a
                  href="#"
                  className="mt-3 text-gray-300 hover:text-white inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="py-4 px-2 sm:p-4 w-80 sm:w-96 h-[400px] sm:h-[430px]">
          <div
            className="flex rounded-lg h-full p-8 flex-col relative group overflow-hidden"
            style={{
              background:
                'url("../src/assets/images/why-choose-us/pexels-agnieszka-palmowska-23342-631909.jpg")',
              backgroundSize: "cover",
            }}
          >
            <div
              className="absolute left-0 top-[82%] flex h-full flex-col z-5 p-8 max-w-sm group-hover:top-0 ease-linear duration-200"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, black 100%)",
              }}
            >
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-white text-lg sm:text-xl font-medium">
                  Sustainability
                </h2>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-base text-white line-clamp-[8] sm:line-clamp-none">
                  We are committed to responsible tourism, minimizing
                  environmental impact, and supporting local communities to
                  preserve destination beauty and authenticity.
                </p>
                <a
                  href="#"
                  className="mt-3 text-gray-300 hover:text-white inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs2;
