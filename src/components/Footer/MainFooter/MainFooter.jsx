// import "./MainFooter.css";
import BrandLogo from "../../../../public/assets/logo/Paryatanmbharati logo_PNG.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function MainFooter() {
  return (
    <div className="mx-auto max-w-7xl row flex flex-wrap justify-between flex-row gap-3 text-gray-300">
      <div className="logo flex flex-col w-[220px] gap-y-3">
        <div className="h-[70px] overflow-hidden">
          <img
            src={BrandLogo}
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
        <div className="text-sm">
          Discover the rich tapestry of India through our curated tourism
          experiences. Let us be your trusted companion in exploring the wonders
          of this diverse land.
        </div>
        <div className="flex text-2xl gap-3 my-2 text-gray-200 ">
          <Link>
            <FaFacebook className=" hover:text-white hover:scale-110 transition-all duration-300 ease-linear" />
          </Link>
          <Link>
            <FaInstagram className=" hover:text-white hover:scale-110 transition-all duration-300 ease-linear" />
          </Link>
          <Link>
            <FaLinkedin className=" hover:text-white hover:scale-110 transition-all duration-300 ease-linear" />
          </Link>
          <Link>
            <FaXTwitter className=" hover:text-white hover:scale-110 transition-all duration-300 ease-linear" />
          </Link>
          <Link>
            <FaYoutube className=" hover:text-white hover:scale-110 transition-all duration-300 ease-linear" />
          </Link>
        </div>
      </div>
      <div className="column flex flex-col w-40 sm:justify-center gap-y-2">
        <div href="" className="text-lg font-semibold mb-1">
          Useful Links
        </div>
        <a href="" className="hover:text-white ease-linear duration-150">
          Explore India
        </a>
        <a href="" className="hover:text-white ease-linear duration-150">
          Book Now
        </a>
        <a href="" className="hover:text-white ease-linear duration-150">
          Travel Tips
        </a>
        <a href="" className="hover:text-white ease-linear duration-150">
          Contact Us
        </a>
        <a href="" className="hover:text-white ease-linear duration-150">
          FAQs
        </a>
      </div>
      <div className="column flex flex-col w-40 sm:justify-center gap-y-2">
        <div
          className="text-lg font-semibold mb-1"
        >
          Discover India
        </div>
        <a href="" className="hover:text-white ease-linear duration-150">Explore India</a>
        <a href="" className="hover:text-white ease-linear duration-150">Book Now</a>
        <a href="" className="hover:text-white ease-linear duration-150">Travel Tips</a>
        <a href="" className="hover:text-white ease-linear duration-150">Contact Us</a>
        <a href="" className="hover:text-white ease-linear duration-150">FAQs</a>
      </div>
      <div className="column flex flex-col w-40 sm:justify-center gap-y-2">
        <div
          className="text-lg font-semibold mb-1"
        >
          Top Destinations
        </div>
        <a href="" className="hover:text-white ease-linear duration-150">About Us</a>
        <a href="" className="hover:text-white ease-linear duration-150">Blog</a>
        <a href="" className="hover:text-white ease-linear duration-150">Events</a>
        <a href="" className="hover:text-white ease-linear duration-150">Gallery</a>
        <a href="" className="hover:text-white ease-linear duration-150">Testimonials</a>
      </div>
      <div className="column flex flex-col w-40 sm:justify-center gap-y-2">
        <div
          className="text-lg font-semibold mb-1"
        >
          Travel Resources
        </div>
        <a href="" className="hover:text-white ease-linear duration-150">FAQs</a>
        <a href="" className="hover:text-white ease-linear duration-150">Contact Us</a>
        <a href="" className="hover:text-white ease-linear duration-150">Terms & Conditions</a>
        <a href="" className="hover:text-white ease-linear duration-150">Privacy Policy</a>
        <a href="" className="hover:text-white ease-linear duration-150">Cookie Policy</a>
      </div>
      {/* <div className="column flex flex-col w-40 sm:justify-center">
        <a href="" className=" font-semibold mb-1">
          Follow Us
        </a>
        <div className="flex flex-col gap-1">
          <a href="" className="relative group">
            <span className="absolute group-hover:translate-x-6 transition-all duration-300">
              Facebook
            </span>
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-xl ">
              <FaFacebook />
            </span>
          </a>
          <a href="" className="relative group">
            <span className="absolute group-hover:translate-x-6 transition-all duration-300 ">
              Instagram
            </span>
            <span className=" opacity-0 group-hover:opacity-100 transition-all duration-300 text-xl ">
              <FaInstagram />
            </span>
          </a>
          <a href="" className="relative group">
            <span className="absolute group-hover:translate-x-6 transition-all duration-300">
              X
            </span>
            <span className=" opacity-0 group-hover:opacity-100 transition-all duration-300 left-[-2px] text-xl top-[50%] translate-y-[-50%]">
              <FaXTwitter />
            </span>
          </a>
          <a href="" className="relative group">
            <span className="absolute group-hover:translate-x-6 transition-all duration-300">
              LinkedIn
            </span>
            <span className=" opacity-0 group-hover:opacity-100 transition-all duration-300 left-[-2px] text-xl top-[50%] translate-y-[-50%]">
              <FaLinkedin />
            </span>
          </a>
          <a href="" className="relative group">
            <span className="absolute group-hover:translate-x-6 transition-all duration-300">
              YouTube
            </span>
            <span className=" opacity-0 group-hover:opacity-100 transition-all duration-300 left-[-2px] text-xl top-[50%] translate-y-[-50%]">
              <FaYoutube />
            </span>
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default MainFooter;
