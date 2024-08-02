import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import CultureDetails from "../../components/CultureDetailsPage/CultureDetails";

const CultureDetailsPage = () => {
  return (
    <>
      <div className="max-w-7xl mx-4 xl:mx-auto flex flex-row items-center justify-start gap-2 text-base font-semibold my-5 text-blue-500">
        <Link
          to={"/"}
          className="item flex items-center gap-2 text-gray-500 hover:text-gray-700 duration-150"
        >
          <HiHome />
          Home
        </Link>
        /<div className="item text-gray-900">Cuisine</div>
      </div>
      <CultureDetails />
    </>
  );
};

export default CultureDetailsPage;
