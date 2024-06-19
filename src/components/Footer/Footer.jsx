// import GreenForest from "../../assets/images/footer-images/greenish-jungle.png";
import NewsLetter from "./Newsletter/Newsletter";
import MainFooter from "./MainFooter/MainFooter";
// import "./MainFooter/MainFooter.css";
import BottomFooter from "./MainFooter/BottomFooter";

const Footer = () => (
  <section className="Footer-Section bg-footer-green-jungle bg-no-repeat bg-cover text-white flex flex-col gap-2 w-full py-4 pt-10">
    <NewsLetter />
    <div className="MainFooter mt-8 px-2">
      <MainFooter />
    </div>
    <hr className="max-w-7xl mx-auto rounded w-full" />
    <BottomFooter />
  </section>
);

export default Footer;
