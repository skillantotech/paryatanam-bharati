import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../../../public/assets/logo/Paryatanmbharati logo_PNG.png";
// import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaCaretDown } from "react-icons/fa";

const TopHeader = () => {
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 1024);
      // setSmallScreen((prev) => window.innerWidth < 1024 !== prev);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="TopHeaderWrapper bg-white">
      <div className="MiddleNav h-[64px] flex justify-between max-w-screen-xl mx-auto relative">
        {/* Brand Logo */}
        <Link
          className="flex items-center overflow-y-hidden py-1 select-none"
          to="/"
        >
          <img
            className="h-full w-full ml-3 object-contain"
            src={BrandLogo}
            alt="Paryatanam Bharati Logo"
          />
        </Link>

        {/* Search Bar */}
        <div className="SearchBar md:flex items-center w-[95vw] md:w-[450px] z-20 absolute top-[75px] md:top-1/2 left-1/2 md:translate-y-[-50%] translate-x-[-50%]">
          <form className="mx-auto w-full">
            <div className="flex relative">
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 h-10 z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-400 focus:border-blue-500 focus:ring-2 focus:outline-none duration-150 w-full"
                  placeholder="Search..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-gray-600 rounded-e-lg"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* Login and SignUp */}
        <div className="flex items-center ml-5 lg:ml-1 mr-2 md:mr-16 lg:mr-2 gap-2">
          <Link
            to="/signin"
            className="font-semibold px-3 sm:px-4 xl:px-6 py-2 bg-blue-600 hover:bg-blue-700 lg:bg-transparent lg:hover:bg-slate-200 text-white lg:text-black lg:hover:text-blue-800 rounded-md transition-all duration-300 ease-in-out md:static absolute right-16"
          >
            {smallScreen ? "Sign In" : "Login"}
          </Link>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/sign-up"
            // className="bg-black hover:bg-gray-800 text-white border-2 border-black font-semibold px-4 xl:px-6 py-2 rounded-md transition-all duration-300 ease-in-out whitespace-nowrap lg:flex items-center hidden"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition-all duration-300 ease-in-out whitespace-nowrap lg:flex items-center hidden"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
