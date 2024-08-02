import PackagesStateWise from "./PackageShowcaseTabs/PackagesStateWise";
import CustomTab from "../CustomTab/CustomTab";
import CustomTabItem from "../CustomTab/CustomTabItem";

const PackagesTabs = () => {
  return (
    <>
      <section className="my-5 mx-4 xl:mx-auto">
        <div className="text-3xl max-w-7xl flex flex-col gap-4 mx-auto mb-5 ">
          <h2 className="">Most Popular Pilgrimage Packages in India</h2>
        </div>
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
      </section>
    </>
  );
};

export default PackagesTabs;
