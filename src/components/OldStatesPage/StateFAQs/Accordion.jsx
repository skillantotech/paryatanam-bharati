import PropTypes from "prop-types";

const Accordion = ({ id, question, answer, isOpen, setOpenAccordionId }) => {
  const toggleAccordion = () => {
    setOpenAccordionId(isOpen ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto mb-4" onClick={toggleAccordion}>
      <div className="w-full h-1 bg-gray-300">
        <div
          className={`h-1 bg-blue-500 ${isOpen ? "w-full" : "w-0"}`}
          style={{ transition: "width 0.3s ease-in-out" }}
        ></div>
      </div>
      <div className="grid grid-cols-[auto_1fr_auto] gap-y-4 gap-x-4 sm:gap-y-8 sm:gap-x-6 border-t-4 border-gray-300 shadow-lg rounded-tl-lg p-4 sm:p-6 pt-4 sm:pt-6 items-center">
        <p className="text-blue-500 text-lg sm:text-xl font-medium ">{id}</p>
        <p className="text-black-500 text-lg sm:text-xl font-medium">
          {question}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`w-5 h-5 sm:w-6 sm:h-6 stroke-current text-gray-500 transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
        <div
          className={`col-span-2 overflow-hidden transition-max-height ease duration-500 ${
            isOpen ? "max-h-60 mb-4 sm:mb-6" : "max-h-0"
          }`}
        >
          <p className="leading-loose mb-4 sm:mb-6">{answer}</p>
        </div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setOpenAccordionId: PropTypes.func.isRequired,
};

export default Accordion;
