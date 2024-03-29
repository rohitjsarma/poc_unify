import React from 'react';
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const MyFirstGrid = () => {
  // Define form fields
  const formFields = [
    { key: "a", type: "text", label: "Text Field" },
    { key: "b", type: "checkbox", label: "Checkbox" },
    { key: "c", type: "select", label: "Select Field" }
  ];

  return (
    <GridLayout
      className="layout"
      cols={12}
      rowHeight={30}
      width={1200}
    >
      {formFields.map((field, index) => (
        <div key={field.key} data-grid={{ x: index % 12, y: Math.floor(index / 12), w: 1, h: 2 }}>
          {/* Render form field based on type */}
          {field.type === 'text' && <input type="text" placeholder={field.label} />}
          {field.type === 'checkbox' && <input type="checkbox" />} 
          {field.type === 'select' && (
            <select>
              <option value="">{field.label}</option>
              {/* Add options as needed */}
            </select>
          )}
        </div>
      ))}
    </GridLayout>
  );
}

export default MyFirstGrid;
