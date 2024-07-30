import React from "react";

const danceLists = {
  "Classical Dance": {
    description: "Classical dance encompasses refined and structured forms like ballet and Bharatanatyam, characterized by precise techniques, historical significance, and deep cultural roots.",
    dances: [
      "Bharatanatyam",
      "Kathak",
      "Odissi",
      "Kuchipudi",
      "Kathakali",
      "Manipuri",
      "Mohiniyattam",
      "Sattriya",
    ],
  },
  "Folk Dance": {
    description: "Folk dance is an expressive and communal form, reflecting the traditions, rituals, and stories of indigenous cultures.",
    dances: [
      "Bhangra",
      "Gidda",
      "Garba",
      "Dandiya Raas",
      "Ghoomar",
      "Kalbelia",
      "Raas Leela",
      "Chhau",
      "Bihu",
      "Lavani",
      "Koli",
      "Dollu Kunitha",
      "Yakshagana",
      "Karaga",
      "Padayani",
      "Theyyam",
      "Pulikali",
      "Charkula",
      "Gaur Maria",
      "Bhagoria",
      "Ghoom",
      "Gambhira",
      "Nati",
      "Rouff",
      "Hikat",
      "Cheraw",
      "Chang Lo",
      "Hojagiri",
      "Thang Ta",
      "Pung Cholom",
      "Kummi",
      "Karakattam",
      "Mayilattam",
      "Bamboo Dance",
      "Bagurumba",
      "Thapetta Gullu",
      "Veeranatyam",
      "Sambalpuri",
      "Gotipua",
      "Baul",
      "Jatra",
      "Jhumar",
      "Phag",
      "Jat-Jatin",
      "Purulia Chhau",
      "Saila",
      "Panthi",
      "Gendi",
      "Karma",
      "Dandari",
      "Matki",
      "Grida",
      "Lota",
      "Fugdi",
      "Dhalo",
      "Veeragase",
      "Suggi Kunitha",
      "Pavakathakali",
      "Ottamthullal",
      "Chavittunatakom",
      "Oyilattam",
      "Poikkal Kuthirai",
      "Tera Tali",
      "Bhawai",
      "Jhoomar",
      "Saang",
      "Ghumar",
      "Kinnauri Nati",
      "Cham",
      "Mask Dance",
    ],
  },
  "Tribal Dance": {
    description: "Tribal dance is an expressive and communal form, reflecting the traditions, rituals, and stories of indigenous cultures.",
    dances: [
      "Bagurumba",
      "Chang Lo",
      "Cheraw",
      "Gaur Maria",
      "Hojagiri",
      "Karma",
      "Kinnauri Nati",
      "Lota",
      "Matki",
      "Panthi",
      "Pavakathakali",
      "Saila",
      "Thang Ta",
      "Therukoothu",
    ],
  },
};

const Modal = ({ dance, onClose }) => {
  const { description, dances } = danceLists[dance.name] || {};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-[400px] h-[350px] overflow-hidden scrollbar-hidden">
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {dance.name}
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
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
        <div className="p-4 overflow-auto h-full">
          <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            {dances?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;




