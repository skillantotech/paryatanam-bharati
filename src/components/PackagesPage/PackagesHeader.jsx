import PropTypes from "prop-types";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

const PackagesHeader = ({ scrollToAbout }) => {
  return (
    <div className="max-w-7xl mx-4 xl:mx-auto xl:h-[85vh] overflow-hidden">
      <div className="py-3 flex flex-wrap gap-2 text-gray-500 ">
        <Link
          to={"/"}
          className="item flex items-center gap-2 text-gray-500 hover:text-gray-700 duration-150"
        >
          <HiHome />
          Home /
        </Link>
        <Link to={"/packages"}> Packages /</Link> <span>Pilgrimage</span>
      </div>
      <div className="flex overflow-hidden">
        <div className="flex flex-col  gap-6 lg:flex-row items-center ">
          <div className=" lg:w-5/12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center md:text-left text-blue-500 leading-tight font-medium">
              Pilgrimage Tour Packages
            </h2>
            <h3 className="mt-6 md:mt-10 text-md lg:text-lg text-center md:text-left text-gray-700 ">
              Discover the spiritual essence of India with our pilgrimage tour
              packages. Journey to sacred destinations like Varanasi, Rishikesh,
              Tirupati, and Puri. Experience divine rituals, serene temples, and
              holy rivers. Our packages include comfortable accommodations,
              guided tours, and spiritual activities. Ideal for devotees,
              spiritual seekers, and family trips.
            </h3>
            <div className=" flex flex-col sm:flex-row justify-center md:justify-start">
              <button
                onClick={scrollToAbout}
                className="w-full mt-8 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500"
              >
                Know More
              </button>
            </div>
          </div>
          <div className=" h-full lg:w-7/12 flex justify-center md:justify-end overflow-hidden rounded">
            <img
              src="https://wallpapercave.com/wp/wp13384765.jpg"
              alt=""
              className=" object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

PackagesHeader.propTypes = {
  scrollToAbout: PropTypes.func.isRequired,
};

export default PackagesHeader;
