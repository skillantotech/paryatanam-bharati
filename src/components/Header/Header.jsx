import { useState, useEffect } from "react";
import TopHeader from "./TopHeader";
import NavBar from "./NavBar/NavBar";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setIsSticky(false);
    } else {
      setIsSticky(true);
    }
  }, [location]);

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`mx-auto z-10 transition-all duration-300 sticky ${
        isSticky &&
        location.pathname === "/" &&
        "top-[-100px] translate-y-[100px]"
      }
        ${!isSticky && location.pathname === "/" && "mb-14 md:mb-0"}
        ${location.pathname !== "/" && "top-0"}
      `}
    >
      <TopHeader />

      <div
        className={`Navbar-wrapper w-full z-10 ${
          location.pathname === "/" && !isSticky
            ? "bg-transparent text-white"
            : "bg-white text-black shadow-lg"
        } ${
          location.pathname == "/"
            ? "absolute"
            : "bg-white text-black shadow-lg"
        } 
        `}
      >
        <NavBar isSticky={isSticky} />
      </div>
    </header>
  );
};

export default Header;
