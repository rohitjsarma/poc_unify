import React, { useState } from "react";
import { ReactFormBuilder } from "react-form-builder2";
import Draggable from "react-draggable";
import CustomComponent from "./CustomComponent"; 
import FormLayout from "./FormLayout";

const App = () => {
  const [formData, setFormData] = useState({});

  const onAddField = (fieldType) => {
    const newField = {
      [Date.now()]: {
        type: fieldType,
        required: false,
        x: 0,
        y: 0,
      }
    };
    setFormData({...formData, ...newField});
  };

  const onRemoveField = (key) => {
    const updatedFormData = { ...formData };
    delete updatedFormData[key];
    setFormData(updatedFormData);
  };

  const onDragStop = (event, data, key) => {
    setFormData({
      ...formData,
      [key]: {
        ...formData[key],
        x: data.x,
        y: data.y
      }
    });
  };

  return (
    <div>
      <button onClick={() => onAddField("text")}>Add Text Field</button>
      <button onClick={() => onAddField("checkbox")}>Add Checkbox</button>
      <button onClick={() => onAddField("select")}>Add Select Field</button>
      <button onClick={() => onAddField("custom")}>Add Custom Component</button> {/* Add button for custom component */}

      <ReactFormBuilder form={Object.values(formData)} onChange={(data) => setFormData(data.reduce((acc, curr) => ({...acc, [curr.key]: curr}), {}))} />

      {Object.keys(formData).map((key) => (
        <Draggable
          key={key}
          onStop={(e, data) => onDragStop(e, data, key)}
          defaultPosition={{ x: formData[key].x, y: formData[key].y }}
        >
          <div>
            {formData[key].type === "text" && <input type="text" />}
            {formData[key].type === "checkbox" && <input type="checkbox" />}
            {formData[key].type === "select" && (
              <select>
                <option value="">Select</option>
              </select>
            )}
            {formData[key].type === "custom" && <CustomComponent label="Custom Field" />} Render custom component
            
            <button onClick={() => onRemoveField(key)}>Remove</button>
          </div>
        </Draggable>
      ))}
      <FormLayout/>


    </div>
  );
};

export default App;
