import React from "react";
import "./SectionHeaderStyles.css";
const SectionHeader = ({ id, children }) => {
  return (
    <h1 className='header' id={id && id}>
      {children}
    </h1>
  );
};

export default SectionHeader;
