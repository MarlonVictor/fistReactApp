import React from "react";

const FormField = ({ placeholder, type, name, value, onChange }) => {
  return (
    <div>
        <input
          placeholder={placeholder}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
    </div>
  )
}

export default FormField;