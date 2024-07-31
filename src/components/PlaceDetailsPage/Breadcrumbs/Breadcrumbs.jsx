import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <div className="max-w-7xl mx-4 xl:mx-auto flex flex-row items-center justify-start gap-2 text-base font-semibold text-blue-500 mt-4">
      <Link
        to={"/"}
        className="item flex items-center gap-2 text-gray-500 hover:text-gray-700 duration-150"
      >
        <HiHome />
        Home
      </Link>
      /
      <Link
        to={"/discover-india/place"}
        className="item flex items-center gap-2 text-gray-500 hover:text-gray-700 duration-150"
      >
        StatesPage
      </Link>
      /
      <div className="item text-gray-900">PlaceDetails</div>
    </div>
  );
};

export default Breadcrumbs;
