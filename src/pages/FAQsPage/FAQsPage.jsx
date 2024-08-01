import { useEffect } from "react";
import { FAQData } from "../../Data/FAQData/FAQPageData";
import { FaQuestion } from "react-icons/fa6";
import CustomTab from "../../components/CustomTab/CustomTab";
import CustomTabItem from "../../components/CustomTab/CustomTabItem";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { IoMdArrowRoundForward } from "react-icons/io";

const customTheme = true;

const FAQsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <div className="max-w-7xl mx-4 xl:mx-auto flex flex-row items-center justify-start gap-2 text-base font-semibold my-5 text-blue-500">
        <Link
          to={"/"}
          className="item flex items-center gap-2 text-gray-500 hover:text-gray-700 duration-150"
        >
          <HiHome />
          Home
        </Link>
        /<div className="item text-gray-900">FAQs</div>
      </div>
      <div className="flex flex-col gap-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center leading-tight font-bold">
          Frequently Asked Questions
        </h2>
        <p className="text-center sm:text-xl text-gray-900">
          Here, you'll find answers to common questions about our travel
          packages, pricing, accommodations, and support. If you have any
          further inquiries, feel free to reach out to our team for assistance.
        </p>
      </div>

      {/* FAQ Tabs */}
      <div className="mt-10 max-w-7xl mx-4 xl:mx-auto ">
        {/* <div className="text-center flex justify-center text-3xl ">
          <div>These are some of the most asked Questions</div>
        </div> */}
        <div className="my-4">
          <CustomTab customTheme={customTheme}>
            {FAQData.map((e, index) => (
              <CustomTabItem key={`Tab-${index}`} label={`${e.category}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-x-10 gap-y-4 my-10">
                  {e.qna.map((item, i) => (
                    <div key={`${e.category}-${i}`} className="flex gap-4">
                      <div className="flex rounded-full">
                        <span className=" flex text-sm text-blue-600 h-fit bg-blue-100 rounded-full p-2">
                          {<FaQuestion />}
                        </span>
                      </div>
                      <div className="flex flex-col gap-4">
                        <p className="text-lg font-semibold">{item.question}</p>
                        <p className=" text-justify">{item.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CustomTabItem>
            ))}
          </CustomTab>
        </div>
      </div>
      {/* Call to Action */}
      <div className="items-center max-w-7xl my-5 xl:mx-auto py-5">
        <div className="relative items-center mx-4 xl:mx-0 border-2 border-black">
          <div className="w-full justify-between flex flex-col md:flex-row md:inline-flex gap-4 lg:items-center p-10">
            <div className="max-w-xl">
              <span className="text-sm font-semibold uppercase ">
                More Querries
              </span>
              <p className="text-black font-extrabold mt-2 text-2xl sm:text-3xl tracking-tight">
                Can't find what you're looking for?
                <span className="block text-lg font-normal">Reach out.</span>
              </p>
            </div>
            <div className="flex items-center">
              <Link
                to={"/contact"}
                className="text-white w-full duration-300 focus:outline-none font-medium justify-center px-6 py-3 rounded-sm text-center focus-visible:outline-black lg:w-auto bg-blue-600 focus-visible:ring-black hover:bg-blue-700 group"
                href="/signup"
              >
                Contact Us
                {/* <IoMdArrowRoundForward className=" group-hover:translate-x-2 ease-linear duration-300" /> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsPage;
