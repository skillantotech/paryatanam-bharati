import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
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
import MainLayout from "./Layouts/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route element={<MainLayout />}>
          <Route index path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="discover-india" element={<DiscoverIndia />} />
          <Route path="art-culture" element={<ArtAndCulture />} />
          <Route path="cuisine" element={<Cuisine />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="faq" element={<FAQs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="login" element={<LogIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
