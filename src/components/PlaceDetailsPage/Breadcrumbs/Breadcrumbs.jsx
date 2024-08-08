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
      className="max-w-7xl mx-8 xl:mx-auto mt-5"
      aria-label="Breadcrumb"
    >
      <Breadcrumb.Item href="#" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item>State</Breadcrumb.Item>
    </Breadcrumb>  
  );
};

export default Breadcrumbs;
