import { Datepicker } from "flowbite-react";
import { useState } from "react";

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

const PlaceDetailOverview = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container max-w-7xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row">
        {/* <div className="lg:w-2/3 p-4">
        <div  className="bg-white p-6 shadow-lg rounded-lg mb-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Overview</h3>
            <p className="mb-4 text-gray-700">
              Kashmir is one of the top honeymoon destinations in India for couples looking for a romantic holiday.
            </p>
            <p className="mb-4 text-gray-700">
              The 5 nights 6 days romantic holiday package takes you to three awe-inspiring destinations in Kashmir.
            </p>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${showMore ? 'max-h-96' : 'max-h-0'}`}
            >
              <p className="mb-4 text-gray-700">
                Begin your Kashmir romantic getaway tour from Srinagar where you can enjoy a romantic stay and candle light dinner.
              </p>
            </div>
            <button
              onClick={toggleShowMore}
              className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-700"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        </div> */}
        {/* Form */}
        <div className="w-full lg:w-1/3 lg:ml-8 mt-8 lg:mt-0 sticky top-20 border shadow-lg p-6 rounded-lg bg-white">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Book Now</h2>
          <form className="booking" name="contactus" id="contactus" method="post" action="">
            <div className="form-group mb-6">
              <label className="block mb-2 text-gray-700">Your Full Name</label>
              <input
                type="text"
                name="fname"
                id="to"
                className="border p-3 w-full rounded-lg"
                autoComplete="off"
              />
            </div>
            <div className="form-group mb-6">
              <label className="block mb-2 text-gray-700">Tour Description</label>
              <textarea
                name="message"
                id="from"
                className="border p-3 w-full rounded-lg"
                autoComplete="off"
                rows="4"
                cols="50"
              ></textarea>
            </div>
            <div className="form-group mb-6">
              <label className="block mb-2 text-gray-700">Departure Date</label>
              <Datepicker
                id="datepicker"
                name="date"
                className="border p-3 w-full rounded-lg"
                theme={DatePickerTheme}
              />
            </div>
            <div className="form-group mb-6">
              <label className="block mb-2 text-gray-700">Number of Days</label>
              <input
                name="duration_of_stay"
                id="duration_of_stay"
                className="border p-3 w-full rounded-lg"
                autoComplete="off"
              />
            </div>
            <div className="form-group mb-6">
              <input
                className="border p-3 w-full rounded-lg"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group mb-6">
              <input
                className="border p-3 w-full rounded-lg"
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
            <div className="form-group">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg w-full"
                type="submit"
                name="submit"
              >
                Get a Custom Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetailOverview;

