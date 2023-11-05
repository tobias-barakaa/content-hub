import React from "react";
import "./FormInput.css";

const FormInput = ({ type, name, labelText, defaultValue, onChange }) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor={name} for="name">{labelText || name}</label>
        <input type={type} id={name} name={name} defaultValue={defaultValue || ''} required />
      </div>
    </form>
  );
};

export default FormInput;
