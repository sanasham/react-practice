import React from "react";

const NewButton = (props) => {
  return (
    <div>
      {props.children}
      <br></br>
      <button onClick={props.incrementCount}>{props.name}</button>
    </div>
  );
};

export default NewButton;
