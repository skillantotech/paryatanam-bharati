import Breadcrumbs from "../components/Art&Culture/BreadCrumb/Breadcrumbs";
import HeroSection from "../components/Art&Culture/HeroSection/HeroSection";
import ArtCultureSection from "../components/Art&Culture/ArtCultureSection/ArtCultureSection";
import Overview from "../components/Art&Culture/Overview/Overview";
import Popularartcard from "../components/Art&Culture/Popularartcard/Popularartcard";
import ClrOfCulture from "../components/Art&Culture/ClrOfCulture/ClrOfCulture";
const ArtAndCulture = () => {
  return (
    <div className="">
      <HeroSection />
      <Breadcrumbs />
      <Overview />
      <ArtCultureSection />
      <ClrOfCulture/>
      <Popularartcard />
    </div>
  );
};

export default ArtAndCulture;
