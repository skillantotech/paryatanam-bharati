import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Accordion } from "flowbite-react";
import { Link } from "react-router-dom";

const customTheme = {
  root: {
    base: "divide-y divide-gray-200 dark:divide-gray-700 dark:border-gray-700",
    flush: {
      off: "rounded-lg",
      on: "border-b",
    },
  },
  content: {
    base: "p-5 first:rounded-t-lg last:rounded-b-lg dark:bg-gray-900",
  },
  title: {
    arrow: {
      base: "h-6 w-6 shrink-0",
      open: {
        off: "",
        on: "rotate-180",
      },
    },
    base: "flex w-full items-center justify-between p-5 text-left font-medium text-gray-500 first:rounded-t-lg last:rounded-b-lg dark:text-gray-400",
    flush: {
      off: "hover:bg-gray-100 dark:hover:bg-gray-800 ",
      on: "bg-transparent dark:bg-transparent",
    },
    heading: "",
    open: {
      off: "",
      on: "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white",
    },
  },
};

const data = {
  dance: [
    {
      type: "Classical Dance",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",
      list: [
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
    {
      type: "Folk Dance",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: [
        "Bhangra",
        "Ghoomar",
        "Garba",
        "Dandiya Raas",
        "Lavani",
        "Bihu",
        "Rouff",
        "Charkula",
        "Kummi",
        "Kalbelia",
        "Gidda",
        "Dollu Kunitha",
        "Pandavani",
        "Yakshagana",
        "Tarangamel",
      ],
    },
    {
      type: "Tribal Dance",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: [
        "Santhali",
        "Ghumura",
        "Chhau",
        "Bihu",
        "Lavani",
        "Bhagoria",
        "Karma Naach",
        "Bison Horn Maria",
        "Padhar",
        "Dongra",
        "Saila",
        "Kaksar",
        "Hojagiri",
        "Laho",
        "Chang Lo",
        "Wancho",
        "Sidi",
        "Raut Nacha",
      ],
    },
  ],
  fairsFestivals: [
    {
      type: "Cultural Festivals",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: ["Diwali", "Holi", "Navratri"],
    },
    {
      type: "Music Festivals",
      list: ["Sunburn", "NH7 Weekender", "Ragasthan"],
    },
    {
      type: "Dance Festivals",
      list: [
        "Khajuraho Dance Festival",
        "Konark Dance Festival",
        "Natyanjali Dance Festival",
      ],
    },
  ],
  archaeology: [
    {
      type: "Historical Sites",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: ["Hampi", "Ajanta Caves", "Ellora Caves"],
    },
    {
      type: "Archaeological Museums",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: ["National Museum", "Indian Museum", "Salar Jung Museum"],
    },
    {
      type: "Ancient Ruins",
      list: ["Nalanda", "Mahabalipuram", "Fatehpur Sikri"],
    },
  ],
  music: [
    {
      type: "Classical Music",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: ["Hindustani Classical", "Carnatic Classical", "Dhrupad"],
    },
    {
      type: "Folk Music",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: ["Baul", "Lavani", "Bihu"],
    },

    {
      type: "Contemporary Music",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: ["Bollywood", "Indie Pop", "Rock"],
    },
  ],
  handicrafts: [
    {
      type: "Textiles",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: ["Banarasi Silk", "Kanchipuram Silk", "Pashmina"],
    },
    {
      type: "Woodwork",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: [
        "Saharanpur Woodcraft",
        "Kashmir Walnut Woodwork",
        "Sandalwood Carving",
      ],
    },
    {
      type: "Metal Crafts",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: ["Dhokra", "Bidriware", "Kamrupi Brass"],
    },
  ],
  literature: [
    {
      type: "Ancient Literature",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: ["Mahabharata", "Ramayana", "Vedas"],
    },
    {
      type: "Medieval Literature",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: [
        "Kabir's Dohas",
        "Tulsidas' Ramcharitmanas",
        "Mirza Ghalib's Ghazals",
      ],
    },
    {
      type: "Modern Literature",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: [
        "Rabindranath Tagore's Works",
        "R.K. Narayan's Works",
        "Arundhati Roy's Works",
      ],
    },
  ],
  monuments: [
    {
      type: "World Heritage Sites",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: ["Taj Mahal", "Qutub Minar", "Red Fort"],
    },
    {
      type: "Forts and Palaces",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: ["Mehrangarh Fort", "City Palace", "Hawa Mahal"],
    },
    {
      type: "Religious Monuments",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: ["Golden Temple", "Brihadeeswara Temple", "Sun Temple"],
    },
  ],
  heritage: [
    {
      type: "Natural Heritage",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: ["Western Ghats", "Sundarbans", "Nanda Devi"],
    },
    {
      type: "Cultural Heritage",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: ["Rajasthan's Forts", "Jaipur City", "Mahabalipuram"],
    },
    {
      type: "Mixed Heritage",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: [
        "Kaziranga National Park",
        "Keoladeo National Park",
        "Manas Wildlife Sanctuary",
      ],
    },
  ],
  painting: [
    {
      type: "Traditional Paintings",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: ["Madhubani", "Warli", "Pattachitra"],
    },
    {
      type: "Miniature Paintings",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: ["Rajput", "Mughal", "Pahari"],
    },
    {
      type: "Modern Art",
      img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400",

      list: ["Raja Ravi Varma", "Amrita Sher-Gil", "M.F. Husain"],
    },
  ],
};

function ClrOfCulture() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const [openIndex, setOpenIndex] = useState(0); // Show the first section by default

  const openModal = (section) => {
    setCurrentSection(section);
    setModalIsOpen(true);
    if (section === "dance") {
      setOpenIndex(0); // Open the first accordion panel by default for "dance"
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentSection("");
    setOpenIndex(null);
  };

  const handleAccordionToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <>
      <div className="max-w-7xl mx-4 xl:mx-auto p-4">
        <div>
          <h2 className="text-3xl font-bold text-center pb-4">
            Colour of Culture
          </h2>
          <p className="text-xl pb-6 text-center">
            From splendid paintings to beautiful wood crafts and textiles, India
            resounds with a rich and unique heritage.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 place-items-center">
          <div
            className="w-full group relative cursor-pointer"
            onClick={() => openModal("dance")}
          >
            <div className="rounded overflow-hidden h-72 w-full">
              <img
                className="h-full w-full object-cover group-hover:brightness-100 group-hover:scale-110 brightness-[0.8] duration-500 ease-in-out"
                src="https://images.unsplash.com/photo-1479813183133-f2e9b38ed6c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRhbmNlJTIwaW4lMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Dance"
              />
            </div>
            <div className="w-52 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button className="border-2 text-white p-4 w-full rounded text-xl font-bold group-hover:font-semibold  duration-500 ease-in-out group-hover:text-black group-hover:bg-white ">
                Dance
              </button>
            </div>
          </div>
          <div
            className="w-full group relative cursor-pointer"
            onClick={() => openModal("fairsFestivals")}
          >
            <div className="rounded overflow-hidden h-96 w-full">
              <img
                className="h-full w-full object-cover group-hover:brightness-100 group-hover:scale-110 brightness-[0.8] duration-500 ease-in-out"
                src="https://images.unsplash.com/photo-1706188024768-886ba6a876b4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJjaGFlb2xvZ3l8ZW58MHx8MHx8fDA%3D"
                alt="Fairs & Festivals"
              />
            </div>
            <div className="w-52 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button className="border-2 text-white p-4 w-full rounded text-xl font-bold group-hover:font-semibold duration-500 ease-in-out group-hover:text-black group-hover:bg-white">
                Fairs & Festivals
              </button>
            </div>
          </div>

          <div
            className="w-full group relative cursor-pointer"
            onClick={() => openModal("archaeology")}
          >
            <div className="rounded overflow-hidden h-80 w-full">
              <img
                className="rounded h-full w-full object-cover group-hover:brightness-100 group-hover:scale-110 brightness-[0.8] duration-500 ease-in-out"
                src="https://cdn.pixabay.com/photo/2024/06/06/04/33/temple-8811724_1280.jpg"
                alt="Archaeology"
              />
            </div>
            <div className="w-52 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button className="border-2 text-white p-4 w-full rounded text-xl font-bold group-hover:font-semibold  duration-500 ease-in-out group-hover:text-black group-hover:bg-white">
                Archaeology
              </button>
            </div>
          </div>

          <div
            className="w-full group relative cursor-pointer"
            onClick={() => openModal("music")}
          >
            <div className="rounded overflow-hidden h-96 w-full">
              <img
                className="rounded h-full w-full object-cover group-hover:brightness-100 group-hover:scale-110 brightness-[0.8] duration-500 ease-in-out"
                src="https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWN8ZW58MHx8MHx8fDA%3D"
                alt="Music"
              />
            </div>
            <div className="w-52 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button className="border-2 text-white p-4 w-full rounded text-xl font-bold group-hover:font-semibold  duration-500 ease-in-out group-hover:text-black group-hover:bg-white">
                Music
              </button>
            </div>
          </div>

          <div
            className="w-full group relative cursor-pointer"
            onClick={() => openModal("handicrafts")}
          >
            <div className="rounded overflow-hidden h-80 w-full">
              <img
                className="rounded h-full w-full object-cover group-hover:brightness-100 group-hover:scale-110 brightness-[0.8] duration-500 ease-in-out"
                src="https://images.unsplash.com/photo-1662717400948-990d71f9e3a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFuZGljcmFmdHMlMjBpbiUyMGluZGlhfGVufDB8fDB8fHww"
                alt="Handicrafts"
              />
            </div>
            <div className="w-52 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button className="border-2 text-white p-4 w-full rounded text-xl font-bold group-hover:font-semibold  duration-500 ease-in-out group-hover:text-black group-hover:bg-white ">
                Handicrafts
              </button>
            </div>
          </div>
          <div
            className="w-full group relative cursor-pointer"
            onClick={() => openModal("literature")}
          >
            <div className="rounded overflow-hidden h-96 w-full">
              <img
                className="rounded h-full w-full object-cover group-hover:brightness-100 group-hover:scale-110 brightness-[0.8] duration-500 ease-in-out"
                src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpdGVyYXR1cmV8ZW58MHx8MHx8fDA%3D"
                alt="Literature"
              />
            </div>
            <div className="w-52 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button className="border-2 text-white p-4 w-full rounded text-xl font-bold group-hover:font-semibold  duration-500 ease-in-out group-hover:text-black group-hover:bg-white ">
                Literature
              </button>
            </div>
          </div>
          <div
            className="w-full group relative cursor-pointer"
            onClick={() => openModal("monuments")}
          >
            <div className="rounded overflow-hidden h-80 w-full">
              <img
                className="rounded h-full w-full object-cover group-hover:brightness-100 group-hover:scale-110 brightness-[0.8] duration-500 ease-in-out"
                src="https://images.unsplash.com/photo-1517174953755-428506882aa8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9udW1lbnRzfGVufDB8fDB8fHww"
                alt="Monuments"
              />
            </div>
            <div className="w-52 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button className="border-2 text-white p-4 w-full rounded text-xl font-bold group-hover:font-semibold  duration-500 ease-in-out group-hover:text-black group-hover:bg-white ">
                Monuments
              </button>
            </div>
          </div>
          <div
            className="w-full group relative cursor-pointer"
            onClick={() => openModal("heritage")}
          >
            <div className="rounded overflow-hidden h-96 w-full">
              <img
                className="rounded h-full w-full object-cover group-hover:brightness-100 group-hover:scale-110 brightness-[0.8] duration-500 ease-in-out"
                src="https://images.unsplash.com/photo-1682687221363-72518513620e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVyaXRhZ2V8ZW58MHx8MHx8fDA%3D"
                alt="Heritage"
              />
            </div>
            <div className="w-52 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button className="border-2 text-white p-4 w-full rounded text-xl font-bold group-hover:font-semibold  duration-500 ease-in-out group-hover:text-black group-hover:bg-white ">
                Heritage
              </button>
            </div>
          </div>
          <div
            className="w-full group relative cursor-pointer"
            onClick={() => openModal("painting")}
          >
            <div className="rounded overflow-hidden h-80 w-full">
              <img
                className="rounded h-full w-full object-cover group-hover:brightness-100 group-hover:scale-110 brightness-[0.8] duration-500 ease-in-out"
                src="https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbnRpbmd8ZW58MHx8MHx8fDA%3D"
                alt="Painting"
              />
            </div>
            <div className="w-52 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button className="border-2 text-white p-4 w-full rounded text-xl font-bold group-hover:font-semibold  duration-500 ease-in-out group-hover:text-black group-hover:bg-white ">
                Painting
              </button>
            </div>
          </div>
        </div>
      </div>

      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 transition-opacity duration-300">
          <div className="relative bg-white h-[60vh] overflow-y-scroll w-[80vw] sm:w-[90vw] sm:text-sm rounded-lg shadow-lg transition-transform duration-300 transform scale-95">
            <div className="flex justify-between w-full sticky z-10 left-0 top-0 px-4 py-4 items-center overflow-hidden bg-white shadow-sm ">
              <h3 className="text-2xl text-gray-800 font-bold">
                {currentSection.charAt(0).toUpperCase() +
                  currentSection.slice(1)}
              </h3>
              <button
                className="  text-gray-500 hover:text-gray-500 transition-colors duration-200"
                onClick={closeModal}
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>
            <div className="px-6 mb-6">
              <Accordion theme={customTheme}>
                {data[currentSection].map((section, index) => (
                  <Accordion.Panel key={index}>
                    <Accordion.Title>
                      <div className="flex items-center">
                        <img
                          className="h-8 w-8 rounded"
                          src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400"
                          alt=""
                        />
                        <h2 className="ml-3 text-gray-800 text-lg sm:text-xl">
                          {section.type}
                        </h2>
                      </div>
                    </Accordion.Title>
                    <Accordion.Content className="px-0 py-2 sm:py-4">
                      <div className="flex flex-col justify-center">
                         {section.list.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={"culture-details"}
                          className="px-4 py-2 text-lg w-full hover:bg-gray-100"
                        >
                          {item}
                        </Link>
                      ))}
                      </div>
                     

                      {/* <ul className="list-none list-inside text-gray-700 ">
                        {section.list.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className=" p-2 w-full"
                          >
                            <Link to={"culture-details"} className="hover:underline text-lg w-full">
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul> */}
                    </Accordion.Content>
                  </Accordion.Panel>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ClrOfCulture;
