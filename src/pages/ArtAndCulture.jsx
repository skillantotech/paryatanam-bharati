import ArtandCulture from "../components/Art&Culture/ArtandCulture/ArtandCulture";
import Breadcrumbs from "../components/Art&Culture/BreadCrumb/Breadcrumbs";
import HeroSection from "../components/Art&Culture/HeroSection/HeroSection";
import ArtCultureSection from "../components/Art&Culture/ArtCultureSection/ArtCultureSection";
import Overview from "../components/Art&Culture/Overview/Overview";
import Popularartcard from "../components/Art&Culture/Popularartcard/Popularartcard";
const ArtAndCulture = () => {
  return (
    <div className="">
      <HeroSection />
      <Breadcrumbs />
      <Overview />
      <ArtCultureSection />
      <ArtandCulture />
      <Popularartcard />
    </div>
  );
};

export default ArtAndCulture;
