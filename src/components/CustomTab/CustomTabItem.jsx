import PropTypes from "prop-types";

const CustomTabItem = ({ children, isActive }) => {
  return (
    <div className={`tab-content ${!isActive && "hidden"} `}>
      {children}
    </div>
  );
};

CustomTabItem.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool,
};

export default CustomTabItem;
