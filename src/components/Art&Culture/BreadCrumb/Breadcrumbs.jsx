import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

const customTheme = {
  root: {
    base: "",
    list: "flex items-center",
  },
  item: {
    base: "group flex items-center",
    chevron: "mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2",
    href: {
      off: "flex items-center text-base font-medium text-gray-500 dark:text-gray-500",
      on: "flex items-center text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-700 dark:hover:text-gray-900",
    },
    icon: "mr-2 h-4 w-4",
  },
};

const Breadcrumbs = () => {
  return (
    <Breadcrumb
      theme={customTheme}
      className="max-w-7xl mx-4 xl:mx-auto mt-12"
      aria-label="Breadcrumb"
    >
      <Breadcrumb.Item href="#" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item>Art</Breadcrumb.Item>
    </Breadcrumb>

    // <div
    //   className="max-w-7xl mx-4 xl:mx-auto flex"
    //   aria-label="Breadcrumb"
    // >
    //   <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    //     <li className="inline-flex items-center">
    //       <a
    //         href="#"
    //         className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
    //       >
    //         <svg
    //           className="w-3 h-3 me-2.5"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //         >
    //           <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
    //         </svg>
    //         {/* Home */}
    //       </a>
    //     </li>
    //     <li>
    //       <div className="flex items-center">
    //         <svg
    //           className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 "
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 6 10"
    //         >
    //           <path
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="m1 9 4-4-4-4"
    //           />
    //         </svg>
    //         <a
    //           href="#"
    //           className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-blue-500"
    //         >
    //           States
    //         </a>
    //       </div>
    //     </li>
    //     <li aria-current="page">
    //       <div className="flex items-center">
    //         <svg
    //           className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 6 10"
    //         >
    //           <path
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="m1 9 4-4-4-4"
    //           />
    //         </svg>
    //         <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:hover:text-blue-500">
    //           States
    //         </span>
    //       </div>
    //     </li>
    //   </ol>
    // </div>
  );
};

export default Breadcrumbs;
