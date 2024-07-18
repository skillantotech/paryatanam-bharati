import React from "react";
import CustomTab from "../CustomTab/CustomTab";
import CustomTabItem from "../CustomTab/CustomTabItem";
import PackagesStateWise from "./PackageShowcaseTabs/PackagesStateWise";

const PilgrimageReligionTabs = () => {
  return (
    <section className="my-10">
      <div className="text-3xl max-w-7xl flex flex-col gap-4 mx-auto my-5 ">
        <h2 className="mx-4">Popular Pilgrimage Packages in India by Religion</h2>
      </div>
      <CustomTab>
        <CustomTabItem label="Hindu">
          <PackagesStateWise stateName={"Odisha"} />
        </CustomTabItem>
        <CustomTabItem label="Sikh">
          <PackagesStateWise stateName={"Maharashtra"} />
        </CustomTabItem>
        <CustomTabItem label="Christian">
          <PackagesStateWise stateName={"Tamil Nadu"} />
        </CustomTabItem>
        <CustomTabItem label="Muslim">
          <PackagesStateWise stateName={"Karnataka"} />
        </CustomTabItem>
      </CustomTab>
    </section>
  );
};

export default PilgrimageReligionTabs;
