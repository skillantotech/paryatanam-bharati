import { Link } from "react-router-dom";
import BrandLogo from "../../../public/assets/logo/Paryatanmbharati logo_PNG.png";
import { FaCheck, FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaRegUser } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";

const services = [
  "All-Inclusive Packages",
  "Customizable Itineraries",
  "Expert Guides",
  "24/7 Customer Support",
];

const SignUp = () => {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* <div className="flex flex-col lg:flex-row items-center justify-center"> */}
          {/* Ad card */}
          <div className="order-2 lg:order-1 relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
            <div className="absolute inset-0">
              <img
                className="object-cover object-center w-full h-full"
                // src="https://cdn.rareblocks.xyz/collection/celebration/images/signin/4/girl-thinking.jpg"
                src="https://images.pexels.com/photos/12912712/pexels-photo-12912712.jpeg"
                alt="signin image"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            <div className="relative">
              <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                <h3 className="text-4xl font-bold text-white">
                  Join 25k+ travelers & <br className="hidden xl:block" />
                  explore the world's best destinations with us!
                </h3>
                <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-green-500 rounded-full">
                        <FaCheck className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-lg font-medium text-white lg:whitespace-nowrap">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Signup Card */}
          <div className="order-1 lg:order-2 flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <div className="signupTitle flex flex-col gap-2">
                <div className="flex items-center justify-center">
                  <img className="h-16 mb-1" src={BrandLogo} alt="Brand logo" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-black text-center">
                  Create Your Account
                </h2>

                <p className="text-grey-700 text-center">
                  Just a few quick things to get started
                </p>
              </div>

              <form action="#" method="POST">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Full name{" "}
                    </label>
                    <div className="mt-1.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaRegUser className="text-lg" />
                        {/* <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg> */}
                      </div>

                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter your full name"
                        className="block w-full py-2.5 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-1.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <MdAlternateEmail className="text-xl" />
                      </div>

                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Enter email to get started"
                        className="block w-full py-2.5 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      Password
                    </label>

                    <div className="mt-1.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FiLock className="text-lg" />
                      </div>

                      <input
                        type="password"
                        name=""
                        id=""
                        placeholder="Enter your password"
                        className="block w-full py-2.5 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      Confirm Password
                    </label>

                    <div className="mt-1.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FiLock className="text-lg" />
                      </div>

                      <input
                        type="password"
                        name=""
                        id=""
                        placeholder="Re-enter your password"
                        className="block w-full py-2.5 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <div className="flex items-center my-2">
                <hr className="h-0 border-b border-solid border-gray-400 grow" />
                <p className="mx-4 text-gray-500">or</p>
                <hr className="h-0 border-b border-solid border-gray-400 grow" />
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <a className="flex items-center justify-center w-full py-3 text-sm font-medium transition ease-in-out duration-300 rounded-md text-gray-900 bg-slate-100 hover:bg-slate-200 active:bg-slate-50 border cursor-pointer">
                  {/* <img
                  className="h-5 mr-2"
                  src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                  alt=""
                /> */}
                  <FcGoogle className="text-2xl mr-2" />
                  Sign in with Google
                </a>
                <a className="flex items-center justify-center w-full py-3 text-sm font-medium transition ease-in-out duration-300 rounded-md text-white bg-black hover:bg-gray-800 active:bg-gray-900 cursor-pointer">
                  <FaApple className="text-2xl mr-2 text-white" />
                  Sign in with Apple
                </a>
              </div>

              <p className="mt-2 text-base text-gray-600">
                Already have an account?{" "}
                <Link
                  to={"/signin"}
                  title=""
                  className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                >
                  Login
                </Link>
              </p>

              <p className="mt-3 text-sm text-gray-600 text-justify">
                By clicking "Sign Up" above, you acknowledge that you will
                receive updates from the Paryatanam Bharati team and that you
                have read, understood, and agreed to our
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  {" "}
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
