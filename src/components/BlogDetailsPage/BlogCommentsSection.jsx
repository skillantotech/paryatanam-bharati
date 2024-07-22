import { BsThreeDots } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { TbMessage } from "react-icons/tb";

const BlogCommentsSection = () => {
  return (
    <div className="flex flex-col py-2 mb-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900">
          Discussion (20)
        </h2>
      </div>
      <form className="mb-6">
        <div className="py-2 px-4 mb-4 bg-slate-50 rounded-lg rounded-t-lg border border-gray-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-200">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows="6"
            className="px-0 w-full text-sm text-gray-900 bg-slate-50 border-0 focus:ring-0 focus:outline-none"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200"
        >
          Post comment
        </button>
      </form>
      <article className="p-6 text-base bg-white rounded-lg">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="Priyanka Nayak"
              />
              Priyanka Nayak
            </p>
            <p className="text-sm text-gray-600">
              <time dateTime="2024-02-08" title="February 8th, 2024">
                Feb. 8, 2024
              </time>
            </p>
          </div>
          <button
            id="dropdownComment1Button"
            data-dropdown-toggle="dropdownComment1"
            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
            type="button"
          >
            <BsThreeDots />
            <span className="sr-only">Comment settings</span>
          </button>
          {/* Dropdown menu  */}
          <div
            id="dropdownComment1"
            className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow"
          >
            <ul
              className="py-1 text-sm text-gray-700"
              aria-labelledby="dropdownMenuIconHorizontalButton"
            >
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                  Edit
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                  Remove
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                  Report
                </a>
              </li>
            </ul>
          </div>
        </footer>
        <p className="text-gray-500">
          Very straight-to-point article. Really worth time reading. Thank you!
          But tools are just the instruments for the UX designers. The knowledge
          of the design tools are as important as the creation of the design
          strategy.
        </p>
        <div className="flex items-center mt-4 space-x-4">
          <button
            type="button"
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 font-medium"
          >
            <AiOutlineLike />
            <span className="text-gray-500">8</span>
            Like
          </button>

          <button
            type="button"
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 font-medium"
          >
            <TbMessage />
            Reply
          </button>
        </div>
      </article>
      <article className="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Surjit Routray"
              />
              Surjit Routray
            </p>
            <p className="text-sm text-gray-600">
              <time dateTime="2024-02-12" title="February 12th, 2024">
                Feb. 12, 2024
              </time>
            </p>
          </div>
          <button
            id="dropdownComment2Button"
            data-dropdown-toggle="dropdownComment2"
            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
            type="button"
          >
            <BsThreeDots />
            <span className="sr-only">Comment settings</span>
          </button>
          {/* Dropdown menu */}
          <div
            id="dropdownComment2"
            className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow"
          >
            <ul
              className="py-1 text-sm text-gray-700"
              aria-labelledby="dropdownMenuIconHorizontalButton"
            >
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                  Edit
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                  Remove
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                  Report
                </a>
              </li>
            </ul>
          </div>
        </footer>
        <p className="text-gray-500">Much appreciated! Glad you liked it ☺️</p>
        <div className="flex items-center mt-4 space-x-4">
          <button
            type="button"
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 font-medium"
          >
            <AiOutlineLike />
            <span className="text-gray-500">1</span>
            Like
          </button>

          <button
            type="button"
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 font-medium"
          >
            <TbMessage />
            Reply
          </button>
        </div>
      </article>
      <article className="p-6 mb-3 text-base bg-white border-t border-gray-200">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="Milan Mahapatra"
              />
              Milan Mahapatra
            </p>
            <p className="text-sm text-gray-600">
              <time dateTime="2024-03-12" title="March 12th, 2024">
                Mar. 12, 2024
              </time>
            </p>
          </div>
          <button
            id="dropdownComment3Button"
            data-dropdown-toggle="dropdownComment3"
            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
            type="button"
          >
            <BsThreeDots />
            <span className="sr-only">Comment settings</span>
          </button>
          {/* Dropdown menu  */}
          <div
            id="dropdownComment3"
            className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow"
          >
            <ul
              className="py-1 text-sm text-gray-700"
              aria-labelledby="dropdownMenuIconHorizontalButton"
            >
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                  Edit
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                  Remove
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                  Report
                </a>
              </li>
            </ul>
          </div>
        </footer>
        <p className="text-gray-500">
          The article covers the essentials, challenges, myths and stages the UX
          designer should consider while creating the design strategy.
        </p>
        <div className="flex items-center mt-4 space-x-4">
          <button
            type="button"
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 font-medium"
          >
            <AiOutlineLike />
            <span className="text-gray-500">6</span>
            Like
          </button>

          <button
            type="button"
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 font-medium"
          >
            <TbMessage />
            Reply
          </button>
        </div>
      </article>
      <article className="p-6 text-base bg-white border-t border-gray-200">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                alt="Priyanka Nayak"
              />
              Priyanka Nayak
            </p>
            <p className="text-sm text-gray-600">
              <time dateTime="2024-06-23" title="June 23rd, 2024">
                Jun. 23, 2024
              </time>
            </p>
          </div>
          <button
            id="dropdownComment4Button"
            data-dropdown-toggle="dropdownComment4"
            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
            type="button"
          >
            <BsThreeDots />
          </button>
          {/* Dropdown menu  */}
          <div
            id="dropdownComment4"
            className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow"
          >
            <ul
              className="py-1 text-sm text-gray-700"
              aria-labelledby="dropdownMenuIconHorizontalButton"
            >
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                  Edit
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                  Remove
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                  Report
                </a>
              </li>
            </ul>
          </div>
        </footer>
        <p className="text-gray-500">
          Thanks for sharing this. I do came from the Backend development and
          explored some of the tools to design my Side Projects.
        </p>
        <div className="flex items-center mt-4 space-x-4">
          <button
            type="button"
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 font-medium"
          >
            <AiOutlineLike />
            <span className="text-gray-500">9</span>
            Like
          </button>

          <button
            type="button"
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 font-medium"
          >
            <TbMessage />
            Reply
          </button>
        </div>
      </article>

      <div className="self-center px-4 py-1 mb-4 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full w-fit cursor-pointer">
        View More
      </div>
    </div>
  );
};

export default BlogCommentsSection;
