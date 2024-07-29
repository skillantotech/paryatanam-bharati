import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import {
  NavbarMenu,
  DiscoverSubMenu,
  TourismSubMenu,
  AccommodationSubMenu,
  PackagesSubmenu,
  ServicesSubmenu,
  ExploreSubmenu,
  TransportationSubMenu,
} from "../../../Data/NavData";

const NavBar = ({ isSticky }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  return (
    <>
      <nav className="max-width-wrapper justify-center md:h-10 flex items-center relative max-w-screen-xl mx-auto ">
        {/* Nav Links */}
        <ul className="md:px-2 hidden lg:flex gap-2 lg:gap-5 ">
          {NavbarMenu.map((menu, index) => (
            <li key={`Nav-${index}`} className="group">
              <div
                key={`Item-${index}`}
                // className="flex py-2 px-2 font-semibold items-center group-hover:text-blue-800"
                className={`flex py-2 px-2 font-semibold items-center ${
                  isSticky && "group-hover:text-blue-800"
                }`}
              >
                {menu?.link ? (
                  <Link
                    to={menu.link}
                    className="flex flex-nowrap items-center gap-2"
                  >
                    {menu.name}
                    {menu.submenu && <FaChevronDown className="text-sm mt-1" />}
                  </Link>
                ) : (
                  <div className="flex flex-nowrap items-center gap-2 cursor-pointer">
                    {menu.name}
                    {menu.submenu && <FaChevronDown className="text-sm mt-1" />}
                  </div>
                )}

                {/* Discover Submenu */}
                {menu.id == 1 && (
                  <div className="Sb absolute hidden group-hover:flex h-[350px] top-10 left-0 w-full z-50 px-4">
                    {
                      <div className="SubMenu p-5 flex w-full justify-between border-t-4 border-blue-500 rounded-b-lg bg-white shadow-lg">
                        {DiscoverSubMenu.map((submenu, index) => (
                          <div key={index} className="flex flex-col gap-2 ">
                            <div className="flex font-semibold text-blue-800">
                              {submenu.submenu_name}
                            </div>
                            <div className="">
                              <div className="flex flex-col text-black">
                                {DiscoverSubMenu[index].submenu_items.map(
                                  (submenu_item, i) => (
                                    <Link
                                      to="discover-india/place"
                                      key={i}
                                      className=" text-base font-normal hover:translate-x-1 hover:text-blue-800 ease-linear duration-200"
                                    >
                                      {submenu_item.name}
                                    </Link>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    }
                  </div>
                )}

                {/* Tourism SubMenu */}
                {menu.id == 2 && (
                  <div className="relative">
                    <div className="Sb absolute hidden group-hover:flex top-5 left-[-87px] w-full z-50">
                      {
                        <div className="SubMenu flex flex-col justify-between border-t-4 border-blue-500 rounded-b-md bg-white shadow-lg">
                          {TourismSubMenu.map((submenu, index) => (
                            <Link
                              key={`PackagesSubmenu${index} `}
                              className="flex w-[230px] font-semibold p-2 px-3 text-blue-800 hover:bg-gray-100 ease-linear duration-300"
                            >
                              {submenu.submenu_name}
                            </Link>
                          ))}
                        </div>
                      }
                    </div>
                  </div>
                )}

                {/* Accommodation SubMenu */}
                {menu.id == 3 && (
                  <div className="relative">
                    <div className="Sb absolute hidden group-hover:flex top-5 left-[-147px] w-full z-50">
                      {
                        <div className="SubMenu flex flex-col flex-wrap justify-between border-t-4 border-blue-500 rounded-b-md bg-white shadow-lg">
                          {AccommodationSubMenu.map((submenu, index) => {
                            {
                              return (
                                <Link
                                  path={submenu.link}
                                  key={`ArtAndCultureSubmenu${index} `}
                                  className="flex px-3 p-2 font-semibold w-[180px] text-blue-800 hover:bg-gray-100 ease-linear duration-300"
                                >
                                  {submenu.submenu_name}
                                </Link>
                              );
                            }
                          })}
                        </div>
                      }
                    </div>
                  </div>
                )}

                {/* Transportation Submenu */}
                {menu.id == 4 && (
                  <div className="relative">
                    <div className="Sb absolute hidden group-hover:flex top-5 left-[-134px] w-full z-50">
                      {
                        <div className="SubMenu flex flex-col justify-between border-t-4 border-blue-500 rounded-b-md bg-white shadow-lg">
                          {TransportationSubMenu.map((submenu, index) => (
                            <Link
                              path={submenu.link}
                              key={`TourismSubMenu${index} `}
                              className="flex p-2 px-3 w-[180px] relative items-center font-semibold text-blue-800 hover:bg-gray-100 ease-linear duration-300"
                            >
                              {submenu.submenu_name}
                            </Link>
                          ))}
                        </div>
                      }
                    </div>
                  </div>
                )}

                {/* Explore */}
                {menu.id == 5 && (
                  <div className="relative">
                    <div className="Sb absolute hidden group-hover:flex top-5 left-[-80px] w-full z-50">
                      {
                        <div className="SubMenu flex flex-col flex-wrap justify-between border-t-4 border-blue-500 rounded-b-md bg-white shadow-lg">
                          {ExploreSubmenu.map((submenu, index) => {
                            {
                              return (
                                <Link
                                  to={submenu.link}
                                  key={`ArtAndCultureSubmenu${index} `}
                                  className="flex px-3 p-2 font-semibold w-[180px] text-blue-800 hover:bg-gray-100 ease-linear duration-300"
                                >
                                  {submenu.submenu_name}
                                </Link>
                              );
                            }
                          })}
                        </div>
                      }
                    </div>
                  </div>
                )}

                {/* Cuisine */}
                {/* {menu.id == 5 && (
                  <div className="Sb absolute hidden group-hover:flex h-[350px] top-10 left-0 w-full z-50">
                    {
                      <div className="SubMenu p-5 flex w-full justify-between flex-wrap border-t-4 border-blue-500 bg-white shadow-lg">
                        {CuisineSubmenu.map((submenu, index) => (
                          <div
                            key={`'CuisineSubMenu'${index} `}
                            className="flex flex-col gap-2 "
                          >
                            <div className="flex font-semibold text-blue-800">
                              {submenu.submenu_name}
                            </div>
                            <div className="">
                              <div className="flex flex-col text-black">
                                {CuisineSubmenu[index].submenu_items.map(
                                  (e, i) => {
                                    return (
                                      <Link
                                        path={e.link}
                                        key={`'${submenu.submenu_name}-${i}'`}
                                        className=" text-sm font-normal hover:translate-x-1 hover:text-blue-800 ease-linear duration-200"
                                      >
                                        {e.name}
                                      </Link>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    }
                  </div>
                )} */}
              </div>
            </li>
          ))}
        </ul>
        {/* <div className="flex ml-auto md:ml-0 mr-2 gap-2">
            <Link
              to="/login"
              className="bg-black hover:bg-white lg:bg-white hover:lg:bg-gray-50 text-white hover:text-black hover:lg:text-blue-800 lg:text-black border-2 border-black lg:border-none font-semibold px-3 sm:px-4 xl:px-6 py-2 xl:py-3 rounded-xl transition-all duration-300 ease-in-out"
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              className="bg-black hover:bg-white text-white hover:text-black border-2 border-black font-semibold px-4 xl:px-6 py-2 xl:py-3 rounded-xl transition-all duration-300 ease-in-out whitespace-nowrap lg:block hidden"
            >
              Sign Up
            </Link>
          </div> */}

        {/* Responsive Header */}
        <div className="lg:hidden">
          <div
            className="me-1 p-2 z-20 rounded-full lg:hidden text-black cursor-pointer absolute right-1 bottom-[4px] md:bottom-11"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Menu Icon */}
            <button className="bg-white relative flex overflow-hidden items-center mx-auto justify-center rounded-full w-[40px] h-[40px] transform transition-all duration-200 shadow-md">
              {/* Bars Icon */}
              <div
                className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden`}
              >
                <div
                  className={`bg-black h-[2.5px] w-full rounded transform transition-all duration-300 origin-left ${
                    isOpen && "translate-x-10"
                  }`}
                ></div>
                <div
                  className={`bg-black h-[2.5px] w-3 rounded transform transition-all duration-300 delay-75 ${
                    isOpen && "translate-x-10"
                  }`}
                ></div>
                <div
                  className={`bg-black h-[2px] w-full rounded transform transition-all duration-300 origin-left delay-150 ${
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
                    className={`absolute bg-black h-[2px] w-5 rounded transform transition-all duration-500 delay-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  ></div>
                  <div
                    className={`absolute bg-black h-[2px] w-5 rounded transform transition-all duration-500 delay-300 ${
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
            } absolute top-[60px] inset-x-0 z-20 w-full h-fit px-6 py-4 transition-all duration-300 ease-in-out bg-amber-400 lg:hidden`}
          >
            <ul className="flex flex-col items-start h-full gap-4 trassition-all duration-300">
              <li className="relative group w-full">
                <Link
                  to={"/"}
                  className="flex py-4 px-2 font-semibold items-center group-hover:text-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Home</span>
                </Link>
                <div className="absolute h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-blue-800"></div>
              </li>
              <li className="relative group w-full">
                <Link
                  to={"/about"}
                  className="flex py-4 px-2 font-semibold items-center whitespace-nowrap group-hover:text-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  <span>About Us</span>
                </Link>
                <div className="absolute h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-blue-800"></div>
              </li>
              {/* Dropdown Navlinks */}
              <li className="relative parent group w-full">
                <Link
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
                </Link>
                <div className="absolute h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-blue-800"></div>

                <ul
                  className={`child transition duration-300 md:absolute top-full left-0 md:w-48 md:shadow-lg md:rounded-b ${
                    isExploreOpen ? "block" : "hidden"
                  }`}
                >
                  <li>
                    <Link
                      to="/discover-india"
                      className="flex px-4 py-3 font-semibold hover:text-blue-800"
                      onClick={() => setIsOpen(false)}
                    >
                      Discover India
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/art-culture"
                      className="flex px-4 py-3 font-semibold hover:text-blue-800"
                      onClick={() => setIsOpen(false)}
                    >
                      Art & Culture
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cuisine"
                      className="flex px-4 py-3 font-semibold hover:text-blue-800"
                      onClick={() => setIsOpen(false)}
                    >
                      Cuisine
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="relative group w-full">
                <Link
                  to={"/blogs"}
                  className="flex py-4 px-2 font-semibold items-center group-hover:text-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Blogs</span>
                </Link>
                <div className="absolute h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-blue-800"></div>
              </li>
              <li className="relative group w-full">
                <Link
                  to={"/faq"}
                  className="flex py-4 px-2 font-semibold items-center group-hover:text-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  <span>FAQs</span>
                </Link>
                <div className="absolute h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-blue-800"></div>
              </li>
              <li className="relative group w-full">
                <Link
                  to={"/contact"}
                  className="flex py-4 px-2 font-semibold items-center group-hover:text-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Contact</span>
                </Link>
                <div className="absolute h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-blue-800"></div>
              </li>
            </ul>
          </div>
          {/* Responsive NavLinks End */}
        </div>
        {/* Responsive Header End */}
      </nav>
      <div className="w-full h-[60px] shadow-sm md:hidden"></div>
    </>
  );
};

NavBar.propTypes = {
  isSticky: PropTypes.bool,
};

export default NavBar;
