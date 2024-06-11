import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// import TopHeader from "./Components/Header/TopHeader"
import Header from "./Components/Header/Header";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import DiscoverIndia from "./pages/DiscoverIndia";
import ArtAndCulture from "./pages/ArtAndCulture";
import Cuisine from "./pages/Cuisine";
import Blogs from "./pages/Blogs";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Footer from "./Components/Footer/Footer";
import { NavbarMenu, DiscoverSubMenu } from "./Components/Header/NavData";
import Rajasthan from "./pages/Rajasthan";
import Punjab from "./pages/Punjab";
// import PropTypes from "prop-types";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/discover-india" element={<DiscoverIndia />} />
            <Route path="/art-culture" element={<ArtAndCulture />} />
            <Route path="/cuisine" element={<Cuisine />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/faq" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/login" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          {DiscoverSubMenu[0].submenu_items.map((e, i) => (
            <Route key={i} path={e.link} element={<Rajasthan />} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <div className="mt-[400px]"></div>
    <Footer />
  </>
);

export default App;
