import { Datepicker } from "flowbite-react";
import { useState, useEffect } from "react";
// import { CustomFlowbiteTheme } from "flowbite-react";

const DatePickerTheme = {
  "root": {
    "base": "relative",
    "inner":"dark:bg-blue-100" 
  },
  "popup": {
    "root": {
      "base": "absolute top-10 z-50 block pt-2 ",
      "inline": "relative top-0 z-auto",
      "inner": "inline-block rounded-lg bg-white p-4 shadow-lg"
    },
    "header": {
      "base": "",
      "title": "px-2 py-3 text-center font-semibold text-gray-900 dark:text-black",
      "selectors": {
        "base": "mb-2 flex justify-between",
        "button": {
          "base": "rounded-lg dark:bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-white dark:text-black dark:hover:bg-blue-600",
          "prev": "",
          "next": "",
          "view": ""
        }
      }
    },
    "view": {
      "base": "p-1"
    },
    "footer": {
      "base": "mt-2 flex space-x-2",
      "button": {
        "base": "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
        "today": "bg-blue-700 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700",
        "clear": "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-white dark:text-black dark:hover:bg-gray-200"
      }
    }
  },
  "views": {
    "days": {
      "header": {
        "base": "mb-1 grid grid-cols-7",
        "title": "h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400"
      },
      "items": {
        "base": "grid w-64 grid-cols-7",
        "item": {
          "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-black dark:hover:bg-gray-600",
          "selected": "bg-blue-600 text-white hover:bg-blue-600",
          "disabled": "text-gray-500"
        }
      }
    },
    "months": {
      "items": {
        "base": "grid w-64 grid-cols-4 ",
        "item": {
          "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-black dark:hover:bg-gray-600",
          "selected": "bg-blue-600 text-white hover:bg-blue-600",
          "disabled": "text-gray-500"
        }
      }
    },
    "years": {
      "items": {
        "base": "grid w-64 grid-cols-4",
        "item": {
          "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-black dark:hover:bg-gray-600",
          "selected": "bg-blue-700 text-white hover:bg-blue-600",
          "disabled": "text-gray-500"
        }
      }
    },
    "decades": {
      "items": {
        "base": "grid w-64 grid-cols-4 ",
        "item": {
          "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-blue-100 dark:text-black dark:hover:bg-blue-600",
          "selected": "bg-blue-700 text-black hover:bg-blue-600",
          "disabled": "text-gray-500"
        }
      }
    }
  }
}

const StateInfo = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("section.section");

    for (const section of sections) {
      const sectionTop = section.offsetTop - 200;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY <= sectionTop + sectionHeight
      ) {
        setActiveSection(section.id);
        return;
      }
    }
  };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="overview max-w-7xl mx-4 xl:mx-auto">
      {/* Sticky Header Section */}
      <div className="sticky md:top-[103px] top-[123px] bg-white z-[1]">
        <div className="container mx-auto py-4">
          <h2 className="text-2xl font-bold mb-4">
            Rajasthan Essential Information
          </h2>
          <ul className="scroll-list flex space-x-4 overflow-x-auto">
            <li
              className={`btn ${
                activeSection === "accommodation"
                  ? "text-yellow-500 font-bold"
                  : ""
              }`}
            >
              <a className="hover:underline" href="#accommodation">
                Accommodation
              </a>
            </li>
            <li
              className={`btn ${
                activeSection === "activities" ? "text-blue-500 font-bold" : ""
              }`}
            >
              <a className="hover:underline" href="#activities">
                Activities
              </a>
            </li>
            <li
              className={`btn ${
                activeSection === "tips" ? "text-green-500 font-bold" : ""
              }`}
            >
              <a className="hover:underline" href="#tips">
                Travel Tips
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto flex flex-col lg:flex-row mt-8">
        <div className="overview-main-s flex-1">
          <div className="overview-left">
            {/* Accommodation Section */}
            <section
              id="accommodation"
              className="section mb-8 p-4 rounded-lg bg-yellow-50 border"
            >
              <h2 className="text-xl font-bold mb-4">
                Where to Stay in Rajasthan?
              </h2>
              <p className="mb-4">
                Rajasthan offers a wide range of accommodations from budget to
                luxury, including heritage hotels, luxury camps, and homestays.
                Tour My India provides great deals and guarantees excellent
                services.
              </p>
            </section>

            {/* Activities Section */}
            <section
              id="activities"
              className="section mb-8 p-4 rounded-lg bg-blue-50 border"
            >
              <h2 className="text-xl font-bold mb-4">
                Major Activities for Tourists in Rajasthan
              </h2>
              <p className="mb-4">
                Explore wildlife safaris, hot-air balloon rides, camel safaris,
                desert camping, and cultural experiences like folk dances and
                music performances.
              </p>
            </section>

            {/* Travel Tips Section */}
            <section
              id="tips"
              className="section mb-8 p-4 rounded-lg bg-green-50 border"
            >
              <h2 className="text-xl font-bold mb-4">
                Travel Tips for Rajasthan
              </h2>
              <ul className="list-disc pl-4">
                <li className="mb-2">
                  Plan your itinerary according to Rajasthan's vast size.
                </li>
                <li className="mb-2">
                  Pack light cotton clothes and sunscreen for summers.
                </li>
                <li className="mb-2">
                  Respect local customs when visiting temples and heritage
                  sites.
                </li>
                <li className="mb-2">
                  Enjoy camel rides and stay hydrated throughout your visit.
                </li>
              </ul>
            </section>
          </div>
        </div>

        {/* Sidebar with Enquiry Form */}
        <div className="w-full lg:w-72 ml-0 lg:ml-8 mt-8 lg:mt-0 sticky top-20 border shadow-lg p-4 rounded-lg bg-white">
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
                {/* <DatePicker
                  id="datepicker"
                  name="date"
                  className="border p-2 w-full"
                  selected={null}
                /> */}
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
            <input
              type="hidden"
              name="itinerary"
              value=""
            />
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
    </section>
  );
};

export default StateInfo;
