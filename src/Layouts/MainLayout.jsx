import { Outlet } from "react-router-dom";
import PreHeader from "../components/PreHeader/PreHeader";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <PreHeader />
      <Header />
      <Outlet />
      {/* <div className="h-lvh"></div> */}
      <Footer />
    </>
  );
};

export default MainLayout;
