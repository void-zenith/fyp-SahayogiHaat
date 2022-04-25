import React from "react";

const InputField = ({ placeholder, type = "text", size = "", onChange }) => {
  return (
    <input
      className={`input ${size}`}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
    ></input>
  );
};

export default InputField;
