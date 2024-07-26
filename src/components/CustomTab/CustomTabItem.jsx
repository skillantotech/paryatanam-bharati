import React from 'react';

const CustomTabItem = ({ children }) => {
  return (
    <div className="tab-content ">
      {children}
    </div>
  );
};

export default CustomTabItem;