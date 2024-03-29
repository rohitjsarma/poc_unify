import React, { useState } from "react";
import { ReactFormBuilder } from "react-form-builder2";
import Draggable from "react-draggable";

const App = () => {
  const [formData, setFormData] = useState([]);

  const onAddField = (fieldType) => {
    const newField = {
      key: Date.now(), // Unique key for the field
      type: fieldType,
      name: fieldType + "_" + Date.now(), // Unique name for the field
      required: false,
    };
    setFormData([...formData, newField]);
  };

  const onRemoveField = (key) => {
    const updatedFormData = formData.filter((field) => field.key !== key);
    setFormData(updatedFormData);
  };

  const onDragStop = (event, data, key) => {
    const updatedFormData = formData.map((field) => {
      if (field.key === key) {
        return { ...field, x: data.x, y: data.y };
      }
      return field;
    });
    setFormData(updatedFormData);
  };

  return (
    <div>
      <button onClick={() => onAddField("text")}>Add Text Field</button>
      <button onClick={() => onAddField("checkbox")}>Add Checkbox</button>
      <button onClick={() => onAddField("select")}>Add Select Field</button>

      <ReactFormBuilder form={formData} onChange={setFormData} />

      {formData.map((field) => (
        <Draggable
          key={field.key}
          onStop={(e, data) => onDragStop(e, data, field.key)}
          defaultPosition={{ x: field.x || 0, y: field.y || 0 }}
        >
          <div>
            {field.type === "text" && <input type="text" />}
            {field.type === "checkbox" && <input type="checkbox" />}
            {field.type === "select" && (
              <select>
                <option value="">Select</option>
              </select>
            )}
            <button onClick={() => onRemoveField(field.key)}>Remove</button>
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default App;
