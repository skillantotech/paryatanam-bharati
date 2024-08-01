import { Hoteljodhpurcarddata } from "../../../Data/StateDetailsData/Hoteljodhpurcarddata";

const Hoteljodhpurcard = () => {
  return (
    <div className="max-w-7xl mx-4 xl:mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-2xl sm:text-3xl text-left">Hotels in Jodhpur</h2>
        <button className="text-blue-600 font-bold text-md sm:text-lg cursor-pointer relative group transition-all duration-300 ease-in-out hover:text-blue-800">
          View More
          <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-blue-500 w-0 group-hover:w-full transition-all duration-300"></div>
        </button>
      </div>
      <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Hoteljodhpurcarddata.map((card, index) => (
          <div key={index} className="rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 bg-white">
            <div className="relative group">
              <img
                src={card.thumbnail}
                alt={card.headingname}
                className="h-64 sm:h-72 md:h-80 w-full object-cover transition duration-500"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center p-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{card.headingname}</h3>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="font-medium text-lg sm:text-xl text-gray-800 mt-2 text-left">{card.headingname}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hoteljodhpurcard;






