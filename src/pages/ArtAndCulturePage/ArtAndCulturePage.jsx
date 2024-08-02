import { useEffect } from "react";
import Breadcrumbs from "../../components/ArtandCulturePage/BreadCrumb/Breadcrumbs";
import HeroSection from "../../components/ArtandCulturePage/HeroSection/HeroSection";
import ArtCultureSection from "../../components/ArtandCulturePage/ArtCultureSection/ArtCultureSection";
import Overview from "../../components/ArtandCulturePage/Overview/Overview";
import Popularartcard from "../../components/ArtandCulturePage/Popularartcard/Popularartcard";
import ClrOfCulture from "../../components/ArtandCulturePage/ClrOfCulture/ClrOfCulture";
const ArtAndCulture = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <Breadcrumbs />
      <Overview />
      <ArtCultureSection />
      <ClrOfCulture />
      <Popularartcard />
    </>
  );
};

export default ArtAndCulture;
