import React from "react";
import CustomTab from "../CustomTab/CustomTab";
import CustomTabItem from "../CustomTab/CustomTabItem";
import PackagesStateWise from "./PackageShowcaseTabs/PackagesStateWise";

const OtherPackagesTabs = () => {
  return (
    <section className="my-10">
      <div className="text-3xl max-w-7xl flex flex-col gap-4 mx-auto my-5 ">
        <h2 className="mx-4">Checkout other Tour Packages by Paryatanm Bharti</h2>
      </div>

      <CustomTab>
        <CustomTabItem label="Heritage">
          <PackagesStateWise stateName={"Odisha"} />
        </CustomTabItem>
        <CustomTabItem label="Museums">
          <PackagesStateWise stateName={"Maharashtra"} />
        </CustomTabItem>
        <CustomTabItem label="Yoga & Ayurveda">
          <PackagesStateWise stateName={"Tamil Nadu"} />
        </CustomTabItem>
        <CustomTabItem label="Destination Wedding">
          <PackagesStateWise stateName={"Karnataka"} />
        </CustomTabItem>
        <CustomTabItem label="HoneyMoon">
          <PackagesStateWise stateName={"Odisha"} />
        </CustomTabItem>
        <CustomTabItem label="Beach">
          <PackagesStateWise stateName={"Karnataka"} />
        </CustomTabItem>
        <CustomTabItem label="Hill Station">
          <PackagesStateWise stateName={"Odisha"} />
        </CustomTabItem>
      </CustomTab>
    </section>
  );
};

export default OtherPackagesTabs;
