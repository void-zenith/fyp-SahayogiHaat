import React from "react";

export const Button = ({
  label,
  size = "",
  variant = "primary",
  onClick,
  type,
  id,
}) => {
  return (
    <button
      className={`btn ${type} ${variant} ${size}`}
      onClick={onClick}
      id={id}
    >
      {label}
    </button>
  );
};

export default Button;
