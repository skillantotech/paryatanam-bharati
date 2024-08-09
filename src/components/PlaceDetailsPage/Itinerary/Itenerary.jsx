import { useState } from "react";
import { Datepicker } from "flowbite-react";

const DatePickerTheme = {
  root: {
    base: "relative",
    inner: "dark:bg-blue-100",
  },
  popup: {
    root: {
      base: "absolute top-10 z-50 block pt-2",
      inline: "relative top-0 z-auto",
      inner: "inline-block rounded-lg bg-white p-4 shadow-lg bg-white",
    },
    header: {
      base: "",
      title:
        "px-2 py-3 text-center font-semibold text-gray-900 dark:text-black",
      selectors: {
        base: "mb-2 flex justify-between",
        button: {
          base: "rounded-lg dark:bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-white dark:text-black dark:hover:bg-blue-600",
          prev: "",
          next: "",
          view: "",
        },
      },
    },
    view: {
      base: "p-1",
    },
    footer: {
      base: "mt-2 flex space-x-2",
      button: {
        base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
        today:
          "bg-blue-700 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700",
        clear:
          "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-white dark:text-black dark:hover:bg-gray-200",
      },
    },
  },
  views: {
    days: {
      header: {
        base: "mb-1 grid grid-cols-7",
        title:
          "h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400",
      },
      items: {
        base: "grid w-64 grid-cols-7",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-black dark:hover:bg-gray-600",
          selected: "bg-blue-600 text-white hover:bg-blue-600",
          disabled: "text-gray-500",
        },
      },
    },
    months: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-black dark:hover:bg-gray-600",
          selected: "bg-blue-600 text-white hover:bg-blue-600",
          disabled: "text-gray-500",
        },
      },
    },
    years: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-black dark:hover:bg-gray-600",
          selected: "bg-blue-700 text-white hover:bg-blue-600",
          disabled: "text-gray-500",
        },
      },
    },
    decades: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-blue-100 dark:text-black dark:hover:bg-blue-600",
          selected: "bg-blue-700 text-black hover:bg-blue-600",
          disabled: "text-gray-500",
        },
      },
    },
  },
};

