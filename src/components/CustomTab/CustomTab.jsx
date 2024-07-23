import React, { useState } from "react";

const CustomTab = ({ children, customTheme }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs max-w-7xl mx-auto flex flex-col ">
      <ul
        className={`tab-list flex gap-2 cursor-pointer mx-4 border-gray-300 overflow-x-scroll no-scrollbar py-1 ${
          customTheme ? "sm:justify-center" : ""
        }`}
      >
        {children.map((child) => {
          const { label } = child.props;
          return (
            <li
              key={label}
              className={` px-4 py-2 border-2 flex items-center text-nowrap rounded-full ease-linear duration-150 hover:bg-blue-400 hover:text-white ${
                label === activeTab
                  ? "tab-list-item active border-blue-500 bg-blue-500 font-semibold text-white"
                  : "tab-list-item"
              }`}
              onClick={() => onClickTabItem(label)}
            >
              {label}
            </li>
          );
        })}
      </ul>
      <div className="tab-content mx-4 overflow-hidden">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

export default CustomTab;
