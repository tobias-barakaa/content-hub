import React from "react";
import "./FormInput.css";


const FormInput = ({ type, name, labelText, defaultValue, onChange, className  }) => {
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
          className={className}
        />
      </div>
    </div>

    
  );
};

export default FormInput;
