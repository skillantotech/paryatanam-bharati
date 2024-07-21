import icon1 from "../../../assets/images/StatesPage/TopCardSVGs/uluru-svgrepo-com.svg";
import icon2 from "../../../assets/images/StatesPage/TopCardSVGs/lake-land-nature-svgrepo-com.svg";
import icon3 from "../../../assets/images/StatesPage/TopCardSVGs/circus-fair-festival-svgrepo-com.svg";

const HillStationSlider = () => {
  const sliderData = [
    {
      title: "Heritage",
      description: "Witness the Unprecedented Architectural Grandeur.",
      imgSrc: icon1,
      imgAlt: "Heritage Image",
    },
    {
      title: "Wildlife",
      description: "Marvel at the Unique Ecosystem and Diverse Wildlife.",
      imgSrc: icon2,
      imgAlt: "Wildlife Image",
    },
    {
      title: "Festivals",
      description: "Take a Plunge in the Rich Culture- Fairs & Festivals.",
      imgSrc: icon3,
      imgAlt: "Festivals Image",
    },
  ];

  return (
    <div className="container max-w-7xl mx-auto py-8 flex flex-wrap justify-center gap-8 mt-[-130px]  ">
      {sliderData.map((item, index) => (
        <div
          key={index}
          className="hill-station-box bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 w-full sm:w-[45%] lg:w-[30%] hover:bg-blue-500 text-black hover:text-white "
        >
          <div className="block h-full">
            <div className="hill-stations-details p-6 text-center">
              <div className="hill-icone mb-4">
                <img
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  className="w-20 h-20 mx-auto"
                />
              </div>
              <h4 className="text-2xl font-semibold mb-2 ">{item.title}</h4>
              <p className="mb-4 text-lg ">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HillStationSlider;
