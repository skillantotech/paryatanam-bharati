const ExploreVideoSection = () => {
  return (
    <section className="max-w-7xl mx-4 xl:mx-auto mt-14">
      <div className="grid items-center grid-cols-1 lg:items-stretch md:grid-cols-2 gap-y-8 gap-x-12 xl:gap-x-20">
        <div className="video-container relative">
          <div className="aspect-video">
            <img
              className="object-cover w-full h-full"
              src="https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="About video"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center cursor-pointer group">
            <div className="flex items-center justify-center transition-all duration-300 rounded-full w-20 h-20 group-hover:w-28 group-hover:h-28 active:w-24 active:h-24 bg-white/20">
              <div
                type="button"
                className="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 text-white transition-all duration-150 rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 group-hover:opacity-90 group-hover:scale-105 active:scale-95"
              >
                {/* Play SVG Image */}
                <svg
                  className="w-8 h-8 lg:w-10 lg:h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"></path>
                </svg>
              </div>
            </div>
          </div>
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/42OaWwyyet4?si=2b0NK7ZXX3aOJoof"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe> */}
        </div>

        <div className="flex flex-col items-start justify-center gap-4 md:py-5">
          <h1 className="text-3xl font-bold">Custom Travel Packages</h1>
          <p className="text-base">
            Discover the world with our custom travel packages, guided tours and
            exclusive experiences. Whether you&apos;re looking for a relaxing
            beach gateaway, an adventurous trek through the mountains, or a
            cultural immersion in a vibrant city, we have perfect itinerary for
            you.
          </p>
          <div className="mt-2">
            <button className="border border-black font-semibold px-4 py-2 mr-4">
              Explore
            </button>
            <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded-sm">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreVideoSection;
