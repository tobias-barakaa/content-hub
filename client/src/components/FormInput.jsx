import React from "react";
import "./FormInput.css";


const FormInput = ({ type, name, labelText, defaultValue, onChange }) => {
  return (
    <div>


      <div className="form-group">
        <label htmlFor={name} for="name">
          {labelText || name}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          defaultValue={defaultValue || ""}
          onChange={onChange}
          required
        />
      </div>
    </div>

    
  );
};

export default FormInput;
