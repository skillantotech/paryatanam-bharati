import React, { useEffect, useRef } from "react";
import PackagesHeader from "../../components/PackagesPageC/PackagesHeader";
import PackagesTabs from "../../components/PackagesPageC/PackagesTabs";
import PilgrimageReligionTabs from "../../components/PackagesPageC/PilgrimageReligionTabs";
import PackageFeature from "../../components/PackagesPageC/PackageFeature";
import HeroAbout from "../../components/PackagesPageC/HeroAbout";
import OtherPackagesTabs from "../../components/PackagesPageC/OtherPackagesTabs";

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
