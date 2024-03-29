import React from "react";

const CustomComponent = ({ label }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" />
    </div>
  );
};

export default CustomComponent;
