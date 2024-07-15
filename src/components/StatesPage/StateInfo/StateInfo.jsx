import { Datepicker } from "flowbite-react";
import { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const StateInfo = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section.section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50; // Adjusted for sticky header
        const sectionHeight = section.clientHeight;
        if (
          window.pageYOffset >= sectionTop &&
          window.pageYOffset < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="main-sticky" className="overview max-w-7xl mx-4 xl:mx-auto">
      {/* Sticky Header Section */}
      <div id="main-sticky-2" className="sticky top-[103px] bg-white z-[1]">
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
            name="contactus"
            id="contactus"
            method="post"
            action=""
          >
            <div className="form-group mb-4">
              <label className="block mb-2">Your Full Name</label>
              <input
                type="text"
                name="fname"
                id="to"
                className="border p-2 w-full"
                autoComplete="off"
              />
            </div>
            <div className="form-group mb-4">
              <label className="block mb-2">Tour Description</label>
              <textarea
                name="message"
                id="from"
                className="border p-2 w-full"
                autoComplete="off"
                rows="4"
                cols="50"
              ></textarea>
            </div>
            <div className="form-group mb-4 flex flex-col">
              <div className="form-half mb-4 lg:mb-0 lg:mr-2">
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
                  className="border p-2 w-full"
                />
              </div>
              <div className="form-half lg:ml-2">
                <label className="block mb-2">Number of Days</label>
                <input
                  name="duration_of_stay"
                  id="duration_of_stay"
                  className="border p-2 w-full"
                  autoComplete="off"
                />
              </div>
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
              value="https://www.tourmyindia.com/states/rajasthan/"
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
