import AllBlogsShowcase from "./BlogsShowcaseTabs/AllBlogsShowcase";
import TourismShowcase from "./BlogsShowcaseTabs/TourismShowcase";
import ArtAndCultureShowcase from "./BlogsShowcaseTabs/ArtAndCultureShowcase";
import CuisineShowcase from "./BlogsShowcaseTabs/CuisineShowcase";
import CustomTab from "../CustomTab/CustomTab";
import CustomTabItem from "../CustomTab/CustomTabItem";

// const tabTheme = {
//   base: "flex flex-col gap-2",
//   tablist: {
//     base: "flex text-center",
//     variant: {
//       default: "flex-wrap border-b border-gray-200 ",
//       underline: "-mb-px flex-wrap border-b border-gray-200 ",
//       pills: "flex-wrap space-x-2 text-sm font-medium text-gray-500 ",
//       fullWidth:
//         "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow ",
//     },
//     tabitem: {
//       base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none disabled:cursor-not-allowed ",
//       variant: {
//         default: {
//           base: "rounded-t-lg",
//           active: {
//             on: "bg-gray-100 text-cyan-600",
//             off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600",
//           },
//         },
//         underline: {
//           base: "rounded-t-lg",
//           active: {
//             on: "active rounded-t-lg border-b-2 border-cyan-600 text-cyan-600 ",
//             off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600",
//           },
//         },
//         pills: {
//           base: "",
//           active: {
//             on: "rounded-lg bg-blue-300 text-white",
//             off: "rounded-lg hover:bg-gray-100 hover:text-gray-900",
//           },
//         },
//         fullWidth: {
//           base: "ml-0 flex w-full rounded-none first:ml-0",
//           active: {
//             on: "active rounded-none bg-gray-100 p-4 text-gray-900 ",
//             off: "rounded-none bg-white hover:bg-gray-50 hover:text-gray-700 ",
//           },
//         },
//       },
//       icon: "mr-2 h-5 w-5",
//     },
//   },
//   tabitemcontainer: {
//     base: "",
//     variant: {
//       default: "",
//       underline: "",
//       pills: "",
//       fullWidth: "",
//     },
//   },
//   tabpanel: "py-3",
// };

function BlogsShowcase() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col mx-4 mb-5 ">
        <CustomTab>
          <CustomTabItem label="All">
            <AllBlogsShowcase />
          </CustomTabItem>
          <CustomTabItem label="Tourism">
            <TourismShowcase />
          </CustomTabItem>
          <CustomTabItem label="Art & Culture">
            <ArtAndCultureShowcase />
          </CustomTabItem>
          <CustomTabItem label="Cuisine">
            <CuisineShowcase />
          </CustomTabItem>
        </CustomTab>
      </div>
    </div>
  );
}

export default BlogsShowcase;
