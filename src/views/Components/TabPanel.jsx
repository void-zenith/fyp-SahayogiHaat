import React from "react";
import PropTypes from "prop-types";

const TabPanel = ({ children, value, index, ...other }) => {
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  return (
    <div
      role="tabpanel"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          <p>{children}</p>
        </div>
      )}
    </div>
  );
};

export default TabPanel;
