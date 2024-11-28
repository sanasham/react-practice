import React from "react";

const Button = ({ name, value, click }) => {
  return (
    <div className="w-13 border bottom-1 border-black">
      <button onClick={click}>{name}</button>
      {"              "}
      <span>{value}</span>
    </div>
  );
};

export default Button;
