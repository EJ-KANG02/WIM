import React from 'react';
import './InputField.css';

const InputField = ({label, name, placeholder, value, readOnly, onChange}) => {
  return (
    <>
      <label htmlFor={name}>{label}: </label>
      <input
        type="text"
        className="userInform"
        name={name}
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        onChange={onChange}
      />
    </>
  )
}

export default InputField;