const Itinerary = () => {
  const [activeItem, setActiveItem] = useState(0);

  const toggleAccordion = (index) => {
    setActiveItem(index === activeItem ? -1 : index);
  };

  const itineraryData = [
    {
      day: "Day 1",
      title: "Arrive Srinagar – Shikara Ride",
      tags: [
        "Arrival Transfer",
        "Shikara Ride",
        "Houseboat Stay",
        "Lunch",
        "Candle light Dinner",
      ],
      benefits: ["Breakfast", "Transfers", "Stay Included"],
      description: `
        Welcome to Srinagar, the Lake City. On arrival at the Srinagar Airport, you will be received by Tour My India’s representative / driver.
        The houseboat at Dal is going to be your romantic abode for the first night of your Romantic Getaway tour. After check-in, you can relax for a while.
        Later, in the evening proceed for a shikara ride on Dal lake.
        Overnight stay at the houseboat.
      `,
    },
    {
      day: "Day 2",
      title: "Srinagar City Sightseeing",
      tags: [
        "Breakfast",
        "Sightseeing tour",
        "Mughal Gardens",
        "Shikara Ride",
        "Hotel Stay",
        "Lunch",
        "Dinner",
      ],
      description: `
        After breakfast, visit the world-famous Mughal Gardens - Nishat Bagh (The garden of pleasure), Shalimar Bagh (Abode of love), and Chashme Shahi Garden,
        and also pay visit to the Shankaracharya Temple. Evening free for shopping.
        Overnight stay at the houseboat.
      `,
    },
    {
      day: "Day 3",
      title:
        "Srinagar – Excursion to Gulmarg (60 km / Approx 2-3 Hours Drive- One Way)",
      tags: [
        "Breakfast",
        "Sightseeing",
        "Horse/Pony Ride",
        "Gondola Ride",
        "Golf Course",
        "Children's Park",
        "Hotel Stay",
        "Lunch",
        "Dinner",
      ],
      description: `
        After breakfast, drive to Gulmarg. Enjoy sightseeing and activities like ropeway ride on Gulmarg Gondola,
        visit Apharwat Peak, and capture beautiful pictures. Overnight stay at hotel.
      `,
    },
    {
      day: "Day 4",
      title:
        "Srinagar – Excursion to Pahalgam (100 Km / Approx. 3½ Hour Drive - One Way)",
      tags: [
        "Breakfast",
        "Sightseeing",
        "Avantipura Ruins",
        "Cricket bat factory",
        "Saffron fields",
        "Betaab Valley",
        "Aru Valley",
        "Chandanwari",
        "Horse/Pony Ride",
        "River Rafting",
        "Hotel Stay",
        "Lunch",
        "Dinner",
      ],
      description: `
        After breakfast, drive to Pahalgam. Visit Saffron fields, Awantipur ruins, and enjoy scenic beauty.
        Explore Chandanwadi, Snow Point, and take pony rides (expenses on your own).
        Return to your hotel in the evening. Dinner at the hotel.
      `,
    },
    {
      day: "Day 5",
      title: "Srinagar - Shopping",
      tags: ["Breakfast", "Shopping", "Hotel Stay", "Lunch", "Dinner"],
      description: `
        After breakfast, spend the day shopping in Srinagar for Kashmiri handicrafts and souvenirs.
        Evening free for leisure. Overnight stay at the hotel.
      `,
    },
    {
      day: "Day 6",
      title: "Srinagar Airport Drop",
      tags: ["Breakfast", "Departure Transfer"],
      description: `
        Enjoy breakfast at your hotel in Srinagar. After breakfast, transfer to Srinagar Airport for your departure.
        Please leave early due to security checks. Tour ends with memorable experiences from Tour My India.
      `,
    },
  ];

  return (
    <div className="max-w-7xl mx-4 xl:mx-auto flex flex-col lg:flex-row">
      <div className="w-full lg:w-2/3">
        <h3 className="text-3xl font-bold mb-4">Itinerary</h3>
        <div className="">
          {itineraryData.map((item, index) => (
            <div key={index} className="flex">
              <div className="flex flex-col items-center mr-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activeItem === index
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {index + 1}
                </div>
                {index < itineraryData.length - 1 && (
                  <div className="h-full w-0.5 bg-gray-300"></div>
                )}
              </div>
              <div className="flex-1 mb-4 ">
                <div
                  className="cursor-pointer p-4 border border-gray-300 rounded-md shadow-md"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="flex items-center justify-between">
                    <h4 className="text-xl font-semibold">
                      {item.day} - {item.title}
                    </h4>
                    <span
                      className={`transform transition-transform duration-500 ${
                        activeItem === index ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </span>

                  <div
                    className={`overflow-hidden transition-all duration-500  ${
                      activeItem === index ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="border-2 border-blue-500 hover:bg-blue-50 bg-blue-500 duration-150  hover:text-blue-500 text-white font-semibold px-2 py-1 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      <p className="m-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Form */}
      <div className="w-full lg:w-1/4 ml-0 lg:ml-8 mt-8 lg:mt-0 sticky top-20 border shadow-lg p-4 rounded-lg bg-white">
        <h2 className="text-xl font-bold mb-4">Fill Enquiry Form Below</h2>
        <form
          className="booking"
          name="contactUs"
          id="contactUs"
          method="post"
          action=""
        >
          <div className="form-group mb-4">
            <label className="block mb-2">Full Name</label>
            <input
              type="text"
              name="fname"
              id="to"
              className="border p-2 w-full"
              placeholder="Your Full Name"
              autoComplete="off"
            />
          </div>
          <div className="form-group mb-4">
            <label className="block mb-2">Tour Description</label>
            <textarea
              name="message"
              id="from"
              className="border p-2 w-full"
              placeholder="Write your tour description here"
              autoComplete="off"
              rows="4"
              cols="50"
            ></textarea>
          </div>
          <div className="form-half mb-4">
            <label className="block mb-2">Departure Date</label>
            <Datepicker
              id="datepicker"
              name="date"
              theme={DatePickerTheme}
              className="[&_input]:rounded-none [&_input]:border-gray-200 [&_input]:bg-white"
            />
          </div>
          <div className="form-half mb-4">
            <label className="block mb-2">Number of Days</label>
            <input
              name="duration_of_stay"
              id="duration_of_stay"
              className="border p-2 w-full"
              placeholder="Write your number of days here"
              autoComplete="off"
            />
          </div>
          <div className="form-group mb-4">
            <input
              className="border p-2 w-full"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group mb-4">
            <input
              className="border p-2 w-full"
              type="tel"
              id="contact"
              name="contact"
              placeholder="Contact No"
            />
          </div>
          <input type="hidden" name="itinerary" value="" />
          <div className="form-group mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
              type="submit"
              name="submit"
            >
              Get a Custom Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Itinerary;
