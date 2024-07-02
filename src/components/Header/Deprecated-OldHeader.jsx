import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
// import { HiBars3CenterLeft, HiXMark } from "react-icons/hi2";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  return (
    <nav className="border-b shadow-lg h-[136px]">
      <div className="max-width-wrapper max-w-7xl mx-auto flex items-center justify-between relative">
        <div className="text-lg font-bold">
          <NavLink
            className="flex items-center h-[70px] overflow-y-hidden"
            to="/"
          >
            <img
              className="h-auto w-[170px] min-w-[170px]"
              src="../../../public/assets/sample-paryatanam-bharati-logo.svg"
              alt="Paryatanam Bharati Logo"
            />
          </NavLink>
          {/* <BrandLogo /> */}
        </div>
        {/* Nav Links */}
        <ul className="md:px-2 hidden md:flex gap-2 lg:gap-5">
          <li className="relative group">
            <NavLink
              to={"/"}
              className="flex py-4 px-2 font-semibold items-center hover:bg-gray-50 group-hover:text-blue-800"
            >
              <span>Home</span>
            </NavLink>
            <div className="absolute h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-blue-800"></div>
          </li>
          <li className="relative group">
            <NavLink
              to={"/about"}
              className="flex py-4 px-2 font-semibold items-center whitespace-nowrap hover:bg-gray-50 group-hover:text-blue-800"
            >
              <span>About Us</span>
            </NavLink>
            <div className="absolute h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-blue-800"></div>
          </li>
          {/* Dropdown Navlinks */}
          <li className="relative parent group">
            <NavLink
              href=""
              className="flex justify-between py-4 px-2 font-semibold items-center hover:bg-gray-50 group-hover:text-blue-800 space-x-2"
            >
              <span>Explore</span>
              <FaChevronDown className="size-4 font-bold fill-current pt-1 group-hover:text-blue-800" />
            </NavLink>
            <div className="absolute h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-blue-800"></div>

            <ul className="child transition duration-300 md:absolute top-full left-0 md:w-48 bg-white md:shadow-lg md:rounded-b group-hover:block hidden ">
              <li className="relative">
                <NavLink
                  to="/discover-india"
                  className="flex px-4 py-3 font-semibold border-t-2 border-blue-800 hover:bg-gray-50 hover:text-blue-800"
                >
                  Discover India
                </NavLink>
                {/* <div className="absolute h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-blue-800"></div> */}
              </li>
              <li className="relative ">
                <NavLink
                  to="/art-culture"
                  className="flex px-4 py-3 font-semibold hover:bg-gray-50 hover:text-blue-800"
                >
                  Art & Culture
                </NavLink>
                {/* <div className="absolute h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-blue-800"></div> */}
              </li>
              <li className="relative">
                <NavLink
                  to="/cuisine"
                  className="flex px-4 py-3 font-semibold hover:bg-gray-50 hover:text-blue-800"
                >
                  Cuisine
                </NavLink>
                {/* <div className="absolute h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-blue-800"></div> */}
              </li>
            </ul>
          </li>

          <li className="relative group">
            <NavLink
              to={"/blogs"}
              className="flex py-4 px-2 font-semibold items-center hover:bg-gray-50 group-hover:text-blue-800"
            >
              <span>Blogs</span>
            </NavLink>
            <div className="absolute h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-blue-800"></div>
          </li>
          <li className="relative group">
            <NavLink
              to={"/faq"}
              className="flex py-4 px-2 font-semibold items-center hover:bg-gray-50 group-hover:text-blue-800"
            >
              <span>FAQs</span>
            </NavLink>
            <div className="absolute h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-blue-800"></div>
          </li>
          <li className="relative group">
            <NavLink
              to={"/contact"}
              className={ ({isActive}) => `flex py-4 px-2 font-semibold items-center hover:bg-gray-50 ${ isActive && `text-blue-800`}`}
            >
              <span>Contact</span>
            </NavLink>
            <div className="absolute h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-blue-800"></div>
          </li>
        </ul>
        <div className="flex ml-auto md:ml-0 mr-2 gap-2">
          <NavLink
            to="/login"
            className="bg-black hover:bg-white lg:bg-white hover:lg:bg-gray-50 text-white hover:text-black hover:lg:text-blue-800 lg:text-black border-2 border-black lg:border-none font-semibold px-3 sm:px-4 xl:px-6 py-2 xl:py-3 rounded-xl transition-all duration-300 ease-in-out"
          >
            Login
          </NavLink>
          <NavLink
            to="/sign-up"
            className="bg-black hover:bg-white text-white hover:text-black border-2 border-black font-semibold px-4 xl:px-6 py-2 xl:py-3 rounded-xl transition-all duration-300 ease-in-out whitespace-nowrap lg:block hidden"
          >
            Sign Up
          </NavLink>
        </div>

        {/* Responsive Header */}
        <div className="md:hidden">
          {/* Icon Style 1 */}
          {/* <div
            className="me-1 p-2 z-20 active:scale-75 transition-all duration-300 ease-in-out rounded-full md:hidden text-black cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <HiXMark className="size-6 fill-current" />
            ) : (
              <HiBars3CenterLeft className="size-6 fill-current" />
            )}
          </div> */}
          {/* Icon Style 2 */}
          <div
            className="me-1 p-2 z-20 rounded-full md:hidden text-black cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <button className="relative flex overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all duration-200 shadow-md">
              {/* Menu Icon */}
              <div
                className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden`}
              >
                <div
                  className={`bg-black h-[2px] w-full rounded transform transition-all duration-300 origin-left ${
                    isOpen && "translate-x-10"
                  }`}
                ></div>
                <div
                  className={`bg-black h-[2.5px] w-3 rounded transform transition-all duration-300 delay-75 ${
                    isOpen && "translate-x-10"
                  }`}
                ></div>
                <div
                  className={`bg-black h-[3px] w-full rounded transform transition-all duration-300 origin-left delay-150 ${
                    isOpen && "translate-x-10"
                  }`}
                ></div>

                {/* Cross Icon */}
                <div
                  className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 flex ${
                    isOpen ? "translate-x-0" : "-translate-x-10"
                  } ${isOpen ? "w-0" : "w-12"}`}
                >
                  <div
                    className={`absolute bg-black h-[2px] w-5 transform transition-all duration-500 delay-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  ></div>
                  <div
                    className={`absolute bg-black h-[2px] w-5 transform transition-all duration-500 delay-300 ${
                      isOpen ? "-rotate-45" : "rotate-0"
                    }`}
                  ></div>
                </div>
              </div>
            </button>
          </div>

          {/* Responsive NavLinks */}
          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            } absolute top-[70px] inset-x-0 z-20 w-full h-[calc(100vh-70px)] px-6 py-4 transition-all duration-300 ease-in-out bg-slate-300 bg-amber-400 md:hidden`}
          >
            <ul className="flex flex-col items-start h-full gap-4 trassition-all duration-300">
              <li className="relative group w-full">
                <NavLink
                  to={"/"}
                  className="flex py-4 px-2 font-semibold items-center group-hover:text-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Home</span>
                </NavLink>
                <div className="absolute h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-blue-800"></div>
              </li>
              <li className="relative group w-full">
                <NavLink
                  to={"/about"}
                  className="flex py-4 px-2 font-semibold items-center whitespace-nowrap group-hover:text-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  <span>About Us</span>
                </NavLink>
                <div className="absolute h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-blue-800"></div>
              </li>
              {/* Dropdown Navlinks */}
              <li className="relative parent group w-full">
                <NavLink
                  href=""
                  className="flex justify-start py-4 ps-2 pe-2 font-semibold items-center group-hover:text-blue-800 space-x-2"
                  onClick={() => setIsExploreOpen(!isExploreOpen)}
                >
                  <span>Explore</span>
                  <FaChevronDown
                    className={`size-4 font-bold fill-current pt-1 group-hover:text-blue-800 transition-rotate duration-300 ease-in-out ${
                      isExploreOpen && "rotate-180"
                    }`}
                  />
                </NavLink>
                <div className="absolute h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-blue-800"></div>

                <ul
                  className={`child transition duration-300 md:absolute top-full left-0 md:w-48 md:shadow-lg md:rounded-b ${
                    isExploreOpen ? "block" : "hidden"
                  }`}
                >
                  <li>
                    <NavLink
                      to="/discover-india"
                      className="flex px-4 py-3 font-semibold hover:text-blue-800"
                      onClick={() => setIsOpen(false)}
                    >
                      Discover India
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/art-culture"
                      className="flex px-4 py-3 font-semibold hover:text-blue-800"
                      onClick={() => setIsOpen(false)}
                    >
                      Art & Culture
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/cuisine"
                      className="flex px-4 py-3 font-semibold hover:text-blue-800"
                      onClick={() => setIsOpen(false)}
                    >
                      Cuisine
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="relative group w-full">
                <NavLink
                  to={"/blogs"}
                  className="flex py-4 px-2 font-semibold items-center group-hover:text-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Blogs</span>
                </NavLink>
                <div className="absolute h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-blue-800"></div>
              </li>
              <li className="relative group w-full">
                <NavLink
                  to={"/faq"}
                  className="flex py-4 px-2 font-semibold items-center group-hover:text-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  <span>FAQs</span>
                </NavLink>
                <div className="absolute h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-blue-800"></div>
              </li>
              <li className="relative group w-full">
                <NavLink
                  to={"/contact"}
                  className="flex py-4 px-2 font-semibold items-center group-hover:text-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Contact</span>
                </NavLink>
                <div className="absolute h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-blue-800"></div>
              </li>
            </ul>
          </div>
          {/* Responsive NavLinks End */}
        </div>
        {/* Responsive Header End */}
      </div>
    </nav>
  );
};

export default Header;
