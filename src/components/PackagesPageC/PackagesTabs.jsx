import React from "react";
import { Tabs } from "flowbite-react";
import { useRef, useState } from "react";
import PackagesStateWise from "./PackageShowcaseTabs/PackagesStateWise";
import CustomTab from "../CustomTab/CustomTab";
import CustomTabItem from "../CustomTab/CustomTabItem";

const tabTheme = {
  base: "flex flex-col gap-2 flex-nowrap",
  tablist: {
    base: "flex text-center flex-nowrap",
    variant: {
      default: "border-b border-gray-200 flex-nowrap",
      underline: "-mb-px flex-nowrap border-b border-gray-200 ",
      pills: "flex-nowrap space-x-2 text-sm font-medium text-gray-500 ",
      fullWidth:
        "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow ",
    },
    tabitem: {
      base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none disabled:cursor-not-allowed ",
      variant: {
        default: {
          base: "rounded-t-lg",
          active: {
            on: "bg-gray-100 text-cyan-600  ",
            off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 ",
          },
        },
        underline: {
          base: "rounded-t-lg",
          active: {
            on: "active rounded-t-lg border-b-2 border-cyan-600 text-cyan-600 ",
            off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600",
          },
        },
        pills: {
          base: "",
          active: {
            on: "rounded-lg bg-blue-300 text-white",
            off: "rounded-lg hover:bg-gray-100 hover:text-gray-900",
          },
        },
        fullWidth: {
          base: "ml-0 flex w-full rounded-none first:ml-0",
          active: {
            on: "active rounded-none bg-gray-100 p-4 text-gray-900 ",
            off: "rounded-none bg-white hover:bg-gray-50 hover:text-gray-700 ",
          },
        },
      },
      icon: "mr-2 h-5 w-5",
    },
  },
  tabitemcontainer: {
    base: "",
    variant: {
      default: "",
      underline: "",
      pills: "",
      fullWidth: "",
    },
  },
  tabpanel: "py-3",
};

const PackagesTabs = () => {
  const tabsRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0); //incase tab state is needed in future
  // const [pageCount, setPageCount] = useState(0);

  return (
    <>
      <section className="my-5 mx-4 xl:mx-auto">
        <div className="text-3xl max-w-7xl flex flex-col gap-4 mx-auto mb-5 ">
          <h2 className="">Most Popular Pilgrimage Packages in India</h2>
        </div>
        <div className="">
        <CustomTab>
          <CustomTabItem label="Odisha">
            <PackagesStateWise stateName={"Odisha"} />
          </CustomTabItem>
          <CustomTabItem label="Maharashtra">
            <PackagesStateWise stateName={"Maharashtra"} />
          </CustomTabItem>
          <CustomTabItem label="Tamil Nadu">
            <PackagesStateWise stateName={"Tamil Nadu"} />
          </CustomTabItem>
          <CustomTabItem label="Karnataka">
            <PackagesStateWise stateName={"Karnataka"} />
          </CustomTabItem>
          <CustomTabItem label="Uttarakhand">
            <PackagesStateWise stateName={"Uttarakhand"} />
          </CustomTabItem>
        </CustomTab>
        </div>
      </section>
    </>
  );
};

export default PackagesTabs;
