import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
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
import Footer from "./components/Footer/Footer";
// import PropTypes from "prop-types";

function App() {
  return (
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
      </Routes>
    </BrowserRouter>
  );
}

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           index
//           path="/"
//           element={
//             <>
//               <Header /> <Home /> <Footer />
//             </>
//           }
//         />
//         <Route path="/login" element={<LogIn />} />
//         <Route path="/sign-up" element={<SignUp />} />
//         <Route
//           path="/about"
//           element={
//             <>
//               <Header /> <About /> <Footer />
//             </>
//           }
//         />
//         <Route
//           path="/discover-india"
//           element={
//             <>
//               <Header /> <DiscoverIndia /> <Footer />
//             </>
//           }
//         />
//         <Route
//           path="/art-culture"
//           element={
//             <>
//               <Header /> <ArtAndCulture /> <Footer />
//             </>
//           }
//         />
//         <Route
//           path="/cuisine"
//           element={
//             <>
//               <Header /> <Cuisine /> <Footer />
//             </>
//           }
//         />
//         <Route
//           path="/blogs"
//           element={
//             <>
//               <Header /> <Blogs /> <Footer />
//             </>
//           }
//         />
//         <Route
//           path="/faq"
//           element={
//             <>
//               <Header /> <FAQs /> <Footer />
//             </>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <>
//               <Header /> <Contact /> <Footer />
//             </>
//           }
//         />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App;
