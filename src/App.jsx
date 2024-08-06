import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import About from "./pages/About";
import ArtAndCulturePage from "./pages/ArtAndCulturePage/ArtAndCulturePage";
import CuisinePage from "./pages/CuisinePage/CuisinePage";
import BlogsPage from "./pages/BlogsPage/BlogsPage";
import FAQsPage from "./pages/FAQsPage/FAQsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import NotFound from "./pages/NotFound";
import MainLayout from "./Layouts/MainLayout";
import StatesPage from "./pages/StatesPage/StatesPage";
import BlogDetails from "./components/BlogDetailsPage/BlogDetails";
import PlaceDetailsPage from "./pages/PlaceDetailsPage/PlaceDetailsPage";
import PackagesPage from "./pages/PackagesPage/PackagesPage";
import CultureDetailsPage from "./pages/CultureDetailsPage/CultureDetailsPage";
import Railways from "./pages/TransportationPage/Railways";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route element={<MainLayout />}>
          <Route index path="" element={<HomePage />} />
          <Route path="about" element={<About />} />

          <Route path="discover-india/place">
            <Route path="" element={<StatesPage />} />
            <Route path="place-details" element={<PlaceDetailsPage />} />
          </Route>

          <Route path='rail' element={<Railways />} />

          <Route path="packages">
            <Route path="" element={<PackagesPage />} />
            <Route path="package-details" element={<PlaceDetailsPage />} />
          </Route>

          <Route path="art-culture">
            <Route path="" element={<ArtAndCulturePage />} />
            <Route path="culture-details" element={<CultureDetailsPage />} />
          </Route>

          <Route path="cuisine">
            <Route path="" element={<CuisinePage />} />
            <Route path="cuisine-details" element={<CultureDetailsPage />} />
          </Route>

          <Route path="blogs">
            <Route path="" element={<BlogsPage />} />
            <Route path=":Title" element={<BlogDetails />} />
          </Route>

          <Route path="faqs" element={<FAQsPage />} />
          <Route path="contact" element={<ContactPage />} />
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
