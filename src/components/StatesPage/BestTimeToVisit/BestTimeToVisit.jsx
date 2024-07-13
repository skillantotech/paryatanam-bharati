const BestTimeToVisit = () => {
  return (
    <div className="max-w-7xl mx-4 xl:mx-auto">
      <div className="best-time-visit-outer bg-white py-12">
        <div className=" container mx-auto px-4">
          <div className="best-time-visit-main">
            <div className="heading-h2 flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                Best Time to Visit Rajasthan
              </h2>
              <div className="view-tours">
                <a
                  href="#"
                  className=" border-2 border-blue-500 rounded p-2  hover:bg-blue-700 bordertext-indigo-600 hover:text-white"
                >
                  View more
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="best-box bg-gray bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="best-visit-ico mb-4">
                  <img
                    src="https://www.tourmyindia.com/states/rajasthan/image/summer-ico.png"
                    alt="Summer Season in Rajasthan"
                    className="w-16 h-16 mx-auto"
                  />
                </div>
                <div className="best-visit-details text-center">
                  <h4 className="text-xl font-semibold text-gray-700 mb-2">
                    Summer Season in Rajasthan
                  </h4>
                  <p className="text-gray-600">
                    Summer in Rajasthan starts from April and lasts till June.
                    The temperature ranges from 24&deg;C to 48&deg;C. Heat can
                    be very uncomfortable for tourists. This season is not
                    favourable for travel.
                  </p>
                </div>
              </div>

              <div className="best-box bg-gray bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="best-visit-ico mb-4">
                  <img
                    src="https://www.tourmyindia.com/states/rajasthan/image/mansoon-ico.png"
                    alt="Monsoon Season in Rajasthan"
                    className="w-16 h-16 mx-auto"
                  />
                </div>
                <div className="best-visit-details text-center">
                  <h4 className="text-xl font-semibold text-gray-700 mb-2">
                    Monsoon Season in Rajasthan
                  </h4>
                  <p className="text-gray-600">
                    Monsoon in Rajasthan begins in July and ends in September.
                    The temperature ranges from 21&deg;C to 35&deg;C. During
                    Monsoon thunderclap paves the way for heavy rainfall. This
                    season is also favourable for travel.
                  </p>
                </div>
              </div>

              <div className="best-box bg-gray bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="best-visit-ico mb-4">
                  <img
                    src="https://www.tourmyindia.com/states/rajasthan/image/winter-ico.png"
                    alt="Winter Season in Rajasthan"
                    className="w-16 h-16 mx-auto"
                  />
                </div>
                <div className="best-visit-details text-center">
                  <h4 className="text-xl font-semibold text-gray-700 mb-2">
                    Winter Season in Rajasthan
                  </h4>
                  <p className="text-gray-600">
                    Winter in Rajasthan begins in October and ends in March. The
                    temperature ranges from 13&deg;C to 30&deg;C. The weather is
                    favourable for travel due to pleasant daytime temperatures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestTimeToVisit;
