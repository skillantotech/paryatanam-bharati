import { Link } from "react-router-dom";
import DisconnectImg from "../assets/images/NotFoundPage/disconnect.png";
import FourZeroFour from "../assets/images/NotFoundPage/404.png";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-screen w-screen bg-orange-200">
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="flex flex-col gap-4 justify-center">
                <h1 className="text-gray-800 font-bold text-2xl">
                  Oops! It looks like you've wandered into a place that doesn't
                  exist. Let's get you back on track.
                </h1>
                <p className="text-gray-800">
                  Sorry about that! Please visit our <b>homepage</b> to find
                  what you're looking for.
                </p>
                <Link
                  to={"/"}
                  className="w-fit rounded md py-3 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 duration-150"
                >
                  Take me there!
                </Link>
              </div>
            </div>
            <div>
              <img src={FourZeroFour} />
            </div>
          </div>
        </div>
        <div>
          <img src={DisconnectImg} />
        </div>
      </div>
      {/* <div className="text-xl text-center">404 not found</div>
      <p>
        Go back to{" "}
        <Link to={"/"} className="text-blue-500">
          Home Page
        </Link>
      </p> */}
    </div>
  );
};

export default NotFound;
