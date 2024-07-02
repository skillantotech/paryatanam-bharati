import { useState, useEffect } from "react";
import TopHeader from "./TopHeader";
import NavBar from "./NavBar/NavBar";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

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
      className={`mx-auto mb-14 md:mb-0 z-10 transition-all duration-300 ${
        isSticky && "sticky top-[-100px] translate-y-[100px]"
      }`}
    >
      <TopHeader />
      <NavBar isSticky={isSticky} />
    </header>
  );
};

export default Header;
