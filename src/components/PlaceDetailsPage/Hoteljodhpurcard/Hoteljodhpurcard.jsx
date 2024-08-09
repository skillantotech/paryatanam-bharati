import { Hoteljodhpurcarddata } from "../../../Data/PlaceDetailsData/Hoteljodhpurcarddata";
const Hoteljodhpurcard = () => {
  return (
    <div className="max-w-7xl mx-4 xl:mx-auto mb-8">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl sm:text-3xl text-left">
          Hotels in Jodhpur
        </h2>
        <button className="text-blue-600 font-bold text-md sm:text-lg cursor-pointer relative group transition-all duration-300 ease-in-out hover:text-blue-800">
          View More
          <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-blue-500 w-0 group-hover:w-full transition-all duration-300"></div>
        </button>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:gap-6 pt-5 justify-items-center mt-2">
        {Hoteljodhpurcarddata.map((card, index) => (
          <div
            key={index}
            className="m-auto relative group cursor-pointer shadow-lg"
          >
            <div className="h-[430px] w-72 rounded-lg overflow-hidden">
              <img
                className="w-full h-full group-hover:scale-105 object-cover transition-all duration-500 ease-in-out"
                src={card.thumbnail}
                alt={card.headingname}
              />
            </div>
            <div className="absolute bottom-40 text-white top-0 left-0 w-72 h-full flex items-center justify-center bg-transparent rounded-lg duration-300 hover:bg-black/50">
              <h2 className="text-xl font-bold border-2 border-white p-2 bg-black/10">
                {card.headingname}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hoteljodhpurcard;
