import React from "react";
import "./MainFooter.css";
import BrandLogo from "../../../../public/assets/paryatanam-logo.svg";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function MainFooter() {
  return (
    <div className=" max-w-7xl row flex flex-wrap justify-between flex-row gap-3">
      <div className="logo flex flex-col w-[220px] gap-y-3">
        <div className="h-[70px] overflow-hidden relative">
          <img src={BrandLogo} alt="" className="absolute top-[-77.5px] -left-[12px]" />
        </div>
        <div className="text-sm">Discover the rich tapestry of India through our curated tourism experiences. Let us be your trusted companion in exploring the wonders of this diverse land.
        </div>
        <div className="flex text-2xl gap-3 my-2 text-gray-700 ">
        <FaFacebook className=" hover:text-slate-950 transition-all duration-300 ease-linear"/>
        <FaInstagram className=" hover:text-slate-950 transition-all duration-300 ease-linear"/>
        <FaLinkedin className=" hover:text-slate-950 transition-all duration-300 ease-linear"/>
        <FaXTwitter className=" hover:text-slate-950 transition-all duration-300 ease-linear"/>
        <FaYoutube className=" hover:text-slate-950 transition-all duration-300 ease-linear"/>
        </div>
      </div>
      <div className="column flex flex-col w-40 sm:justify-center gap-y-2">
        <a href="" className=" text-lg font-semibold mb-1">
          Useful Links
        </a>
        <a href="">Explore India</a>
        <a href="">Book Now</a>
        <a href="">Travel Tips</a>
        <a href="">Contact Us</a>
        <a href="">FAQs</a>
      </div>
      <div className="column flex flex-col w-40 sm:justify-center gap-y-2">
        <a href="" className=" text-lg font-semibold mb-2">
          Discover India
        </a>
        <a href="">Explore India</a>
        <a href="">Book Now</a>
        <a href="">Travel Tips</a>
        <a href="">Contact Us</a>
        <a href="">FAQs</a>
      </div>
      <div className="column flex flex-col w-40 sm:justify-center gap-y-2">
        <a href="" className=" text-lg font-semibold mb-1">
          Top Destinations
        </a>
        <a href="">About Us</a>
        <a href="">Blog</a>
        <a href="">Events</a>
        <a href="">Gallery</a>
        <a href="">Testimonials</a>
      </div>
      <div className="column flex flex-col w-40 sm:justify-center gap-y-2">
        <a href="" className=" text-lg font-semibold mb-1">
          Travel Resources
        </a>
        <a href="">FAQs</a>
        <a href="">Contact Us</a>
        <a href="">Terms & Conditions</a>
        <a href="">Privacy Policy</a>
        <a href="">Cookie Policy</a>
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
