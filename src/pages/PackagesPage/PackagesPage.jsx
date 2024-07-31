import { useEffect, useRef } from "react";
import PackagesHeader from "../../components/PackagesPage/PackagesHeader";
import PackagesTabs from "../../components/PackagesPage/PackagesTabs";
import PilgrimageReligionTabs from "../../components/PackagesPage/PilgrimageReligionTabs";
import PackageFeature from "../../components/PackagesPage/PackageFeature";
import HeroAbout from "../../components/PackagesPage/HeroAbout";
import OtherPackagesTabs from "../../components/PackagesPage/OtherPackagesTabs";

const PackagesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroAboutRef = useRef(null);

  const scrollToAbout = () => {
    if (heroAboutRef.current) {
      window.scrollTo({
        top: heroAboutRef.current.offsetTop - 140,
        // behavior: "smooth",
      });
    }
  };

  return (
    <>
      <PackagesHeader scrollToAbout={scrollToAbout} />
      <PackagesTabs />
      <PilgrimageReligionTabs />
      <PackageFeature />
      <HeroAbout ref={heroAboutRef} />
      <OtherPackagesTabs />
    </>
  );
};

export default PackagesPage;
