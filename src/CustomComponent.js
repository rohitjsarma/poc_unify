import React from "react";

const CustomComponent = ({ label }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <label>{label}</label>
    
      <input type="text" style={{ width: '100%', height: '100%', border: 'none', outline: 'none', background: 'transparent' }} />
    </div>
  );
};

export default CustomComponent;
