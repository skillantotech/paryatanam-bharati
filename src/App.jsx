import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import About from "./pages/About";
import ArtAndCulture from "./pages/ArtAndCulture";
import Cuisine from "./pages/CuisinePage/CuisinePage";
import BlogsPage from "./pages/BlogsPage/BlogsPage";
import FAQs from "./pages/FAQsPage/FAQsPage";
import Contact from "./pages/ContactPage/ContactPage";
import NotFound from "./pages/NotFound";
import MainLayout from "./Layouts/MainLayout";
import StatesPage from "./pages/StatesPage/StatesPage";
import BlogDetails from "./components/BlogDetailsPage/BlogDetails";
import PlaceDetailsPage from "./pages/PlaceDetailsPage/PlaceDetailsPage";
import PackagesPage from "./pages/PackagesPage/PackagesPage";
import CultureDetails from "./components/CultureDetails/CultureDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route element={<MainLayout />}>
          <Route index path="" element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="discover-india/place" element={<StatesPage />} />
          <Route path="place-details" element={<PlaceDetailsPage />} />

          <Route path="packages" element={<PackagesPage />} />

          <Route path="art-culture" element={<ArtAndCulture />} />
          <Route path="culturedetails" element={<CultureDetails />} />

          <Route path="cuisine" element={<Cuisine />} />

          <Route path="blogs" element={<BlogsPage />} />
          <Route path="blogDetails/:Title" element={<BlogDetails />} />

          <Route path="faqs" element={<FAQs />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="signin" element={<SignIn />} />
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
