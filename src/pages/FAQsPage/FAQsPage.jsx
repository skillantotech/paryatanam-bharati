import { useEffect } from "react";
import { FAQData } from "../../Data/FAQData/FAQPageData";
import { FaQuestion } from "react-icons/fa6";
import CustomTab from "../../components/CustomTab/CustomTab";
import CustomTabItem from "../../components/CustomTab/CustomTabItem";
import { Link } from "react-router-dom";

const customTheme = true;

const FAQsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="h-[68vh] flex items-center bg-no-repeat bg-cover bg-[url('https://nebulaaitsolutions.com/assets/images/faq-banner.webp')]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mx-4 leading-tight font-bold">
              Frequently Asked Questions
            </h2>
            <h3 className="mt-3 lg:text-lg font-semibold mx-4">
              Quick answers to questions you may have about Untitled Ul and
              billing. Can't find what you're looking for?
            </h3>
            <Link
              to="/contact"
              className="mt-3 px-4 py-3 text-lg rounded font-semibold text-md bg-blue-600 hover:bg-blue-700 duration-150 text-white w-fit"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
      <div className="mt-8 max-w-7xl mx-4 xl:mx-auto">
        <div className="text-center flex justify-center text-3xl ">
          <div>These are some of the most asked Questions</div>
        </div>
        <div className="my-4">
          <CustomTab customTheme={customTheme}>
            {FAQData.map((e, index) => (
              <CustomTabItem key={`Tab-${index}`} label={`${e.category}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-x-10 gap-y-4 my-5">
                  {e.qna.map((item, i) => (
                    <div key={`${e.category}-${i}`} className="flex gap-4">
                      <div className="flex rounded-full">
                        <span className=" flex text-sm text-blue-600 h-fit bg-blue-100 rounded-full p-2">
                          {<FaQuestion />}
                        </span>
                      </div>
                      <div className="flex flex-col gap-4">
                        <p className="text-lg font-bold">{item.question}</p>
                        <p className="font-semibold text-justify">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CustomTabItem>
            ))}
          </CustomTab>
        </div>
      </div>
    </>
  );
};

export default FAQsPage;
