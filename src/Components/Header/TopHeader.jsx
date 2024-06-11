import { IoCall, IoMail, IoArrowForwardOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function TopHeader() {
  return (
    <>
      <div className="TopHeader">
        <div className="h-8 hidden md:flex items-center overflow-hidden justify-between max-w-screen-xl mx-auto">
          <div className="TopLeft  text-slate-100 flex items-center">
            <div className="Contact h-8 flex items-center text-md">
              <IoCall className="ml-5 mr-2 text-blue-500 text-lg" />
              +91 63703 02039
            </div>
            <span className="ml-4 h-8  flex items-center text-xl">
              <RxDividerVertical className="text-[28px] text-gray-500" />
            </span>
            <div className="Email h-8 flex items-center text-md ml-4">
              {" "}
              <IoMail className=" mr-2 text-blue-500 text-xl" />
              <a href="mailto:info@paryatanambharati.com">
                info@paryatanambharati.com{" "}
              </a>
            </div>
          </div>
          <div className="SocialLinks flex gap-3 mr-5 text-white text-xl items-center">
            <Link className=" hover:scale-110 ease-linear duration-200">
              <FaFacebook />
            </Link>
            <Link className=" hover:scale-110 ease-linear duration-200">
              <FaInstagram />
            </Link>
            <Link className=" hover:scale-110 ease-linear duration-200">
              <FaXTwitter />
            </Link>
            <Link className=" hover:scale-110 ease-linear duration-200">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
