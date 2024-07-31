import { useState } from "react";
import PropTypes from "prop-types";
import React from "react";

const CustomTab = ({ children, customTheme }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs max-w-7xl xl:mx-auto flex flex-col">
      <ul
        className={`tab-list flex gap-2 cursor-pointer border-gray-300 overflow-x-scroll no-scrollbar py-1 ${
          customTheme ? "sm:justify-center" : ""
        }`}
      >
        {children.map((child) => {
          const { label } = child.props;
          return (
            <li
              key={label}
              className={`px-4 py-1 font-semibold border-2 flex items-center text-nowrap rounded-full ease-linear duration-150 ${
                label === activeTab
                  ? "tab-list-item active border-blue-500 bg-blue-500 text-white"
                  : "tab-list-item text-gray-600 border-gray-300 hover:bg-blue-100 hover:border-blue-100 hover:text-blue-600"
              }`}
              onClick={() => onClickTabItem(label)}
            >
              {label}
            </li>
          );
        })}
      </ul>
      <div className="tab-content">
        {children.map((child) => {
          return React.cloneElement(child, {
            key: child.props.label, // Use child.props.label as the key
            isActive: child.props.label === activeTab,
          });
        })}
      </div>
    </div>
  );
};

CustomTab.propTypes = {
  children: PropTypes.node,
  customTheme: PropTypes.bool,
};

export default CustomTab;
