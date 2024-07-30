import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={item.id} className="border border-gray-200 rounded-lg dark:border-gray-600">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between w-full p-5 text-left text-gray-900 bg-white border-b border-gray-200 rounded-t-lg dark:bg-gray-600 dark:border-gray-500 dark:text-white"
          >
            <span className="font-semibold">{item.title}</span>
            <svg
              className={`w-4 h-4 transform transition-transform ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeIndex === index && (
            <div className="p-5 bg-white dark:bg-gray-700">
              <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const danceDetails = [
    {
      id: "dance-1",
      title: "Bharatanatyam",
      description:
        "A classical dance form from Tamil Nadu, known for its fixed upper torso, bent legs, and intricate footwork.",
    },
    {
      id: "dance-2",
      title: "Kathak",
      description:
        "A North Indian dance form characterized by rhythmic foot movements, spins, and expressive gestures.",
    },
    {
      id: "dance-3",
      title: "Odissi",
      description:
        "A dance form from Odisha that expresses religious stories and spiritual themes.",
    },
    {
      id: "dance-4",
      title: "Kuchipudi",
      description:
        "A classical dance form from Andhra Pradesh known for its graceful movements and strong narrative.",
    },
    {
      id: "dance-5",
      title: "Kathakali",
      description:
        "A dance form from Kerala known for its colorful makeup, costumes, and face masks.",
    },
    {
        id: "dance-6",
        title: "Kathakali",
        description:
          "A dance form from Kerala known for its colorful makeup, costumes, and face masks.",
      },
      {
        id: "dance-7",
        title: "Kathakali",
        description:
          "A dance form from Kerala known for its colorful makeup, costumes, and face masks.",
      },
      {
        id: "dance-8",
        title: "Kathakali",
        description:
          "A dance form from Kerala known for its colorful makeup, costumes, and face masks.",
      },
      {
        id: "dance-9",
        title: "Kathakali",
        description:
          "A dance form from Kerala known for its colorful makeup, costumes, and face masks.",
      },
  ];

  return (
    <div>
      <button
        onClick={toggleModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-12 mb-12"
        type="button"
      >
        Toggle modal
      </button>

      {isOpen && (
        <div
          id="select-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-1 flex items-center justify-center overflow-hidden h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-md max-h-[70%] scrollbar-hidden overflow-y-scroll">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Classical Dance Forms
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={toggleModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5  ">
                <Accordion items={danceDetails} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;


