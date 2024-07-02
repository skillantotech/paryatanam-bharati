import { Link } from "react-router-dom";
import { FaCheck, FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdAlternateEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";

const services = [
  "All-Inclusive Packages",
  "Customizable Itineraries",
  "Expert Guides",
  "24/7 Customer Support",
];

const LogIn = () => {
  return (
    <>
      {/* <div className="text-xl text-center">LogIn</div>
      <p>Go back to <Link to={"/"} className="text-blue-500">Home Page</Link></p> */}
      {/* <div className="bg-white rounded-lg py-5">
        <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
          <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
            <div className="flex items-center justify-center w-full lg:p-12">
              <div className="flex items-center xl:p-10">
                <form className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                  <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                    Sign In
                  </h3>
                  <p className="mb-4 text-grey-700">
                    Enter your email and password
                  </p>
                  <a className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
                    <img
                      className="h-5 mr-2"
                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                      alt=""
                    />
                    Sign in with Google
                  </a>
                  <div className="flex items-center mb-3">
                    <hr className="h-0 border-b border-solid border-grey-500 grow" />
                    <p className="mx-4 text-grey-600">or</p>
                    <hr className="h-0 border-b border-solid border-grey-500 grow" />
                  </div>
                  <label
                    htmlFor="email"
                    className="mb-2 text-sm text-start text-grey-900"
                  >
                    Email*
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="mail@loopple.com"
                    className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  />
                  <label
                    htmlFor="password"
                    className="mb-2 text-sm text-start text-grey-900"
                  >
                    Password*
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter a password"
                    className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  />
                  <div className="flex flex-row justify-between mb-8">
                    <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-5 h-5 bg-white border-2 rounded-sm border-grey-500 peer peer-checked:border-0 peer-checked:bg-purple-blue-500">
                        <img
                          className=""
                          src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
                          alt="tick"
                        />
                      </div>
                      <span className="ml-3 text-sm font-normal text-grey-900">
                        Keep me logged in
                      </span>
                    </label>
                    <a
                      href="javascript:void(0)"
                      className="mr-4 text-sm font-medium text-purple-blue-500"
                    >
                      Forget password?
                    </a>
                  </div>
                  <button className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500">
                    Sign In
                  </button>
                  <p className="text-sm leading-relaxed text-grey-900">
                    Not registered yet?{" "}
                    <a
                      href="javascript:void(0)"
                      className="font-bold text-grey-700"
                    >
                      Create an Account
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* 2nd component */}
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

          {/* Signin Card */}
          <div className="order-1 lg:order-2 flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 h-dvh">
            <div className="flex flex-col gap-4 xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <div className="signinTitle flex flex-col gap-2">
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-black text-center">
                  Sign in
                </h2>

                <p className="text-grey-700 text-center">
                  to start your adventure with us!
                </p>
              </div>

              <a className="flex items-center justify-center w-full py-4 text-sm font-medium transition ease-in-out duration-300 rounded-md text-gray-900 bg-slate-100 hover:bg-slate-200 active:bg-slate-50 cursor-pointer">
                {/* <img
                  className="h-5 mr-2"
                  src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                  alt=""
                /> */}
                <FcGoogle className="text-2xl mr-2" />
                Sign in with Google
              </a>

              <a className="flex items-center justify-center w-full py-4 text-sm font-medium transition ease-in-out duration-300 rounded-md text-white bg-black hover:bg-gray-800 active:bg-gray-900 cursor-pointer">
                <FaApple className="text-2xl mr-2 text-white" />
                Sign in with Apple
              </a>

              <div className="flex items-center my-3">
                <hr className="h-0 border-b border-solid border-grey-500 grow" />
                <p className="mx-4 text-grey-600">or</p>
                <hr className="h-0 border-b border-solid border-grey-500 grow" />
              </div>

              <form action="#" method="POST">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg> */}
                        <MdAlternateEmail className="text-xl" />
                      </div>

                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Enter email to get started"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Password{" "}
                      </label>

                      <a
                        href="#"
                        title=""
                        className="text-sm font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                      >
                        {" "}
                        Forgot password?{" "}
                      </a>
                    </div>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                        />
                      </svg> */}
                        <FiLock className="text-xl" />
                      </div>

                      <input
                        type="password"
                        name=""
                        id=""
                        placeholder="Enter your password"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                    >
                      Sign in
                    </button>
                  </div>
                </div>
              </form>

              {/* <div className="mt-3 space-y-3">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                  <div className="absolute inset-y-0 left-0 p-4">
                    <svg
                      className="w-6 h-6 text-rose-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                    </svg>
                  </div>
                  Sign in with Google
                </button>

                <button
                  type="button"
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                  <div className="absolute inset-y-0 left-0 p-4">
                    <svg
                      className="w-6 h-6 text-[#2563EB]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </div>
                  Sign in with Facebook
                </button>
              </div> */}

              <p className="mt-2 text-base text-gray-600">
                Don't have an account?{" "}
                <Link
                  to={"/signup"}
                  title=""
                  className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                >
                  Create a free account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogIn;
