import PropTypes from "prop-types";

const CustomTabItem = ({ children }) => {
  return (
    <div className="tab-content">
      {children}
    </div>
  );
};

CustomTabItem.propTypes = {
  children: PropTypes.object.isRequired,
};

export default CustomTabItem;