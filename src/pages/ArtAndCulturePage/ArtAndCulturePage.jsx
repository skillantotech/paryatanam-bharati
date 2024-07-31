import ArtandCulture from "../../components/ArtandCulturePage/ArtandCulture/ArtandCulture";
import Breadcrumbs from "../../components/ArtandCulturePage/BreadCrumb/Breadcrumbs";
import HeroSection from "../../components/ArtandCulturePage/HeroSection/HeroSection";
import ArtCultureSection from "../../components/ArtandCulturePage/ArtCultureSection/ArtCultureSection";
import Overview from "../../components/ArtandCulturePage/Overview/Overview";
import Popularartcard from "../../components/ArtandCulturePage/Popularartcard/Popularartcard";
const ArtAndCulture = () => {
  return (
    <>
      <HeroSection />
      <Breadcrumbs />
      <Overview />
      <ArtCultureSection />
      <ArtandCulture />
      <Popularartcard />
    </>
  );
};

export default ArtAndCulture;